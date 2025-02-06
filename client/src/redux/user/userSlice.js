import { createSlice } from '@reduxjs/toolkit';
 
const initialState = {
  currentUser: null,
  error: null,
  Loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
     signInStart: (state) =>{
       state.Loading = true;
      },
      
      signInSuccess: (state, action) =>{
        state.currentUser = action.payload;
        state.Loading = false;
        state.error = null;
      },

      signInFailure: (state, action) =>{
        state.error = action.payload;
        state.Loading = false;
      },
      updateUserStart: (state) =>{
        state.Loading = true;
      },
      
      updateUserSuccess: (state, action) =>{
        state.currentUser = action.payload;
        state.Loading = false;
        state.error = null;
      },

      updateUserFailure: (state, action) =>{
        state.error = action.payload;
        state.Loading = false;
      },
      deleteUserStart: (state) =>{
        state.Loading = true;
      },
      deleteUserSuccess: (state) =>{
        state.currentUser = null;
        state.Loading = false;
        state.error = null;
      },
      deleteUserFailure: (state, action) =>{
        state.error = action.payload;
        state.Loading = false;
      },
  },
});

export const { 
  signInStart, 
  signInSuccess, 
  signInFailure, 
  updateUserStart, 
  updateUserSuccess, 
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
} = userSlice.actions;

export default userSlice.reducer;