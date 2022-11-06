import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axiosInstance from "api/axiosInstance";
import config from "config";
import { getAuthors, getCategories } from "utils/utils";
import { BooksInfo } from "./types";

const Main = () => {
  const baseUrl = config.service.BASE_URL;

  const [booksTotal, setBooksTotal] = useState(0);
  const [booksList, setBooksList] = useState<BooksInfo[] | []>([]);

  useEffect(() => {
    if (baseUrl) {
      const fetchBooksList = async (url: string) => {
        const booksList = await axiosInstance(url, {
          params: {
            q: "all",
            maxResults: 30,
          },
        });

        setBooksTotal(booksList.data.totalItems);
        setBooksList(booksList.data.items);
      };

      fetchBooksList(baseUrl);
    }
  }, [baseUrl]);

  const getTitle = (title: string) => {
    return title.length > 100 ? title.slice(0, 99) + "…" : title;
  };

  return (
    <div className="p-4">
      <span className="block mb-4 text-center font-bold">
        Found {booksTotal} result{booksTotal === 11 || booksTotal % 10 !== 1 ? "s" : ""}
      </span>
      <ul className="grid grid-cols-wrap gap-5 justify-center">
        {booksList.map((book) => {
          return (
            <Link to={`book/${book.id}`} key={book.id}>
              <li className="w-[300px] min-h-[400px] p-2 bg-slate-300">
                <div className="flex justify-center mb-2">
                  <img className="w-[120px] h-[180px]" src={book.volumeInfo.imageLinks.thumbnail} alt="" />
                </div>
                <div className="flex flex-col">
                  <span className="mb-2 text-gray-500">{getCategories(book.volumeInfo.categories)}</span>
                  <span className="mb-2 font-bold">{getTitle(book.volumeInfo.title)}</span>
                  <span className="text-gray-500">{getAuthors(book.volumeInfo.authors)}</span>
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
