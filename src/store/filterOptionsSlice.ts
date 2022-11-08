import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FilterOptionsState = {
  options: {
    [key: string]: string;
  };
};

const initialState: FilterOptionsState = {
  options: {
    category: "all",
    orderBy: "relevance",
    query: "",
  },
};

const filterOptionsSlice = createSlice({
  name: "filterOptions",
  initialState,
  reducers: {
    changeCategory: (state, action: PayloadAction<string>) => {
      state.options.category = action.payload;
    },
    changeOrderBy: (state, action: PayloadAction<string>) => {
      state.options.orderBy = action.payload;
    },
    changeQuery: (state, action: PayloadAction<string>) => {
      state.options.query = action.payload;
    },
  },
});

export const { changeCategory, changeOrderBy, changeQuery } = filterOptionsSlice.actions;
export default filterOptionsSlice.reducer;
