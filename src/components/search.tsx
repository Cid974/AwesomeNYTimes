import React, { useState, useContext } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import { apiCall, apiKey } from "../utils/constants";
import { ArticleContext } from "../store/articleContext";

const Search = () => {
  const store = useContext(ArticleContext);
  const [keyword, setKeyword] = useState("");
  const [save, setSave] = useState<Array<string>>(["guitar"]);
  const { dispatch } = store;

  const saveKeyword = () => {
    if (keyword === save[0]) {
      setSave((save) => [...save, keyword]);
    }
  };

  const getArticles = async () => {
    const results = await axios(apiCall(keyword, apiKey));
    const response = results.data.response;

    console.log(response);
    const hits = response.meta.hits;
    const offset = response.meta.offset;
    const articles = response.docs.map((item: any) => {
      const data = { id: "", abstract: "", url: "" };
      data.id = item._id;
      data.abstract = item.abstract;
      data.url = item.web_url;
      return data;
    });
    console.log(hits);
    console.log(offset);
    console.log(articles);
    dispatch({ type: "NEW_SEARCH", payload: { hits, offset, articles } });
  };

  return (
    <div>
      <Autocomplete
        freeSolo
        id="search"
        disableClearable
        options={save.map((option: string) => option)}
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
      <Button
        onClick={() => {
          saveKeyword();
          getArticles();
        }}
      >
        Send
      </Button>
    </div>
  );
};

export default Search;
