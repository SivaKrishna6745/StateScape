import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type settingsState = {
    layoutMode: 'grid' | 'list';
};

const initialState: settingsState = {
    layoutMode: 'grid',
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setLayoutMode: (state, action: PayloadAction<'grid' | 'list'>) => {
            state.layoutMode = action.payload;
        },
    },
});

export const { setLayoutMode } = settingsSlice.actions;
export default settingsSlice.reducer;
