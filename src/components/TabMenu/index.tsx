import styles from "./tabMenu.module.css"
import Adwaita from "@/modules/adwaita.modules";
import Image from "next/image";


export function TabMenu() {
    return (
        <>
            <Image src={Adwaita.dockBottom} alt="icone do menu de links no site" className={`${styles.icon}`} />
        </>
    )
}