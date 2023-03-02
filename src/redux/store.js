import { configureStore } from "@reduxjs/toolkit";
import CounterStore from "./counter";

export const store = configureStore({
  reducer: {
    counter: CounterStore,
  },
});
