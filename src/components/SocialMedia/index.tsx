import {CurrentLink, EMail, GitHub, Instagram, LinkedIn} from "@/modules/app.modules";
import styles from "./social-media.module.css";
import {GitFork, Github} from "lucide-react";

export function SocialMedia() {
    return (
        <>
            <ul className={`${styles.box}`}>

                <li>
                    <a className={`
                        ${styles.content}
                        ${styles.github}
                        art:border-rd:base
                        art:hover:bg:white-03
                        art:hover:font:black-01
                        art:no-dark:font:white-01
                        `}
                        href="https://github.com/ArthurViniciusL"
                        target="_blank"
                    >
                        <Github />
                    </a>
                </li>

                <li>
                    <a className={`
                        ${styles.content}
                        ${styles.linkedin}
                        art:border-rd:base
                        art:hover:bg:white-03
                        art:no-dark:font:white-01
                        art:hover:font:black-01
                        `}
                        href="https://www.linkedin.com/in/arthur-lucena-79a8441b6/"
                        target="_blank"
                    >
                        <LinkedIn />
                    </a>
                </li>

                <li>
                    <a className={`
                        ${styles.content}
                        ${styles.email}
                        art:border-rd:base
                        art:hover:bg:white-03
                        art:no-dark:font:white-01
                        art:hover:font:black-01
                        `}
                        href="mailto:arthur.vsl.contato@gmail.com"
                        target="_blank"
                    >
                        <EMail />
                    </a>
                </li>

                <li >
                    <a className={`
                        ${styles.content}
                        ${styles.instagram}
                        art:border-rd:base
                        art:hover:bg:white-03
                        art:no-dark:font:white-01
                        art:hover:font:black-01
                        `}
                        href="https://www.instagram.com/arthur.vsl/?next=%2F"
                        target="_blank"
                    >
                        <Instagram />
                    </a>

                </li>
            </ul>
        </>
    );
}