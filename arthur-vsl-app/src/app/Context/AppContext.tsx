'use client'

import React, { createContext, useState } from "react";

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeContext = createContext<any>({});

// export const TitleContext = createContext<any>({});

export function AppProvider({ children }: ThemeProviderProps) {

    // const [title, setTitle] = useState('Início');

    /* function setPageTitle(title: string) {
        setTitle(title);
        } */

    const [theme, setTheme] = useState("light");
    function setPageTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{ theme, setPageTheme }} >
            {children}
        </ThemeContext.Provider>
    )
}