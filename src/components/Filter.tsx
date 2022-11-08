import React, { useEffect, useState } from "react";

import { changeCategory, changeOrderBy, changeQuery } from "store/filterOptionsSlice";
import { useAppDispatch } from "store/hooks";
import Input from "./common/Input";
import Select from "./common/Select";
import useDebounce from "./hooks/useDebounce";
import { FilterOptions } from "./types";

const Filter = () => {
  const filterOptions: FilterOptions = {
    categories: ["All", "Art", "Biography", "Computers", "History", "Medical", "Poetry"],
    sortBy: ["Relevance", "Newest"],
  };

  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSelectChange = (value: string) => {
    if (filterOptions.categories.includes(value)) {
      dispatch(changeCategory(value.toLowerCase()));
      setSearchQuery("");
    } else dispatch(changeOrderBy(value.toLowerCase()));
  };

  const handleSearchInput = (value: string) => {
    setSearchQuery(value);
  };

  const debouncedSearchQuery = useDebounce(searchQuery, 200);

  useEffect(() => {
    dispatch(changeQuery(debouncedSearchQuery));
  }, [dispatch, debouncedSearchQuery]);

  return (
    <div className="flex flex-col gap-4 sm:w-[500px] w-[300px] p-4">
      <Input searchQuery={searchQuery} onSearchInput={handleSearchInput} />
      <div className="flex gap-2 sm:flex-row flex-col">
        <div className="flex basis-1/2">
          <label className="basis-1/3 text-white mr-0.5">Categories:</label>
          <Select onSelectChange={handleSelectChange} options={filterOptions.categories} />
        </div>
        <div className="flex basis-1/2">
          <label className="basis-1/3 text-white mr-0.5">Sorting by:</label>
          <Select onSelectChange={handleSelectChange} options={filterOptions.sortBy} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
