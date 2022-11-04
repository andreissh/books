import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

const exampleStateSelector = (state: RootState) => state.exampleSlice;

export const exampleSelector = createSelector(exampleStateSelector, (state) => state.value);
