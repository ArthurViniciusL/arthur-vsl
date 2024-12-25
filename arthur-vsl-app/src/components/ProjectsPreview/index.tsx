'use client';

import Image from 'next/image';
import styles from './ProjectsPreview.module.css'
import img_preview from "../../../assets/images/img_preview_projects.png";

export function ProjectsPreview() {
    return (
        <Image className={styles.imgPreview} src={img_preview} alt="imagem dos projetos" priority={true} />
    )
}