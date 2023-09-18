import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  pdf: null,
};

const pdfSlice = createSlice({
  name: "pdf",
  initialState: initialState,
  reducers: {
    setPDF: (state, { payload }) => {
      state.pdf = payload.file;
    },
  },
});

export const { setPDF } = pdfSlice.actions;
export default pdfSlice.reducer;
