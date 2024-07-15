'use client'

import React, { createContext, useState } from "react";

interface ThemeProviderProps {
    children: React.ReactNode;
}

type ThemeContextType = {
    theme: string,
    setPageTheme: () => any;
}

export const ThemeContext = createContext<any>({});

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState("light");

    function setPageTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{ theme, setPageTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}