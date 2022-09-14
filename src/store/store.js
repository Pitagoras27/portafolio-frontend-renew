import { configureStore } from "@reduxjs/toolkit";
import { authSlice, contactSlice } from "./";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    contact: contactSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})