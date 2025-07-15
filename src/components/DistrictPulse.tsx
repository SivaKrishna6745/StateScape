import React from 'react';
import { easeOut, motion } from 'framer-motion';

const getSliceColor = (slice: string) => {
    const map: Record<string, string> = {
        ui: '#f87171', // red
        settings: '#a78bfa', // violet
        debug: '#facc15', // amber
    };
    return map[slice] || '#fcd34d'; // fallback: warm yellow
};

const emojiMap: Record<string, string> = {
    ui: '🎨',
    settings: '🧱',
    debug: '🕵️',
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
    time: string;
};

const DistrictPulse = ({ pulse, time }: DistrictPulseProps) => {
    return (
        <motion.div
            variants={{
                hidden: { scale: 0.9, opacity: 0 },
                visible: { scale: 1, opacity: 1 },
            }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            whileHover={{ scale: 1.02, boxShadow: `1px 2px 4px ${getSliceColor(pulse.slice)}aa` }}
            className="bg-red-500/80 p-4 rounded-xl m-4 shadow cursor-pointer"
            style={{ backgroundColor: getSliceColor(pulse.slice) }}
        >
            <div className="font-bold text-red-300">
                {emojiMap[pulse.slice] || '🔘'} {pulse.slice}
            </div>
            <div className="text-xs opacity-60">
                +{time}s since last {pulse.slice} change
            </div>

            <div className="text-sm text-white/70">From: {JSON.stringify(pulse.from)}</div>
            <div className="text-sm text-white/70">To: {JSON.stringify(pulse.to)}</div>
            <div className="text-xs opacity-60">
                Timestamp:{' '}
                {new Date(pulse.timestamp).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
            </div>
        </motion.div>
    );
};

export default DistrictPulse;
