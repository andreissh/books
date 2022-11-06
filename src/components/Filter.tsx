import React from "react";

const Filter = () => {
  type FilterOptions = {
    [key: string]: string[];
  };

  const filterOptions: FilterOptions = {
    categories: ["All", "Art", "Biography", "Computers", "History", "Medical", "Poetry"],
    sortBy: ["Relevance", "Newest"],
  };

  return (
    <div className="flex flex-col gap-4 sm:w-[500px] w-[300px] p-4">
      <input className="w-full" />
      <div className="flex gap-2 sm:flex-row flex-col">
        <div className="flex basis-1/2">
          <label className="basis-1/3 text-white mr-0.5" htmlFor="categories">
            Categories:
          </label>
          <select className="basis-2/3" id="categories">
            {filterOptions.categories.map((category) => {
              return <option key={category}>{category}</option>;
            })}
          </select>
        </div>
        <div className="flex basis-1/2">
          <label className="basis-1/3 text-white mr-0.5" htmlFor="sortBy">
            Sorting by:
          </label>
          <select className="basis-2/3" id="sortBy">
            {filterOptions.sortBy.map((option) => {
              return <option key={option}>{option}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
