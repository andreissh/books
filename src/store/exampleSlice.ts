import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ExampleState = {
  value: number;
};

const initialState: ExampleState = {
  value: 0,
};

const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { increment, decrement } = exampleSlice.actions;
export default exampleSlice.reducer;
