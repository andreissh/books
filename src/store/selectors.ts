import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

const filterOptionsStateSelector = (state: RootState) => state.filterOptionsSlice;
const booksListStateSelector = (state: RootState) => state.booksListSlice;

export const filterOptionsSelector = createSelector(filterOptionsStateSelector, (state) => state.options);
export const booksListSelector = createSelector(booksListStateSelector, (state) => state.booksList);
