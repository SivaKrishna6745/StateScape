import { createSlice } from '@reduxjs/toolkit';

type debugState = {
    traceMode: boolean;
};

const initialState: debugState = {
    traceMode: false,
};

export const debugSlice = createSlice({
    name: 'debug',
    initialState,
    reducers: {
        toggleTraceMode: (state) => {
            state.traceMode = !state.traceMode;
        },
    },
});

export const { toggleTraceMode } = debugSlice.actions;
export default debugSlice.reducer;
