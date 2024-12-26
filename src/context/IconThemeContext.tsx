'use client'

import { createContext, useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import AppAssets from "../modules/adwaita.modules";

export const IconThemeContext = createContext<any>({});

interface IconThemeProviderProps {
    children: React.ReactNode;
}

export function IconThemeProvider({ children }: IconThemeProviderProps) {

    const { darkTheme } = useContext(ThemeContext)

    const [homeIcon, setHomeIcon] = useState<string>(AppAssets.HomeIconLight);
    const [projectsIcon, setProjectsIcon] = useState<string>(AppAssets.ProjectsIconLight);
    const [myLinks, setMyLinks] = useState<string>(AppAssets.MyLinksDark);
    const [cvIcon, setCvIcon] = useState<string>(AppAssets.CvIconDark);

    function setIcons() {
        let HomeIcon: string;
        let ProjectsIcon: string;
        let MyLinks: string;
        let CvIcon: string;

        if (darkTheme) {
            HomeIcon = AppAssets.HomeIconDark;
            ProjectsIcon = AppAssets.ProjectsIconDark;
            MyLinks = AppAssets.MyLinksDark;
            CvIcon = AppAssets.CvIconDark;
        } else {
            HomeIcon = AppAssets.HomeIconLight;
            ProjectsIcon = AppAssets.ProjectsIconLight;
            MyLinks = AppAssets.MyLinksLight;
            CvIcon = AppAssets.CvIconLight;
        }

        setHomeIcon(HomeIcon);
        setProjectsIcon(ProjectsIcon);
        setMyLinks(MyLinks);
        setCvIcon(CvIcon);
    }

    useEffect(() => {
        setIcons();
    }, [darkTheme])

    return (
        <IconThemeContext.Provider value={{ homeIcon, projectsIcon, myLinks, cvIcon }}>
            {children}
        </IconThemeContext.Provider>
    );
}