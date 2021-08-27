import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Feature/feature";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
