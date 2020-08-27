import React from "react";

export interface IArticle {
  id: string;
  headline: string;
  lead: string;
  url: string;
  img: string;
}

export interface IState {
  loading: boolean;
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
  loading: false,
  keyword: "",
  hits: 0,
  offset: 0,
  articles: [
    {
      id: "",
      headline: "",
      lead: "",
      url: "",
      img: "",
    },
  ],
};

export const NEW_SEARCH = "NEW_SEARCH";
export const LOAD = "LOAD";
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
        loading: !state.loading,
      };
    case ADD_ARTICLES:
      return {
        ...state,
        offset: action.payload.offset,
        articles: [...state.articles, ...action.payload.articles],
        loading: !state.loading,
      };
    case LOAD:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return initialState;
  }
}
