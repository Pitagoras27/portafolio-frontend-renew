import { configureStore } from "@reduxjs/toolkit";
import { animatedSlice, authSlice, contactSlice } from "./";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    contact: contactSlice.reducer,
    animated: animatedSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})