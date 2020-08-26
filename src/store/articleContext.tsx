import React from "react";

export interface IArticle {
  id: string;
  abstract: string;
  url: string;
}

export interface IState {
  keyword: string;
  hits: number;
  offset: number;
  articles: Array<IArticle>;
}

interface IContextProps {
  state: IState;
  dispatch: ({ type }: { type: string; payload: any }) => void;
}

export const ArticleContext = React.createContext({} as IContextProps);

export const initialState = {
  keyword: "",
  hits: 0,
  offset: 0,
  articles: [
    {
      id: "",
      abstract: "",
      url: "",
    },
  ],
};

export const NEW_SEARCH = "NEW_SEARCH";
export const ADD_ARTICLES = "ADD_ARTICLES";

export function articleReducer(state: any, action: any) {
  switch (action.type) {
    case NEW_SEARCH:
      return {
        ...state,
        keyword: action.payload.keyword,
        hits: action.payload.hits,
        offset: 0,
        articles: action.payload.articles,
      };
    case ADD_ARTICLES:
      return {
        ...state,
        articles: [...state.articles, action.payload],
      };
    default:
      return initialState;
  }
}
