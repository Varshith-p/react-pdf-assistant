import { configureStore } from "@reduxjs/toolkit";
import pdfReducer from "./redux/pdfSlice";

const store = configureStore({
  reducer: {
    pdf: pdfReducer,
  },
});

export default store;
