import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../app/config";

// Load user from localStorage
const savedUser = localStorage.getItem("user");

const initialState = {
  data: savedUser ? JSON.parse(savedUser) : {}, // persist user on refresh
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axiosClient.get("/users", { params: { email, password } });
      const users = response.data;
      const foundUser = Array.isArray(users) && users.length ? users[0] : null;

      if (!foundUser) return thunkAPI.rejectWithValue({ error: "User not found!" });
      if (foundUser.password !== password) return thunkAPI.rejectWithValue({ error: "Invalid password" });

      // Save user to localStorage
      localStorage.setItem("user", JSON.stringify({ email: foundUser.email, role: foundUser.role }));

      return { email: foundUser.email, role: foundUser.role };
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: "Something went wrong" });
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearState: (state) => {
      localStorage.removeItem("user"); // remove user on logout
      return {
        data: {},
        isLoading: false,
        isSuccess: false,
        isError: false,
        error: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.data = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.error = action.payload?.error || "Login failed";
      });
  },
});

export const { clearState } = authSlice.actions;
export default authSlice.reducer;
