import { createSlice } from '@reduxjs/toolkit';

export const animatedSlice = createSlice({
    name: 'animated',
    initialState: {
      fadeInUp: '',
      animatedSection: [],
      fadeInDown: '',
    },
    reducers: {
      targetReachedByScroll: ( state, { payload } ) => {
        state.fadeInUp = 'showSection animate__fadeInDown';
        state.animatedSection.push(payload);
        state.fadeInDown = 'animate__fadeInDown';
      },

      clearSectionName: ( state, { payload } ) => {
        state.animatedSection = state.animatedSection.filter((section) => section !== payload);
      }
    }
});

// Action creators are generated for each case reducer function
export const { targetReachedByScroll, clearSectionName } = animatedSlice.actions;