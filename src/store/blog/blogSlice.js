import { createSlice } from '@reduxjs/toolkit';
import { cardsSkillsBlog } from '../../data';
import { contentSectionTopic } from '../../helpers/utils';

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
        state.filterList = contentSectionTopic(state.topics, lowerItem);
        state.topicSelected = payload
      },
    }
});


// Action creators are generated for each case reducer function
export const { themeSelected } = blogSlice.actions;