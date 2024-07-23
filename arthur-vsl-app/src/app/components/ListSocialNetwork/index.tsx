'use client'

import styles from './SocialNetwork.module.css';
import { Button } from '../Button';
import { Github, Linkedin, Mail, Instagram, Component } from "lucide-react";

const iconWidth = 300;
const iconHeight = 80;
const iconsSize = 30;

const fontColor = 'white';
const fontWeight = 'bold';

const bgColorHover = 'black';


const attributes = {
    'github': {
        link: 'https://github.com/ArthurViniciusL',
        name: 'Github',
        gradient: '93.8deg, #3A3A3A 1.86%, #000000 98.73%'
    },
    'linkedin': {
        link: 'https://www.linkedin.com/in/arthur-vin%C3%ADcius-79a8441b6/',
        name: 'LinkedIn',
        gradient: '93.8deg, #278DF4 1.86%, #0A66C2 98.73%'
    },
    'email': {
        link: 'mailto:arthurviniciussl.contato@gmail.com',
        name: 'E-mail',
        gradient: '93.8deg, #FF9184 1.86%, #CD2215 98.73%'
    },
    'instagram': {
        link: 'https://www.instagram.com/arthur.vsl/?next=%2F',
        name: 'Instagram',
        gradient: '93.8deg, #5527CF 1.86%, #D840A4 50.15%, #E4B26B 98.73%'
    }
}

export function ListSocialNetwork() {

    return (

        <ul className={styles.ul}>
            <li className={styles.li}>
                <a href={attributes.github.link} target="_blank" rel="noopener noreferrer">
                    <Button
                        width={iconWidth}
                        height={iconHeight}
                        bgGradient={attributes.github.gradient}
                        bgColorH={bgColorHover} fontColor={fontColor}
                        fontWeight={fontWeight}
                    >
                        <Github color="white" />
                        {attributes.github.name}
                    </Button>
                </a>
            </li>

            <li className={styles.li}>
                <a href={attributes.linkedin.link} target="_blank" rel="noopener noreferrer">
                    <Button
                        width={iconWidth} height={iconHeight}
                        bgGradient={attributes.linkedin.gradient}
                        bgColorH={bgColorHover}
                        fontColor={fontColor}
                        fontWeight={fontWeight}
                    >
                        <Linkedin fill="white" stroke="0" />
                        {attributes.linkedin.name}
                    </Button>
                </a>
            </li>

            <li className={styles.li}>
                <a href={attributes.email.link} target="_blank" rel="noopener noreferrer">
                    <Button width={iconWidth}
                        height={iconHeight}
                        bgGradient={attributes.email.gradient}
                        bgColorH={bgColorHover} fontColor={fontColor}
                        fontWeight={fontWeight}
                    >
                        <Mail color="white" />
                        {attributes.email.name}
                    </Button>
                </a>
            </li>

            <li className={styles.li}>
                <a href={attributes.instagram.link} target="_blank" rel="noopener noreferrer">
                    <Button width={iconWidth}
                        height={iconHeight}
                        bgGradient={attributes.instagram.gradient}
                        bgColorH={bgColorHover} fontColor={fontColor}
                        fontWeight={fontWeight}
                    >
                        <Instagram color="white" />
                        {attributes.instagram.name}
                    </Button>
                </a>
            </li>
        </ul>
    )
}