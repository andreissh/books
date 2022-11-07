import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import axiosInstance from "api/axiosInstance";
import config from "config";
import { booksListSelector } from "store/selectors";
import { getAuthors, getCategories } from "utils/utils";
import Spinner from "./common/Spinner";

const BookDetails = () => {
  const baseUrl = config.service.BASE_URL;
  const location = useLocation();
  const url = baseUrl + location.pathname;
  const booksList = useSelector(booksListSelector);
  const bookInfo = booksList.filter((book) => book.id === location.pathname.slice(1))[0];
  const [bookCover, setBookCover] = useState<string>("");

  useEffect(() => {
    const fetchBookDetails = async () => {
      const bookDetails = await axiosInstance(url);
      setBookCover(bookDetails.data.volumeInfo.imageLinks.small);
    };
    fetchBookDetails();
  }, [url]);

  return (
    <div className="w-full xl:w-[1280px] mx-auto flex flex-col md:flex-row">
      {bookInfo ? (
        <>
          <div className="p-4 basis-2/5 flex justify-center items-center bg-slate-300">
            <img src={bookCover} alt="" />
          </div>
          <div className="p-4 basis-3/5 flex flex-col">
            <span className="mb-8 text-gray-500">{getCategories(bookInfo.volumeInfo.categories)}</span>
            <span className="mb-4 text-4xl font-bold">{bookInfo.volumeInfo.title}</span>
            <span className="mb-8 text-gray-500">{getAuthors(bookInfo.volumeInfo.authors)}</span>
            <div className="p-4 border border-gray-300">
              <p>{bookInfo.volumeInfo.description || "No description"}</p>
            </div>
          </div>
        </>
      ) : (
        <div className="mx-auto mt-12">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default BookDetails;
