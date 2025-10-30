import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../features/product/product.slice";
import authReducer from "../features/auth/auth.slice"
import { userDetail } from "../features/EditorSlices/signupLoginSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    usrs:userDetail
  },
});
