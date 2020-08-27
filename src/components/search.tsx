import React, { useState, useContext } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import { firstCall, apiKey, formatArticle } from "../utils/constants";
import { ArticleContext } from "../store/articleContext";
import "../style/Search.css";

const Search = () => {
  const store = useContext(ArticleContext);
  const [keyword, setKeyword] = useState("");
  const [save, setSave] = useState<Array<string>>(["guitar"]);
  const { dispatch } = store;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "LOAD", payload: true });
    saveKeyword();
    getArticles();
  };

  const saveKeyword = () => {
    if (save.indexOf(keyword) === -1) {
      setSave((save) => [...save, keyword]);
    }
  };

  const getArticles = async () => {
    const results = await axios(firstCall(keyword, apiKey));
    const response = results.data.response;

    const hits = response.meta.hits;
    const offset = response.meta.offset;
    const articles = formatArticle(response.docs);
    console.log(hits);
    console.log(offset);
    console.log(articles);
    dispatch({
      type: "NEW_SEARCH",
      payload: { keyword, hits, offset, articles },
    });
  };

  return (
    <div className="Search">
      <form className="SearchForm" onSubmit={(e) => handleSubmit(e)}>
        <div className="Search_Field">
          <Autocomplete
            freeSolo
            id="search"
            disableClearable
            options={save.map((option: string) => option)}
            onChange={(e, value) => setKeyword(value)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Keyword"
                margin="normal"
                variant="outlined"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                InputProps={{ ...params.InputProps, type: "search" }}
              />
            )}
          />
        </div>
        <div className="Search_Button">
          <Button variant="contained" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Search;
