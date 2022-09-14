import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    interests: [],
    errorMessage: undefined
  },
  reducers: {
    onSending: (state, { payload } ) => {
      state.interests = state.interests.push(payload);
      state.errorMessage = undefined;
    },

    onErrorSending: (state, { payload }) => {
      state.interests = [];
      state.errorMessage = payload;
    },

    onClearSendingState: (state) => {
      state.interests = [];
      state.errorMessage = undefined;
    }
  }
});

export const { onSending, onErrorSending, onClearSendingState } = contactSlice.actions;