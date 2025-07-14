import React from 'react';
import { motion } from 'framer-motion';

const getSliceColor = (slice: string) => {
    const map: Record<string, string> = {
        ui: '#f87171', // red
        settings: '#a78bfa', // violet
        session: '#60a5fa', // blue
        debug: '#facc15', // amber
    };
    return map[slice] || '#fcd34d'; // fallback: warm yellow
};

type StatePulse = {
    slice: string;
    from: any;
    to: any;
    timestamp: number;
    themeColor: string;
    id: string;
};

type DistrictPulseProps = {
    pulse: StatePulse;
};

const DistrictPulse = ({ pulse }: DistrictPulseProps) => {
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-red-500/80 p-4 rounded-xl m-4 shadow-md"
            style={{ backgroundColor: getSliceColor(pulse.slice) }}
        >
            <div className="font-bold text-red-300">{pulse.slice}</div>
            <div className="text-sm text-white/70">From: {JSON.stringify(pulse.from)}</div>
            <div className="text-sm text-white/70">To: {JSON.stringify(pulse.to)}</div>
            <div className="text-xs opacity-60">
                {new Date(pulse.timestamp).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
            </div>
        </motion.div>
    );
};

export default DistrictPulse;
