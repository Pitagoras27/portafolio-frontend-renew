import { createSlice } from '@reduxjs/toolkit';

export const animatedSlice = createSlice({
    name: 'animated',
    initialState: {
      animatedSection: [],
    },
    reducers: {
      targetReachedByScroll: ( state, { payload } ) => {
        state.animatedSection.push(payload);
      },

      clearSectionName: ( state, { payload } ) => {
        state.animatedSection = state.animatedSection.filter((section) => section !== payload);
      }
    }
});

// Action creators are generated for each case reducer function
export const { targetReachedByScroll, clearSectionName } = animatedSlice.actions;