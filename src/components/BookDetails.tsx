import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import axiosInstance from "api/axiosInstance";
import errorHandler from "api/errorHandler";
import { AxiosError } from "axios";
import config from "config";
import { getAuthors, getCategories } from "utils/utils";
import Error from "./common/Error";
import Spinner from "./common/Spinner";
import { BookDetailsType } from "./types";

const BookDetails = () => {
  const baseUrl = config.service.BASE_URL;
  const location = useLocation();

  const url = baseUrl + location.pathname;

  const [bookInfo, setBookInfo] = useState<BookDetailsType | null>(null);
  const [error, setError] = useState<string>("");

  const catchError = (err: string) => {
    setError(err);
  };

  useEffect(() => {
    const fetchBookInfo = async (url: string) => {
      const response = await axiosInstance(url).catch((err: AxiosError) => {
        const newError = errorHandler(err);
        catchError(newError);
      });

      if (response) {
        setBookInfo(response.data.volumeInfo);
      }
    };

    fetchBookInfo(url);
  }, [url]);

  return (
    <div className="w-full xl:w-[1280px] mx-auto flex flex-col md:flex-row">
      {!error ? (
        bookInfo ? (
          <>
            <div className="p-4 basis-2/5 flex justify-center items-center bg-slate-300">
              <img src={bookInfo.imageLinks.small} alt="" />
            </div>
            <div className="p-4 basis-3/5 flex flex-col">
              <span className="mb-8 text-gray-500">{getCategories(bookInfo.categories)}</span>
              <span className="mb-4 text-4xl font-bold">{bookInfo.title}</span>
              <span className="mb-8 text-gray-500">{getAuthors(bookInfo.authors)}</span>
              <div className="p-4 border border-gray-300">
                <p>{bookInfo.description}</p>
              </div>
            </div>
          </>
        ) : (
          <div className="mx-auto mt-12">
            <Spinner />
          </div>
        )
      ) : (
        <div className="mx-auto mt-12">
          <Error error={error} />
        </div>
      )}
    </div>
  );
};

export default BookDetails;
