"use client";

import Image from "next/image";
import Adwaita from "../adwaita.modules";
import { AdwaitaProps } from "../Home";
import { useEffect, useState } from "react";

export function Document({ className, size }: AdwaitaProps) {

    const dark:boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [isDark, setIsDark] = useState<boolean>(dark);

    useEffect(() => {
        const darkTheme = window.matchMedia('(prefers-color-scheme: dark)')

        function handleDarkTheme(event: any) {
            setIsDark(event.matches)
        }

        darkTheme.addEventListener('change', handleDarkTheme)

    }, [isDark]);

    const icon = isDark ? Adwaita.documentDark : Adwaita.documentLight;

    return (
        <>
            <Image className={`${className}`} width={size} src={icon} alt="icone de documento" />
        </>
    )
}