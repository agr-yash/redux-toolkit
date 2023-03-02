import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 1,
};

const CounterStore = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    updateCounter(state, action) {
      state.count += parseInt(action.payload.difference);
    },
  },
});

export default CounterStore.reducer;

export const { updateCounter } = CounterStore.actions;
