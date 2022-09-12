type Article = {
  title: string;
  author: string;
  publishDate: string;
  published: boolean;
  tags: Array<string>;
  content: string;
  thumbnail?: string;
  summary?: string;
};

export default Article;
