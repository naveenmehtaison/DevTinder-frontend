import { configureStore } from "@reduxjs/toolkit";
import authreducer from './authSlice'
import feedreducer from './feedSlice'
export const store = configureStore({
    reducer: {
        auth:authreducer,
        feed:feedreducer
    },
});
export default store;