import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    status: 'initial',
    interests: [],
    errorMessage: undefined
  },
  reducers: {
    onSending: (state, { payload } ) => {
      state.status = 'success';
      state.interests = state.interests.push(payload);
      state.errorMessage = undefined;
    },

    onErrorSending: (state, { payload }) => {
      state.status = 'fail';
      state.interests = [];
      state.errorMessage = payload;
    },

    onClearSendingState: (state) => {
      state.status = 'initial';
      state.interests = [];
      state.errorMessage = undefined;
    }
  }
});

export const { onSending, onErrorSending, onClearSendingState } = contactSlice.actions;