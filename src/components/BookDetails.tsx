import React from "react";

import booksInfo from "mocks/main.mock";

const BookDetails = () => {
  const bookInfo = booksInfo.items[0].volumeInfo;

  return (
    <div className="w-full xl:w-[1280px] mx-auto flex flex-col md:flex-row">
      <div className="p-4 basis-2/5 flex justify-center items-center bg-slate-300">
        <img className="w-[200px] h-[300px]" src={bookInfo.imageLinks.thumbnail} alt="" />
      </div>
      <div className="p-4 basis-3/5 flex flex-col">
        <span className="mb-8 text-gray-500">{bookInfo.categories[0]}</span>
        <span className="mb-4 text-4xl font-bold">{bookInfo.title}</span>
        <span className="mb-8 text-gray-500">{bookInfo.authors[0]}</span>
        <div className="p-4 border border-gray-300">
          <p>{bookInfo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
