'use client';

import blurCss from '../../styles/BgBlur.module.css'
import styles from './Header.module.css';

import Link from "next/link";
import arthurLogo from "../../assets/icons/logo-marca.svg";
import arthurAppRoutes from '@/app/app.routes';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { DropdownMenu } from '../DropdownMenu';
import { useContext } from 'react';
import { HeaderContext } from '@/app/Context/HeaderContext';
import { ThemeContext } from '@/app/Context/ThemeContext';


export function Header() {

    const { pageColor, fontColor } = useContext(ThemeContext);

    const { title, setTtitle } = useContext(HeaderContext)

    return (

        <header className={styles.HeaderBox} style={{ background: pageColor, color: fontColor }}>
            <div className={`${styles.headerContent} ${blurCss.Blur}`}>
                <Link href={arthurAppRoutes.home}>
                    <Button >
                        <Icon src={arthurLogo} size={30} alt='logo tipo Arthur Vinicius' />
                    </Button>
                </Link>

                <h1 className={styles.h1}>
                    {title}
                </h1>
                <DropdownMenu />
            </div>
        </header>
    )
}