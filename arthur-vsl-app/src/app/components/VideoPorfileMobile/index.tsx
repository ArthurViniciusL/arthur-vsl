'use client';

import AppAssets from '@/app/modules/app.modules';
import styles from './VideoPorfileMobile.module.css';
export default function VideoPorfileMobile() {
    
    return (
        <video className={styles.videoMobile} controls={false} autoPlay loop muted>
            <source src={AppAssets.VideoProfileMobile} />
        </video>
    )
}