import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  chats: [],
  chat: {},
};

export const createChat = createAsyncThunk(
  "/chat/create",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/chats",
        payload,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      return response.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getChat = createAsyncThunk(
  "/chat/get",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/chats/${payload.id}`
      );
      return response.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const sendMessage = createAsyncThunk(
  "/chat/message",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/v1/chats/${payload.id}`,
        { message: payload.message }
      );
      return response.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

const pdfSlice = createSlice({
  name: "chat",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createChat.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createChat.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(createChat.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(getChat.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getChat.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      const isChatFound = state.chats.find((ch) => ch._id == payload._id);
      if (isChatFound) {
        const arr = state.chats.map((ch) => {
          if (ch._id == payload._id) {
            return payload;
          }
          return ch;
        });
        state.chats = arr;
      } else {
        state.chats.unshift(payload);
      }
      state.chat = payload;
    });
    builder.addCase(getChat.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(sendMessage.fulfilled, (state, { payload }) => {
      const arr = state.chats.map((ch) => {
        if (ch._id == payload._id) {
          return payload;
        }
        return ch;
      });
      state.chats = arr;
      state.chat = payload;
    });
  },
});

export default pdfSlice.reducer;
