"use client"

import { useEffect, useState } from "react";
import { AdwaitaProps } from "../Home";
import Adwaita from "../adwaita.modules";
import Image from "next/image";

export function ProjectIcon({ className, size }: AdwaitaProps) {


    let dark: boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [isDark, setIsDark] = useState<boolean>(dark);

    useEffect(() => {
        const darkTheme = window.matchMedia('(prefers-color-scheme: dark)')

        function handleDarkTheme(event: any) {
            setIsDark(event.matches)
        }

        darkTheme.addEventListener('change', handleDarkTheme)

    }, [isDark]);

    const icon = isDark ? Adwaita.projectDark : Adwaita.projectLight;

    return (
        <>
            <Image className={className} width={size} src={icon} alt="icone de início" priority={true} />
        </>
    );

}