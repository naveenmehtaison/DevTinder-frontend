import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    feeddata :null
}
export const feedSlice = createSlice({
    name:"feed",
    initialState,
    reducers:{
        addFeed: (state,action)=>{
            console.log(action.payload)
            state.feeddata = action.payload
        },
        removedata: (state)=>{
            state.feeddata = []
        }
    }
})
export const {addFeed, removedata} = feedSlice.actions
export default feedSlice.reducer
