import { createSlice } from '@reduxjs/toolkit'

const accountReducer = createSlice({
  name: "account",
  initialState: {
    data: {},
  },
  reducers: {
    signin: (state, action) => {
      state.data = action.payload;
    },
    signout: (state) => {
      state.data = {};
    },
  },
})

export const { signin, signout } = accountReducer.actions

export default accountReducer.reducer
