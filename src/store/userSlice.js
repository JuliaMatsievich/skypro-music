import { createSlice } from '@reduxjs/toolkit'

function getUserFromLocalStorage() {
	try {
	  return JSON.parse(localStorage.getItem('user'));
	} catch (error) {
	  console.error(error);
	  return null;
	}
 }

 const initialState =  {
	id: 0,
	name: '',
	first_name:'',
	last_name: '',
	email:''
}

export const userSlice = createSlice({
	name: 'user',
	initialState: getUserFromLocalStorage() ?? initialState ,
	redusers: {
		setUser(state, action) {
			const payload = action.payload ?? initialState;
	
			state.id = payload.id;
			state.email = payload.email;
			state.username = payload.username;
			state.first_name = payload.first_name;
			state.last_name = payload.last_name;
	
			localStorage.setItem('user', JSON.stringify(state));
		 },
	}
})

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;

