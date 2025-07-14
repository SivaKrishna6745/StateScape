import { useState } from 'react';
import './App.css';
import StateScape from './StateScape';
import { toggleTheme } from './features/ui/uiSlice';
import { setLayoutMode } from './features/settings/settingsSlice';
import { useDispatch } from 'react-redux';

function App() {
    const dispatch = useDispatch();
    return (
        <>
            <h1 className="text-4xl text-center">State Scape</h1>
            <StateScape />
            <button className="bg-green-400 p-2 rounded-lg cursor-pointer" onClick={() => dispatch(toggleTheme())}>
                Toggle UI
            </button>
            <button
                className="bg-green-400 p-2 rounded-lg cursor-pointer"
                onClick={() => dispatch(setLayoutMode('list'))}
            >
                Swirch to List Layout
            </button>
        </>
    );
}

export default App;
