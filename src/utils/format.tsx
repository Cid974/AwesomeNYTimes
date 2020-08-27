import { IArticle } from "../store/articleContext";

export const formatArticle = (data: any) => {
  const result = data.map((item: any) => {
    const media = item.multimedia.find(
      (data: any) => data.subtype === "thumbLarge"
    );

    const thumbnail =
      media === undefined ? "empty" : `https://static01.nyt.com/${media.url}`;

    const format: IArticle = {
      id: item._id.slice(-36),
      headline: item.headline.main,
      lead:
        item.lead_paragraph.length > 1 ? item.lead_paragraph : item.abstract,
      url: item.web_url,
      img: thumbnail,
    };

    return format;
  });

  return result;
};
