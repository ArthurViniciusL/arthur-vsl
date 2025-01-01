import Image from "next/image";
import Adwaita from "../adwaita.modules";
import { AdwaitaProps } from "../Home";

export function Document({ className, size }: AdwaitaProps) {
    return (
        <>
            <Image className={`${className} art:show-on-light-mode`} width={size} src={Adwaita.documentLight} alt="icone de documento" />
            <Image className={`${className} art:show-on-dark-mode`} width={size} src={Adwaita.documentDark} alt="icone de documento" />
        </>
    )
}