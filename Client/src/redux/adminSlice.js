import { createSlice } from '@reduxjs/toolkit'
export const adminSlice = createSlice({
    name:"admin", 
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

export const {update} = adminSlice.actions;
export default adminSlice.reducer;