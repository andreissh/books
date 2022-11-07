import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BookInfo } from "components/types";

type BooksInfoState = {
  booksInfo: BookInfo[];
};

const initialState: BooksInfoState = {
  booksInfo: [],
};

const booksListSlice = createSlice({
  name: "booksList",
  initialState,
  reducers: {
    addBooks: (state, action: PayloadAction<BookInfo[]>) => {
      state.booksInfo = [...state.booksInfo, ...action.payload];
    },
    setNewBooksList: (state, action: PayloadAction<BookInfo[]>) => {
      state.booksInfo = action.payload;
    },
  },
});

export const { addBooks, setNewBooksList } = booksListSlice.actions;
export default booksListSlice.reducer;
