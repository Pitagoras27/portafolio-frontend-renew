import { configureStore } from "@reduxjs/toolkit";
import { animatedSlice, authSlice, blogSlice, contactSlice } from "./";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    contact: contactSlice.reducer,
    animated: animatedSlice.reducer,
    blog: blogSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})