import { configureStore } from "@reduxjs/toolkit";
import { dayReducer } from "../reducers/dayReducer";
import { userReducer } from "../reducers/userReducer";

const reducer = {
  daysend: dayReducer,
  userStore: userReducer
};
const store = configureStore({
  reducer,
  devTool: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
