/* Hey I am useState with the callback - Custom useState React Hook for the functional component 
like setState used in the Class components Enjoy :) - Mukesh Sharma 🦇*/

import React, { useState, useEffect, useRef, useCallback } from 'react';

export function useStateWithCallback(initialState) {
    const [state, setState] = useState(initialState);
    const cbRef = useRef(null);

    const setStateCallback = useCallback((state, cb) => {
        cbRef.current = cb;
        setState(state);
    }, []);

    useEffect(() => {
        if (cbRef.current) {
            cbRef.current(state);
            cbRef.current = null;
        }
    }, [state]);

    return [state, setStateCallback];
}