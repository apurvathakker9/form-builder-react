import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: "progressReducer",
  initialState: {
    isCircularProgressOpen: false
  },
  reducers: {
    openCircularProgress: (state)=>{
      state.isCircularProgressOpen = true;
    },
    closeCircularProgress: (state)=>{
      state.isCircularProgressOpen = false
    }
  },
});

export const { openCircularProgress, closeCircularProgress } = slice.actions;

export default slice.reducer;