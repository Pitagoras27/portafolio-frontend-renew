import { createSlice } from '@reduxjs/toolkit';
import { cardsSkillsBlog } from '../../data';


export const blogSlice = createSlice({
    name: 'blog',
    initialState: {
      topics: cardsSkillsBlog,
      filterList: [],
      topicSelected: ''
    },
    reducers: {
      themeSelected: (state, { payload } ) => {
        const lowerItem = payload.toLowerCase();
        console.log('lowerItem-->', lowerItem)
        state.filterList = state.topics.filter((item => item.section === lowerItem));
        state.topicSelected = payload
      },
    }
});


// Action creators are generated for each case reducer function
export const { themeSelected } = blogSlice.actions;