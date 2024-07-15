import Image from "next/image";
import home from "../../assets/icons/Adwaita/user-home-symbolic.svg";
import projects from '../../assets/icons/Adwaita/shapes-large-symbolic.svg';

import dashIconOn from "../../assets/icons/Adwaita/dock-top-symbolic.svg";
import { Icon } from "../Icon";


interface AdwaitaIconsProps {
    name: string;
    size: number;
    alt: string
}

export function AdwaitaIcons({ name, size, alt }: AdwaitaIconsProps) {
    return (
        <Image src={name} width={size} height={size} alt={alt}/>
    )
}