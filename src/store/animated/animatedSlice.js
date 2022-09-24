import { createSlice } from '@reduxjs/toolkit';

export const animatedSlice = createSlice({
    name: 'animated',
    initialState: {
      animatedClass: '',
      animatedSection: [],
      animationType: '',
    },
    reducers: {
      targetReachedByScroll: ( state, { payload } ) => {
        state.animatedClass = 'showSection animate__animated animate__fadeInDown';
        state.animatedSection.push(payload);
        state.animationType = 'animate__animated animate__fadeInDown';
      },

      clearSectionName: ( state, { payload } ) => {
        state.animatedSection = state.animatedSection.filter((section) => section !== payload);
      }
    }
});

// Action creators are generated for each case reducer function
export const { targetReachedByScroll, clearSectionName } = animatedSlice.actions;