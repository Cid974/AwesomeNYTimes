export const apiKey = "wTwRh7Blb0nUPWPWvHQCWVupJSoQBqeu";

export const firstCall = (query: string, apiKey: string) =>
  `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${apiKey}`;

export const pageCall = (query: string, apiKey: string, page: string) =>
  `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&page=${page}&api-key=${apiKey}`;

export const formatArticle = (data: any) => {
  const result = data.map((item: any) => {
    const format = { id: "", lead: "", url: "" };
    format.id = item._id;
    format.lead =
      item.lead_paragraph.length > 1 ? item.lead_paragraph : item.abstract;
    format.url = item.web_url;
    return format;
  });
  return result;
};
