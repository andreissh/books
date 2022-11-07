export const getAuthors = (authors: string[]) => {
  return authors ? authors.join(", ") : "No info";
};

export const getCategories = (categories: string[]) => {
  return categories
    ? categories[0]
        .split(" ")
        .filter((category) => /[A-Za-z-,]+/g.test(category))
        .map((category) => {
          if (category[category.length - 1] === ",") {
            return category[0].toUpperCase() + category.slice(1, -1);
          } else {
            if (category === "etc") return category;
            return category[0].toUpperCase() + category.slice(1);
          }
        })
        .join(", ")
    : "No info";
};
