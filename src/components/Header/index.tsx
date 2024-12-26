import Image from "next/image";
import styles from "./header.module.css";
import artLogo from "@/assets/icons/logo-marca.svg"
import { TabMenu } from "../TabMenu";

export function Header() {
    const title = "Página_nome";
    return (
        <div className={`${styles.box}`}>
            <header className={`${styles.header} bg:art-blur-01`}>
                <div className={`${styles.content}`}>
                    <Image src={artLogo} alt="" className={`${styles.logo}`} />

                    {title}

                    <TabMenu />
        </div>
            </header >
        </div >
    )
}