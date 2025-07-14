import React, { useState } from 'react';
import useStateObserver from './core/useStoreObserver';
import { useStore } from 'react-redux';
import DistrictPulse from './components/DistrictPulse';

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

    return (
        <div className="text-center text-poppins">
            StateScape coming soon...
            <div className="bg-zinc-900 rounded p-2 mb-2 border border-red-400">
                {Object.entries(grouped).map(([sliceName, pulses]) => (
                    <div key={sliceName} className="border p-2 rounded shadow">
                        <h3 className="text-lg font-bold mb-2 text-sky-300">{sliceName}</h3>
                        {pulses.map((p) => (
                            <DistrictPulse key={p.id} pulse={p} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StateScape;
