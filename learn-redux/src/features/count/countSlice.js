import { createSlice } from "@reduxjs/toolkit";



export const countSlice = createSlice({
    name:'counter',
    initialState: 0,
    reducers:{
        increment: (state,actions)=>state+1,
        decrement: (state,actions)=>state-1
    }
})

export const {increment,decrement} = countSlice.actions
export default countSlice.reducer