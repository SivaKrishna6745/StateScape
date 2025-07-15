import { useEffect, useRef } from 'react';
import type { Store } from '@reduxjs/toolkit';

type StateChangeCallback = (slice: string, prevValue: unknown, nextValue: unknown) => void;
const useStateObserver = (store: Store, onChange: StateChangeCallback) => {
    const prevStateRef = useRef(store.getState());
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const nextState = store.getState();
            const prevState = prevStateRef.current;
            Object.keys(nextState).forEach((sliceKey) => {
                if (prevState[sliceKey] !== nextState[sliceKey]) {
                    onChange(sliceKey, prevState[sliceKey], nextState[sliceKey]);
                }
            });
            prevStateRef.current = nextState;
        });
        return () => unsubscribe();
    }, [store, onChange]);
};

export default useStateObserver;
