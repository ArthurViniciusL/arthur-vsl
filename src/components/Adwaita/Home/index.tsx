"use client"

import Adwaita from "@/components/Adwaita/adwaita.modules";
import Image from "next/image";
import { useEffect, useState } from "react";

export interface AdwaitaProps {
    className?: string;
    size?: number;
}

export function HomeIcon({ className, size }: AdwaitaProps) {
    
    let dark: boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [isDark, setIsDark] = useState<boolean>(dark);

    useEffect(() => {
        const darkTheme = window.matchMedia('(prefers-color-scheme: dark)')

        function handleDarkTheme(event: any) {
            setIsDark(event.matches)
        }

        darkTheme.addEventListener('change', handleDarkTheme)

    }, [isDark]);

    const icon = isDark ? Adwaita.homeDark : Adwaita.homeLight;

    return (
        <>
            <Image className={className} width={size} src={icon} alt="icone de início" priority={true} />
        </>
    );
}