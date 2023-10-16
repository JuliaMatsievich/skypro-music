import { createSlice } from '@reduxjs/toolkit'

export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    accessToken: null,
    refreshToken: null,
  },
  reducers: {
    setToken: (state, action) => {
		state.accessToken = action.payload.accessToken
		state.refreshToken = action.payload.refreshToken
	 },
	 setNewToken: state => {
		state.accessToken = action.payload
	 }
  },
})

export const { setToken, setNewToken } = tokenSlice.actions

export default tokenSlice.reducer;

export const accessTokenSelector = state => state.token.accessToken