export const getAuthors = (authors: string[]) => {
  return authors ? authors.join(", ") : "No info";
};

export const getCategories = (categories: string[]) => {
  return categories
    ? categories[0]
        .split(" ")
        .filter((category) => /^[A-Za-z]+$/g.test(category))
        .join(", ")
    : "No info";
};
