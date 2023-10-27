import { createSlice } from '@reduxjs/toolkit'

export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    accessToken: null,
    refreshToken: null,
  },
  reducers: {
    setToken: (state, action) => {
		state.accessToken = action.payload.access
		state.refreshToken = action.payload.refresh
	 }
  },
})

export const { setToken} = tokenSlice.actions

export default tokenSlice.reducer;

export const accessTokenSelector = state => state.token.accessToken