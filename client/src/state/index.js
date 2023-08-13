import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    mode: 'light',
    user: null,
    token: null,
    posts: [],
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    }
});