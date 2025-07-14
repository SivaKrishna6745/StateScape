import { createSlice } from '@reduxjs/toolkit';

type UIState = {
    theme: 'light' | 'dark';
    strictMode: boolean;
};

const initialState: UIState = {
    theme: 'light',
    strictMode: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleTheme(state) {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
        setStrictMode(state) {
            state.strictMode = !state.strictMode;
        },
    },
});

export const { toggleTheme, setStrictMode } = uiSlice.actions;
export default uiSlice.reducer;
