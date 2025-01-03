import Image from "next/image";
import styles from "./header.module.css";
import artLogo from "@/assets/icons/logo-marca.svg"
import { ModalMenu } from "../ModalMenu";

export function Header() {
    const title = "Página_nome";
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

                    {title}

                    <ModalMenu />
                </div>
            </header >
        </div >
    )
}