import type { ITheme } from "../types/ITheme";
import type { ReactNode } from "react";

import { createContext } from "react";
import { useEffect, useState } from "react";

interface ThemeContextData {
    theme: ITheme;
    setTheme: (theme: ITheme) => void;
    isDark: boolean;
}
export const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export function ThemeProvider({ children }: { children: ReactNode }) {

    const [theme, setTheme] = useState<ITheme>('light');
    const isDark = theme === 'dark';

    useEffect(() => {
        const root = document.documentElement;

        root.classList.remove("light", "dark");
        root.removeAttribute("data-theme");

        root.setAttribute("data-theme", theme);
        root.classList.add(theme);

    }, [theme]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        function handleTheme(isDark: boolean) {
            setTheme(isDark ? 'dark' : 'light');            
        }

        handleTheme(mediaQuery.matches);

        const handler = (e: MediaQueryListEvent) => handleTheme(e.matches);

        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, isDark }}>
            {children}
        </ThemeContext.Provider>
    );
}