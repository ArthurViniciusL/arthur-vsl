'use client';

import { useContext } from 'react';
import blurCss from '../../styles/BgBlur.module.css'
import styles from './Header.module.css';

import { ThemeContext } from '@/app/Context/ThemeContext';
import { HeaderContext } from '@/app/Context/HeaderContext';
import AppRoutes from '@/app/app.routes';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { DropdownMenu } from '../DropdownMenu';
import AppAssets from '@/app/modules/app.modules';
import { useRouter } from 'next/navigation';

export function Header() {
    
    const routes = useRouter()

    const { pageColor, fontColor } = useContext(ThemeContext);

    const { title } = useContext(HeaderContext)

    return (

        <header className={styles.HeaderBox} style={{ background: pageColor, color: fontColor }}>
            <div className={`${styles.headerContent} ${blurCss.Blur}`}>
                <Button onClick={() => routes.push(AppRoutes.home)}>
                    <Icon src={AppAssets.ArthurLogo} size={30} alt='logo tipo Arthur Vinicius' />
                </Button>

                <h1 className={styles.h1}>
                    {title}
                </h1>
                <DropdownMenu />
            </div>
        </header>
    )
}