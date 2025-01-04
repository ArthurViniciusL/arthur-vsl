"use client";

import { useEffect, useState } from "react";

export function useWindow() {
    const [windowSize, setWindowSize] = useState<number>(0);

    useEffect(() => {
            function handleWindow() {
                setWindowSize(window.innerWidth);
            }
    
            window.addEventListener('resize', handleWindow);
        }, [windowSize])
    
    return windowSize;
}