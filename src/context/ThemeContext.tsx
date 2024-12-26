'use client'

import React, { createContext, useEffect, useState } from "react";
import UiGuidelines from "../styles/UiGuidelines";

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeContext = createContext<any>({});

export function ThemeProvider({ children }: ThemeProviderProps) {
   
    const [darkTheme, setDarkTheme] = useState(false);
    const [pageColor, setPageColor] = useState('');
    const [fontColor, setFontColor] = useState('');

    function setThemes(isDarkMode: boolean) {
        const background_color = isDarkMode ? UiGuidelines.dark['bg-color-01'] : UiGuidelines.light['bg-color-01'];
        const font_color = isDarkMode ? UiGuidelines.dark['font-color-02'] : UiGuidelines.light['font-color-01'];

        setPageColor(background_color);
        setFontColor(font_color)
    };
    
    useEffect(() => {
        setDarkTheme(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) // => true or false
        setThemes(darkTheme);

        const browserDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        function themeHandleChange(event:any) {
            setDarkTheme(event.matches);
        }
       
        browserDarkTheme.addEventListener('change', themeHandleChange);
    }, [darkTheme]);

    

    return (
        <ThemeContext.Provider value={{ pageColor, fontColor, darkTheme }} >
            {children}
        </ThemeContext.Provider>
    )
}