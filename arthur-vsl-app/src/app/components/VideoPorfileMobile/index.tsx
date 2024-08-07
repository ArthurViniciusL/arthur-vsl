'use client';

import AppAssets from '@/app/modules/app.modules';
import styles from './VideoPorfileMobile.module.css';
import { useContext } from 'react';
import { ThemeContext } from '@/app/Context/ThemeContext';

export default function VideoPorfileMobile() {

    const { darkTheme } = useContext(ThemeContext);

    return (
        <video className={styles.videoMobile} controls={false} autoPlay loop muted>
            <source src={AppAssets.VideoProfileMobile} />
        </video>
    )
}