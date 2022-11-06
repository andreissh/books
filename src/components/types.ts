export type BooksInfo = {
  totalItems: number;
  items: [
    {
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
    }
  ];
};
