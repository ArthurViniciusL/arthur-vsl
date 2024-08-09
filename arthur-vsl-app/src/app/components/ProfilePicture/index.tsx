'use client';

import styles from './ProfilePicture.module.css';
import AppAssets from '@/app/modules/app.modules';

export default function ProfilePicture() {
    return (
        <div>
            <video className={styles.video} controls={false} autoPlay loop muted>
                <source src={AppAssets.VideoProfile} />
            </video>

            <video className={styles.videoMobile} controls={false} autoPlay loop muted>
            <source src={AppAssets.VideoProfileMobile} />
        </video>
        </div>
    )
}

