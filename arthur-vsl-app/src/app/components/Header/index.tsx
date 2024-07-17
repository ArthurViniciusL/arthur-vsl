'use client';

import blurCss from '../../styles/BgBlur.module.css'
import styles from './Header.module.css';

import Link from "next/link";
import arthurLogo from "../../assets/icons/logo-marca.svg";
import arthurAppRoutes from '@/app/app.routes';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { DropdownMenu } from '../DropdownMenu';

interface HeaderTitleProps {
    title: string;
}

export function Header({ title }: HeaderTitleProps) {

    // arthurAppRoutes.home

    return (

        <header className={styles.HeaderBox}>
            <div className={`${styles.headerContent} ${blurCss.Blur}`}>
                <Link href={arthurAppRoutes.home}>
                    <Button >
                        <Icon src={arthurLogo} size={30} alt='logo tipo Arthur Vinicius' />
                    </Button>
                </Link>

                <h1 className={styles.h1}>{title}</h1>

                <DropdownMenu />
            </div>
        </header>
    )
}