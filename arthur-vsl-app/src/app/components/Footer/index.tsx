"use client";

import styles from "./Footer.module.css";
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '@/app/Context/ThemeContext';
import UiGuidelines from "@/app/styles/UiGuidelines";
import { Icon } from "../Icon";

import { ExternalLinkIcon } from "@/app/modules/icons.module";
import { Button } from "../Button";

export function Footer() {

    const { darkTheme, fontColor } = useContext(ThemeContext);

    const [bgColor, setBgColor] = useState<string>();

    const iconSize = 15;


    useEffect(() => {
        darkTheme ? setBgColor(UiGuidelines.dark["bg-color-04"]) : setBgColor(UiGuidelines.light["bg-color-03"]);
    }, [darkTheme])

    return (
        <footer className={styles.footerBox} style={{
            background: bgColor,
            color: fontColor
        }}>
            <div className={styles.footerContent}>
                <a href="https://gnome.pages.gitlab.gnome.org/libadwaita/" target="_blank" rel="noopener noreferrer">
                    <Button fontColor={fontColor}>
                        Icones Adwaita
                        <ExternalLinkIcon size={iconSize} />
                    </Button>
                </a>
                <a href="https://lucide.dev/" target="_blank" rel="noopener noreferrer">
                    <Button fontColor={fontColor}>
                        Icones Lucide
                        <ExternalLinkIcon size={iconSize} />
                    </Button>
                </a>
                <a href="https://github.com/ArthurViniciusL/arthur-vsl/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">
                    <Button fontColor={fontColor}>
                        Licença do projeto
                        <ExternalLinkIcon size={iconSize} />
                    </Button>
                </a>

                <div style={{
                    opacity: "50%"
                }}>
                    &#169; 2024 Arthur Lucena. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    )
}