export type BookInfo = {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    categories: string[];
    imageLinks: {
      thumbnail: string;
      small?: string;
    };
    description: string;
  };
};

export type FilterOptions = {
  [key: string]: string[];
};

export type IconsType = {
  [key: string]: JSX.Element;
};
