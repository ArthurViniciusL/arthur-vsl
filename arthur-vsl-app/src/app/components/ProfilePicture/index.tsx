'use client';

import { useEffect, useMemo, useState } from 'react';
import styles from './ProfilePicture.module.css';
import AppAssets from '@/app/modules/app.modules';

export default function ProfilePicture() {

    const videoProfile = useMemo(() => {
        return AppAssets.VideoProfile;
    }, [AppAssets.VideoProfile]);

    const videoProfileMobile = useMemo(() => {
        return AppAssets.VideoProfileMobile;
    }, [AppAssets.VideoProfileMobile]);


    // Teste de como implementar a mudança de componentes de acordo com o tamanho da tela
/* 
    const [mobileVideo, setMobileVideo] = useState<boolean>(false);
    const isComponentClient = typeof window !== 'undefined';
    const [windowWidth, setWindowWidth] = useState<number>(isComponentClient ? window.innerWidth : 0);

    useEffect(() => {
        function handleWidth() {
            if (window.innerWidth <= 760) {
                setMobileVideo(true);
                setWindowWidth(window.innerWidth);
            } else {
                setMobileVideo(false)
            }
        }
        window.addEventListener('resize', handleWidth);
        handleWidth();
    },[]);

 */    return (
        <div>
            <video className={styles.videoMobile} controls={false} autoPlay loop muted>
                <source src={videoProfileMobile} />
            </video>

            <video className={styles.video} controls={false} autoPlay loop muted>
                <source src={videoProfile} />
            </video>
        </div>
    )
}

