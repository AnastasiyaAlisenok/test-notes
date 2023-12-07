import { createSlice } from '@reduxjs/toolkit';

const initialState: string[] = [];

const allTagsSlice = createSlice({
  name: 'allTags',
  initialState,
  reducers: {
    addTagsToCommonStore: (state, action) => {
      let tags: string[];
      if (action.payload.hashtagWords) {
        tags = action.payload.hashtagWords.join('').match(/#\w+/g);
      } else {
        tags = action.payload.match(/#\w+/g);
      }
      if (tags) {
        tags.forEach((tag) => {
          if (!state.includes(tag)) {
            state.push(tag);
          }
        });
      }
    },
    deleteTagsFromCommonStore: (state, action) => {
      const tags = action.payload.match(/#\w+/g);
      console.log(tags);
      if (tags) {
        const arr = state.filter((tag) => !tags.includes(tag));
        return arr;
      }
    },
  },
});

export const { actions, reducer } = allTagsSlice;

export const { addTagsToCommonStore, deleteTagsFromCommonStore } =
  allTagsSlice.actions;
