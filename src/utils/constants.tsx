export const apiKey = "wTwRh7Blb0nUPWPWvHQCWVupJSoQBqeu";

export const apiCall = (query: string, apiKey: string) =>
  `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${apiKey}`;
