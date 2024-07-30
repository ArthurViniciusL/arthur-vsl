'use client';

import AppAssets from '@/app/modules/app.modules';
import styles from './ProfilePicture.module.css';

/* <picture>
                <Image
                    className={styles.imgStyle}
                    src={AppAssets.ImgProfile}
                    alt="imagem_do_perfil"
                    priority={true}
                />
            </picture>
            */


export default function ProfilePicture() {
    return (
        <video className={styles.video} controls={false} autoPlay loop muted>
            <source src={AppAssets.VideoProfile} />
        </video>
    )
}

