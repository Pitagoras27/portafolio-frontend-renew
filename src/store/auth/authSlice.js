import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
      status: 'checking',
      user: {},
    },
    reducers: {
      onChecking: () => {
        state.status = 'checking';
        state.user = {}
      },
      onLogin: (state, action ) => {
        console.log('here in onLogin')
        state.status = 'authenticated';
        state.user = action.payload
      },
      onLogout: () => {
        state.status = 'non-authenticated';
        state.user = {}
      }
    }
});


// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout } = authSlice.actions;