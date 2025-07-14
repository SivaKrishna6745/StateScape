import { createSlice } from '@reduxjs/toolkit';

type UIState = {
    theme: 'light' | 'dark';
    layoutMode: 'grid' | 'list';
    strictMode: boolean;
};

const initialState: UIState = {
    theme: 'light',
    layoutMode: 'grid',
    strictMode: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleTheme(state) {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
        setLayoutMode(state, action) {
            state.layoutMode = action.payload;
        },
        setStrictMode(state) {
            state.strictMode = !state.strictMode;
        },
    },
});

export const { toggleTheme, setLayoutMode, setStrictMode } = uiSlice.actions;
export default uiSlice.reducer;
