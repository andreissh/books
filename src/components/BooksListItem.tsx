import React from "react";
import { Link } from "react-router-dom";

import { getAuthors, getCategories } from "utils/utils";
import { BookInfo } from "./types";

type BooksListItemProps = {
  book: BookInfo;
};

const BooksListItem: React.FC<BooksListItemProps> = ({ book }) => {
  const getTitle = (title: string) => {
    return title.length > 100 ? title.slice(0, 99) + "…" : title;
  };

  return (
    <>
      <Link to={`/${book.id}`}>
        <li className="w-[300px] min-h-[400px] p-2 bg-slate-300">
          <div className="flex justify-center mb-2">
            <img
              className="w-[120px] h-[180px]"
              src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""}
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <span className="mb-2 text-gray-500">{getCategories(book.volumeInfo.categories)}</span>
            <span className="mb-2 font-bold">{getTitle(book.volumeInfo.title)}</span>
            <span className="text-gray-500">{getAuthors(book.volumeInfo.authors)}</span>
          </div>
        </li>
      </Link>
    </>
  );
};

export default BooksListItem;
