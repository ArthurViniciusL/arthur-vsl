'use client';

import styles from './ProfilePicture.module.css';

import Image from "next/image";

import imgProfile from "../../../assets/images/img_profile.jpg";

export default function ProfilePicture() {
    /* const borderColor = {
        border: `2px solid ${color}`
     } */
    return (
        <picture>
            <Image
                className={styles.imgStyle}
                src={imgProfile}
                alt="imagem_do_perfil"
                priority={true}
            />
        </picture>
    )
}

