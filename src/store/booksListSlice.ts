import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BookInfo } from "components/types";

type BooksListState = {
  booksList: BookInfo[];
};

const initialState: BooksListState = {
  booksList: [],
};

const booksListSlice = createSlice({
  name: "booksList",
  initialState,
  reducers: {
    addBooks: (state, action: PayloadAction<BookInfo[]>) => {
      state.booksList = [...state.booksList, ...action.payload];
    },
    setNewBooksList: (state, action: PayloadAction<BookInfo[]>) => {
      state.booksList = action.payload;
    },
  },
});

export const { addBooks, setNewBooksList } = booksListSlice.actions;
export default booksListSlice.reducer;
