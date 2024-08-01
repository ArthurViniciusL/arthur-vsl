'use client'
import { createContext } from "react";
import { ThemeProvider } from "./ThemeContext";
import { HeaderProvider } from "./HeaderContext";
import { IconThemeProvider } from "./IconThemeContext";

export const AppContext = createContext<any>({});

interface AppProviderPops {
    children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderPops) {
    return (
        <AppContext.Provider value={{}}>
            <ThemeProvider>
                <IconThemeProvider>
                    <HeaderProvider>
                        {children}
                    </HeaderProvider>
                </IconThemeProvider>
            </ThemeProvider>
        </AppContext.Provider>
    )
}