import React, { useContext } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import { ListItem, IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { ArticleContext, IArticle } from "../store/articleContext";

import "../style/Table.css";

const BookmarkTable = () => {
  const data = useContext(ArticleContext);
  const { state, dispatch } = data;
  const match = useRouteMatch();

  const renderRow = (props: ListChildComponentProps) => {
    const { index, style } = props;

    const top = style.top! as number;

    const padding = `${top + 10}px`;

    const handleBookmark = () => {
      const stateArticle = [...state.articles];

      stateArticle[index].marked = !stateArticle[index].marked;

      const id = state.bookmarks[index].id;
      const newMark = state.bookmarks.filter(
        (article: IArticle) => article.id !== id
      );
      dispatch({
        type: "MARK",
        payload: { articles: stateArticle, bookmark: newMark },
      });
    };

    return (
      <ListItem style={{ ...style, top: padding }} key={index}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to={`${match.path}/${state.articles[index].id}`}>
            {state.bookmarks[index].headline}
          </Link>
          <IconButton onClick={() => handleBookmark()}>
            <FavoriteIcon />
          </IconButton>
        </div>
      </ListItem>
    );
  };

  return (
    <div className="Table">
      {state.bookmarks.length < 1 ? (
        <span>No bookmarks yet!</span>
      ) : (
        <div className="ListContainer">
          <FixedSizeList
            height={400}
            width="100%"
            itemSize={100}
            itemCount={state.bookmarks.length}
          >
            {renderRow}
          </FixedSizeList>
        </div>
      )}
    </div>
  );
};

export default BookmarkTable;
