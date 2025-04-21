import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userEdit:(state,action)=>{
            console.log(action.payload)
            state.user = action.payload
        },
        login: (state, action) => {
            console.log(action.payload)
            state.isAuthenticated = true
            state.user = action.payload.user
            state.token = action.payload.token
        },
        logout: (state) => {
            state.isAuthenticated = false
            state.user = null
            state.token = null
        }
    }
})
export const { login, logout,userEdit } = authSlice.actions
export default authSlice.reducer