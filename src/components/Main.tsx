import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axiosInstance from "api/axiosInstance";
import errorHandler from "api/errorHandler";
import config from "config";
import { getAuthors, getCategories } from "utils/utils";
import Error from "./common/Error";
import Spinner from "./common/Spinner";
import { BooksInfo } from "./types";

const Main = () => {
  const baseUrl = config.service.BASE_URL;
  const limit = 30;

  const [booksTotal, setBooksTotal] = useState(0);
  const [booksList, setBooksList] = useState<BooksInfo[] | []>([]);
  const [error, setError] = useState<string>("");
  const [startIndex, setStartIndex] = useState<number>(0);

  const catchError = (err: string) => {
    setError(err);
  };

  useEffect(() => {
    if (baseUrl) {
      const fetchBooksList = async (url: string) => {
        const response = await axiosInstance(url, {
          params: {
            q: "all",
            maxResults: limit,
          },
        }).catch((err: AxiosError) => {
          const newError = errorHandler(err);
          catchError(newError);
        });

        if (response) {
          setBooksTotal(response.data.totalItems);
          setBooksList(response.data.items);
          setStartIndex(limit);
        }
      };

      fetchBooksList(baseUrl);
    }
  }, [baseUrl]);

  const handleBooksLoad = async () => {
    if (baseUrl) {
      const response = await axiosInstance(baseUrl, {
        params: {
          q: "all",
          startIndex,
          maxResults: limit,
        },
      }).catch((err: AxiosError) => {
        const newError = errorHandler(err);
        catchError(newError);
      });

      if (response) {
        setBooksList([...booksList, ...response.data.items]);
        setStartIndex(startIndex + limit);
      }
    }
  };

  const getTitle = (title: string) => {
    return title.length > 100 ? title.slice(0, 99) + "…" : title;
  };

  return (
    <div className="p-4">
      {!error ? (
        booksList.length > 0 ? (
          <>
            <span className="block mb-4 text-center font-bold">
              Found {booksTotal} result{booksTotal === 11 || booksTotal % 10 !== 1 ? "s" : ""}
            </span>
            <ul className="grid grid-cols-wrap gap-5 justify-center mb-4">
              {booksList.map((book) => {
                return (
                  <Link to={`/${book.id}`} key={book.id}>
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
            <div className="flex justify-center">
              <button onClick={handleBooksLoad}>Load more</button>
            </div>
          </>
        ) : (
          <div className="flex justify-center mt-12">
            <Spinner />
          </div>
        )
      ) : (
        <Error error={error} />
      )}
    </div>
  );
};

export default Main;
