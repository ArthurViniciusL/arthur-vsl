"use client";

import Image from "next/image";
import styles from "./header.module.css";
import artLogo from "@/assets/icons/logo-marca.svg"
import { ModalMenu } from "../ModalMenu";
import { useHeader } from "@/hooks/useHeader";

/* 
let pageTitle:string = 'Init';

export async function getTitle():Promise<string> {
    return pageTitle;
}

export async function setTitle(name:string):Promise<string> {
    return pageTitle = name;
}
*/

export function Header() {

    const { title } = useHeader();

    /* tentar implementar isso com uma funções async de get e set armazenada em constantes em cada compoente */

    return (
        <div className={`${styles.box}`}>
            <header className={`${styles.header}
              art:bg:blur-01
              art:border:r-02
              art:border:s-01
              art:border:solid
              art:border:white-03
              art:shadow:center
            `}>
                <div className={`${styles.content}`}>
                    <Image src={artLogo} alt="logo do site" className={`${styles.logo}`} />

                    <h1 className="art:ft:black-01 art:ft:normal-02 art:ft:bold-03">
                        {title}
                    </h1>

                    <ModalMenu />
                </div>
            </header >
        </div >
    )
}