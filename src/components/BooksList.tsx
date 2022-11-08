import React from "react";

import { useAppSelector } from "store/hooks";
import { booksListSelector } from "store/selectors";
import BooksListItem from "./BooksListItem";

const BooksList = () => {
  const booksList = useAppSelector(booksListSelector);

  if (!booksList) {
    return (
      <div className="flex justify-center mt-12">
        <h1 className="text-4xl font-bold">No results found</h1>
      </div>
    );
  }

  return (
    <>
      <ul className="grid grid-cols-wrap gap-5 justify-center mb-4">
        {booksList.map((book) => {
          return (
            <div key={book.id}>
              <BooksListItem book={book} />
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default BooksList;
