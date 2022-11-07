export type BooksInfo = {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    categories: string[];
    imageLinks: {
      thumbnail: string;
    };
    description: string;
  };
};

export type BookDetailsType = {
  authors: string[];
  categories: string[];
  description: string;
  imageLinks: {
    small: string;
  };
  title: string;
};
