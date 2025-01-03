"use client";

import styles from "./modalMenu.module.css"
import Adwaita from "@/components/Adwaita/adwaita.modules";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HomeIcon } from "../Adwaita/Home";
import { Button } from "../Button";
import AppRoutes from "@/app.routes";
import { ProjectIcon } from "../Adwaita/Project";
import { Document } from "../Adwaita/Document";


export function ModalMenu() {

    const [tabMenu, setTabMenu] = useState<boolean>(false);
    const [mouseOutMenu, setMouseOutMenu] = useState<boolean>(true);

    function handleTabMenu() {
        if (mouseOutMenu) {
            setTabMenu(!tabMenu);
        }
    }

    function handleMouseEnter() {
        setMouseOutMenu(false);
    }

    function handleMouseLeave() {
        setMouseOutMenu(true);
    }

    useEffect(() => {
        const handleClick = (event: any) => {
            setTabMenu(false);
        }

        if (tabMenu && mouseOutMenu) {
            document.addEventListener('click', handleClick);
        }

        return () => {
            document.removeEventListener('click', handleClick);
        }

    }, [tabMenu, mouseOutMenu])


    if (tabMenu) {
        return (
            <>
                <button className="art:btn:no-style" onClick={handleTabMenu}>
                    <Image src={Adwaita.dockTop} alt="icone do menu de links no site" className={`${styles.icon}`} />
                </button>

                <div className={`${styles.box} `}>
                    <ul
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className={`
                            ${styles.painel}
                            art:bg:white-01
                            art:border:r-02
                            art:border:s-01
                            art:border:solid
                            art:border:white-03
                            art:shadow:center
                            `}>

                        <li className="art:border:solid art:border:white-02 art:border-b:s-02 art:hover:border:remove">
                            <a href={AppRoutes.home}>
                                <button className="
                                art:btn:medium
                                art:bg:white-01
                                art:ft:black-01
                                art:hover:bg:white-02
                                ">
                                    <HomeIcon size={20} />
                                    Início
                                </button>
                            </a>
                        </li>

                        <li className="art:border:solid art:border:white-02 art:border-b:s-02 art:hover:border:remove">
                            <a href={AppRoutes.projects}>
                                <button className="
                                art:btn:medium
                                art:bg:white-01
                                art:ft:black-01
                                art:hover:bg:white-02
                                ">
                                    <ProjectIcon size={20} />
                                    Projetos
                                </button>
                            </a>
                        </li>

                        <li className="art:border:solid art:border:white-02 art:border-b:s-02 art:hover:border:remove">
                            <a href="/documents/Arthur_Vinicius_CV.pdf" download="Arthur_Vinicius_CV">
                                <button className="
                                art:btn:medium
                                art:bg:white-01
                                art:ft:black-01
                                art:hover:bg:white-02
                                ">
                                    <Document size={20} />
                                    Meu currículo
                                </button>
                            </a>
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