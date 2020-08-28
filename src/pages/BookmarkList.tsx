import React, { useContext } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import { ArticleContext } from "../store/articleContext";
import Back from "../components/backButton";
import BookmarkTable from "../components/bookmarkTable";
import Details from "./Details";

import "../style/Bookmarks.css";

const BookmarkList = () => {
  const match = useRouteMatch();
  const data = useContext(ArticleContext);
  const { state } = data;

  return (
    <div className="Bookmarks">
      <Switch>
        <Route path={`${match.path}/:articleId`}>
          <Details source={"Bookmark"} />
        </Route>
        <Route path={match.path}>
          <div className="Table">
            {state.bookmarks.length < 1 ? (
              <div>
                <h2>You don&apos;t have bookmarks yet!</h2>
              </div>
            ) : (
              <BookmarkTable />
            )}
          </div>
          <Back />
        </Route>
      </Switch>
    </div>
  );
};

export default BookmarkList;
