import { createContext } from "react";
import { useEffect, useState } from "react";
import type { ITheme } from "../types/ITheme";
import Theme from "@/components/layout/theme";

interface ThemeContextData {
    theme: ITheme;
    setTheme: (theme: ITheme) => void;
}
export const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<ITheme>('light');

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
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <Theme>
                {children}
            </Theme>
        </ThemeContext.Provider>
    );
}