"use client";

import styles from "./tabMenu.module.css"
import Adwaita from "@/modules/adwaita.modules";
import Image from "next/image";
import { useEffect, useState } from "react";


export function TabMenu() {

    const [tabMenu, setTabMenu] = useState<boolean>(false);
    const [mouseOutMenu, setMouseOutMenu] = useState<boolean>(true);

    function handleTabMenu() {
        if (mouseOutMenu) {
            setTabMenu(!tabMenu)
        }
    };

    function handleMouseEnter() {

    };

    function handleMouseLeave() {

    };

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {

        }
        document.addEventListener('click', handleClick);

        // document.removeEventListener('click', handleClick);

    }, [])


    if (tabMenu) {
        return (
            <>
                <button className="art:btn:no-style" onClick={handleTabMenu}>
                    <Image src={Adwaita.dockTop} alt="icone do menu de links no site" className={`${styles.icon}`} />
                </button>

                <div className={`${styles.painel} `}>
                    <ul
                        onMouseEnter={() => setMouseOutMenu(false)}
                        onMouseLeave={() => setMouseOutMenu(true)}
                        className={`
                            ${styles.painelContent}
                            art:bg:white-01
                            art:border-radius:r-01
                            art:border-size:s-01
                            art:border-style:solid
                            art:border-color:white-03
                            `}
                    >
                        <li>
                            Item
                        </li>
                        <li>
                            Item
                        </li>
                        <li>
                            Item
                        </li>
                        <li>
                            Item
                        </li>
                        <li>
                            Item
                        </li>

                    </ul>
                </div>
            </>
        );
    }

    else {
        return (
            <>
                <button onClick={handleTabMenu} className="art:btn:no-style">
                    <Image src={Adwaita.dockBottom} alt="icone do menu de links no site" className={`${styles.icon}`} />
                </button>
            </>
        )
    }
}