import { createSlice } from '@reduxjs/toolkit';

export const animatedSlice = createSlice({
    name: 'animated',
    initialState: {
      animatedClass: '',
      animatedSection: ''
    },
    reducers: {
      targetReachedByScroll: (state, { payload } ) => {
        state.animatedClass = 'showSection animate__animated animate__fadeInDown';
        state.animatedSection = payload
      }
    }
});

// Action creators are generated for each case reducer function
export const { targetReachedByScroll } = animatedSlice.actions;