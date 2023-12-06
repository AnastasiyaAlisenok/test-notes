import { createSlice } from '@reduxjs/toolkit';

type TagsType = {
  hashtagWords: string[];
};

const initialState: TagsType = {
  hashtagWords: [],
};

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    addTag: (state, action) => {
      const newHashtagWords = action.payload.match(/#\w+/g);
      if (newHashtagWords) {
        return {
          ...state,
          hashtagWords: newHashtagWords,
        };
      }
    },
  },
});

export const { actions, reducer } = tagsSlice;

export const { addTag } = tagsSlice.actions;
