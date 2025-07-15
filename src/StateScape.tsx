import React, { useRef, useState } from 'react';
import useStateObserver from './core/useStoreObserver';
import { useStore } from 'react-redux';
import DistrictPulse from './components/DistrictPulse';
import { motion } from 'framer-motion';

type StatePulse = {
    slice: string;
    from: any;
    to: any;
    timestamp: number;
    themeColor: string;
    id: string;
};

const StateScape: React.FC = () => {
    const [stateArray, setStateArray] = useState<StatePulse[]>([]);
    const store = useStore();

    const onChange = (slice: string, from: any, to: any) => {
        const newPulse: StatePulse = {
            slice: slice,
            from: from,
            to: to,
            timestamp: Date.now(),
            themeColor: 'red',
            id: crypto.randomUUID(),
        };
        setStateArray((prev) => [...prev, newPulse]);
    };
    useStateObserver(store, onChange);

    const grouped = stateArray.reduce((acc, pulse) => {
        (acc[pulse.slice] ||= []).push(pulse);
        return acc;
    }, {} as Record<string, StatePulse[]>);
    const lastPulseBySlice = useRef<Record<string, number>>({});

    const [activeState, setActiveState] = useState<null | 'ui' | 'settings' | 'debug'>(null);
    const btnGrpbtnClasses = 'w-30 p-2 m-2 rounded-lg cursor-pointer transition-all duration-150';
    const dynBtnClass = (slice: null | 'ui' | 'settings' | 'debug') =>
        `${btnGrpbtnClasses} ${activeState === slice ? 'bg-indigo-500' : 'bg-indigo-300'}`;

    return (
        <div className="text-center text-poppins">
            StateScape coming soon...
            <div className="bg-zinc-900 rounded p-2 mb-2 border border-red-400">
                <div className="flex justify-center gap-4">
                    <button className={`${btnGrpbtnClasses} ${dynBtnClass('ui')}`} onClick={() => setActiveState('ui')}>
                        UI
                    </button>
                    <button
                        className={`${btnGrpbtnClasses} ${dynBtnClass('settings')}`}
                        onClick={() => setActiveState('settings')}
                    >
                        Settings
                    </button>
                    <button
                        className={`${btnGrpbtnClasses} ${dynBtnClass('debug')}`}
                        onClick={() => setActiveState('debug')}
                    >
                        Debug
                    </button>
                    <button className={`${btnGrpbtnClasses} ${dynBtnClass(null)}`} onClick={() => setActiveState(null)}>
                        Show All
                    </button>
                </div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.15 },
                        },
                    }}
                >
                    {Object.entries(grouped)
                        .filter(([sliceName]) => activeState === null || sliceName === activeState)
                        .map(([sliceName, pulses]) => (
                            <div key={sliceName} className="border p-2 rounded shadow">
                                <h3 className="text-lg font-bold mb-2 text-sky-300">{sliceName}</h3>
                                {pulses.map((p) => {
                                    const lastTimeStamp = lastPulseBySlice.current[p.slice] || p.timestamp;
                                    const deltaSeconds = ((p.timestamp - lastTimeStamp) / 1000).toFixed(1);
                                    lastPulseBySlice.current[p.slice] = p.timestamp;
                                    return <DistrictPulse key={p.id} pulse={p} time={deltaSeconds} />;
                                })}
                            </div>
                        ))}
                </motion.div>
            </div>
        </div>
    );
};

export default StateScape;
