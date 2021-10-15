import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name:"user", 
    initialState:{
        name:null,
        isLoggedIn:false
    },
    reducers:{
        update: (state, action) => {
          state.name = action.payload.name; 
          state.isLoggedIn = action.payload.isLoggedIn; 
        }
    }
})

export const {update} = userSlice.actions;
export default userSlice.reducer;