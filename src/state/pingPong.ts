import { createSlice } from '@reduxjs/toolkit';

export const pingSlice = createSlice({
    name: 'pinging',
    initialState: {
        isPinging: true
    },
    reducers: {
        ping: (state, action) => {
            state.isPinging = action.payload
        },
        pong: (state, action) => {
            state.isPinging = action.payload
        }
    }
});

export const { ping, pong } = pingSlice.actions;

export default pingSlice.reducer;