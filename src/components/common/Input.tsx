import React from "react";

type InputProps = {
  searchQuery: string;
  onSearchInput: (arg: string) => void;
};

const Input: React.FC<InputProps> = ({ searchQuery, onSearchInput }) => {
  return (
    <>
      <input
        className="w-full border rounded py-1 px-2 leading-tight focus:outline-none"
        value={searchQuery}
        onChange={(e) => onSearchInput(e.target.value)}
      />
    </>
  );
};

export default Input;
