import { AxiosError } from "axios";
import React, { useCallback, useEffect, useState } from "react";

import axiosInstance from "api/axiosInstance";
import errorHandler from "api/errorHandler";
import config from "config";
import { addBooks, setNewBooksList } from "store/booksListSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { booksListSelector, filterOptionsSelector } from "store/selectors";
import BooksList from "./BooksList";
import Button from "./common/Button";
import Error from "./common/Error";
import Spinner from "./common/Spinner";

const Main = () => {
  const baseUrl = config.service.BASE_URL as string;
  const limit = 30;

  const [booksTotal, setBooksTotal] = useState(0);
  const [error, setError] = useState<string>("");
  const [startIndex, setStartIndex] = useState<number>(0);
  const dispatch = useAppDispatch();
  const booksList = useAppSelector(booksListSelector);
  const filterOptions = useAppSelector(filterOptionsSelector);

  const catchError = (err: string) => {
    setError(err);
  };

  const getQueryOption = useCallback(() => {
    if (filterOptions.query) return filterOptions.query;
    else {
      if (filterOptions.category === "all") return `${filterOptions.category}`;
      else return `subject:${filterOptions.category}`;
    }
  }, [filterOptions]);

  useEffect(() => {
    const fetchBooksList = async (url: string) => {
      const response = await axiosInstance(url, {
        params: {
          q: getQueryOption(),
          orderBy: `${filterOptions.orderBy}`,
          maxResults: limit,
        },
      }).catch((err: AxiosError) => {
        const newError = errorHandler(err);
        catchError(newError);
      });

      if (response) {
        setBooksTotal(response.data.totalItems);
        setStartIndex(limit);
        dispatch(setNewBooksList(response.data.items));
      }
    };

    fetchBooksList(baseUrl);
  }, [baseUrl, dispatch, filterOptions, getQueryOption]);

  const handleBooksLoad = async () => {
    const response = await axiosInstance(baseUrl, {
      params: {
        q: getQueryOption(),
        orderBy: `${filterOptions.orderBy}`,
        startIndex,
        maxResults: limit,
      },
    }).catch((err: AxiosError) => {
      const newError = errorHandler(err);
      catchError(newError);
    });

    if (response) {
      dispatch(addBooks(response.data.items));
      setStartIndex(startIndex + limit);
    }
  };

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className="p-4">
      {booksList.length > 0 ? (
        <>
          <span className="block mb-4 text-center font-bold">
            Found {booksTotal} result{booksTotal === 11 || booksTotal % 10 !== 1 ? "s" : ""}
          </span>
          <BooksList />
          <div className="flex justify-center">
            <Button
              styles={"bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded-md"}
              onBooksLoad={handleBooksLoad}
            >
              Load more
            </Button>
          </div>
        </>
      ) : (
        <div className="flex justify-center mt-12">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default Main;
