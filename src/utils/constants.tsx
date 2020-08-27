export const apiKey = "wTwRh7Blb0nUPWPWvHQCWVupJSoQBqeu";

export const firstCall = (query: string, apiKey: string) =>
  `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${apiKey}`;

export const pageCall = (query: string, apiKey: string, page: string) =>
  `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&page=${page}&api-key=${apiKey}`;
