import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../features/ui/uiSlice';
import settingsReducer from '../features/settings/settingsSlice';
import debugReducer from '../features/debug/debugSlice';

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        settings: settingsReducer,
        debug: debugReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
