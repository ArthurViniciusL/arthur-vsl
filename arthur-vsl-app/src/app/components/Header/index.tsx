'use client';

import styles from './Header.module.css';
import { Button } from '../Button';
import { Icon } from '../Icon';
import dashIconOn from "../../assets/icons/dock-top-symbolic.svg";
import dashIconOff from "../../assets/icons/dock-bottom-symbolic.svg";
import arthurLogo from "../../assets/icons/logo-marca.svg";

import Link from "next/link";
import { useEffect, useState } from 'react';

interface HeaderTitleProps {
    title: string;
}

export function Header({ title }: HeaderTitleProps) {

    const [isDashIcon, setdashIcon] = useState(false);
    const dashIcon = isDashIcon ? dashIconOn : dashIconOff;
    
    function handleIconClick() {
        setdashIcon(!isDashIcon)
    }


    return (
        <header className={`${styles.header} ${styles.bgBlur}`}>
            <Link href="/">
                <Button bgColor="transparent">
                    <Icon src={arthurLogo} size={30} alt='' />
                </Button>
            </Link>

            <h1>{title}</h1>

            <Button onClick={handleIconClick} bgColor='transparent'>
                <Icon src={dashIcon} size={30} alt='' />
            </Button>
        </header>
    )
}