import React from "react";
import { Link } from "react-router-dom";

import booksInfo from "mocks/main.mock";

const Main = () => {
  const { totalItems, items } = booksInfo;
  const books = Array(4).fill(items[0]);

  return (
    <div className="p-4">
      <span className="block mb-4 text-center font-bold">
        Found {totalItems} result{totalItems === 11 || totalItems % 10 !== 1 ? "s" : ""}
      </span>
      <ul className="grid grid-cols-wrap gap-5 justify-center">
        {books.map((book, i) => {
          return (
            <Link to={`book/${book.id}`} key={book.id + i}>
              <li className="w-[300px] p-2 bg-slate-300">
                <div className="flex justify-center mb-2">
                  <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
                </div>
                <div className="flex flex-col">
                  <span className="mb-2 text-gray-500">{book.volumeInfo.categories[0]}</span>
                  <span className="mb-2 font-bold">{book.volumeInfo.title}</span>
                  <span className="text-gray-500">{book.volumeInfo.authors[0]}</span>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Main;
