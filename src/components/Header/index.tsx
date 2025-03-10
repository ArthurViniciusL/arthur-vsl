// "use client";

import Image from "next/image";
import styles from "./header.module.css";
import artLogo from "@/assets/icons/logo-marca.svg"
import { ModalMenu } from "../ModalMenu";
import AppRoutes from "@/app.routes";

interface HeaderProps {
    title: string;
}

export function Header({ title }: HeaderProps) {

    /* Essa é uma implementação menos sofisticada para o Header,
    * mas ainda é válida pois o Header só possue o 'title' como
    * proprieda dinâmica, o que é válido pois isso me permite
    * manter as páginas como componentes SSR.
    */

    // const { title } = useHeader();

    return (
        <>
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
                        <a href={AppRoutes.home} className="">
                            <Image src={artLogo} alt="logo do site" className={`${styles.logo}`} width={10} />
                        </a>

                        <h1 className="art:font:black-01 art:font:normal-02 art:font:bold">
                            {title}
                        </h1>

                        <ModalMenu />
                    </div>
                </header >
            </div >
        </>
    )
}