import { createSlice } from '@reduxjs/toolkit'

const loadupReducer = createSlice({
  name: "loadup",
  initialState: {
    data: false,
  },
  reducers: {
    start: (state, action) => {
      state.data = true;
    },
    close: (state, action) => {
      state.data = false;
    },
  },
})

export const { start, close } = loadupReducer.actions

export default loadupReducer.reducer