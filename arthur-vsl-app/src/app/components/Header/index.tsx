'use client';

import blurCss from '../../styles/BgBlur.module.css'
import styles from './Header.module.css';

import Link from "next/link";
import arthurLogo from "../../assets/icons/logo-marca.svg";
import { DropdownMenu } from '../DropdownMenu';
import { Button } from '../Button';
import { Icon } from '../Icon';

interface HeaderTitleProps {
    title: string;
}

export function Header({ title }: HeaderTitleProps) {

    return (

        <header className={styles.HeaderBox}>
            <div className={`${styles.headerContent} ${blurCss.Blur}`}>

                <Link href="/">
                    <Button>
                        <Icon src={arthurLogo} size={30} alt='logo tipo Arthur Vinicius' />
                    </Button>
                </Link>

                <h1 className={styles.h1}>{title}</h1>

                <DropdownMenu />
            </div>
        </header>
    )
}