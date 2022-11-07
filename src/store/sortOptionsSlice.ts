import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SortOptionsState = {
  category: string;
  orderBy: string;
};

const initialState: SortOptionsState = {
  category: "all",
  orderBy: "relevance",
};

const sortOptionsSlice = createSlice({
  name: "sortOptions",
  initialState,
  reducers: {
    changeCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    changeOrderBy: (state, action: PayloadAction<string>) => {
      state.orderBy = action.payload;
    },
  },
});

export const { changeCategory, changeOrderBy } = sortOptionsSlice.actions;
export default sortOptionsSlice.reducer;
