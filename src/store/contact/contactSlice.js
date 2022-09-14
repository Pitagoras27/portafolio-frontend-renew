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

    onClearSendingState: (state) => {
      state.interests = [];
      state.errorMessage = undefined;
    }
  }
});

export const { onSending, onClearSendingState } = contactSlice.actions;