import React from "react";

import Filter from "./Filter";

const Header = () => {
  return (
    <div className="bg-header-background flex flex-col items-center">
      <h2 className="p-4 text-4xl sm:text-6xl text-white">Search for books</h2>
      <Filter />
    </div>
  );
};

export default Header;
