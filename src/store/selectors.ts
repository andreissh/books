import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

const sortOptionsStateSelector = (state: RootState) => state.sortOptionsSlice;
const booksListStateSelector = (state: RootState) => state.booksListSlice;

export const categorySelector = createSelector(sortOptionsStateSelector, (state) => state.category);
export const orderBySelector = createSelector(sortOptionsStateSelector, (state) => state.orderBy);
export const booksListSelector = createSelector(booksListStateSelector, (state) => state.booksInfo);
