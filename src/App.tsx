import './App.css';
import StateScape from './StateScape';
import { toggleTheme } from './features/ui/uiSlice';
import { setLayoutMode } from './features/settings/settingsSlice';
import { toggleTraceMode } from './features/debug/debugSlice';
import { useDispatch } from 'react-redux';

function App() {
    const dispatch = useDispatch();
    return (
        <>
            <h1 className="text-5xl text-center my-4">State Scape</h1>
            <hr className="border-b-2 border-slate-500" />
            <div className="mt-4 flex justify-center gap-8">
                <button
                    className="bg-green-400 w-50 h-12 rounded-md cursor-pointer transition-all duration-250 hover:bg-green-600/80 hover:scale-110"
                    onClick={() => dispatch(toggleTheme())}
                >
                    Toggle UI
                </button>
                <button
                    className="bg-green-400 w-50 h-12 rounded-md cursor-pointer transition-all duration-250 hover:bg-green-600/80 hover:scale-110"
                    onClick={() => dispatch(setLayoutMode('list'))}
                >
                    Switch to List Layout
                </button>
                <button
                    className="bg-green-400 w-50 h-12 rounded-md cursor-pointer transition-all duration-250 hover:bg-green-600/80 hover:scale-110"
                    onClick={() => dispatch(toggleTraceMode())}
                >
                    Toggle Trace Mode
                </button>
            </div>
            <StateScape />
        </>
    );
}

export default App;
