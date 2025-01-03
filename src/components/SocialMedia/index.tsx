import { EMail, GitHub, Instagram, LinkedIn } from "@/modules/app.modules";
import styles from "./social-media.module.css";

export function SocialMedia() {
    return (
        <>
            <ul className={`${styles.box}`}>

                <li>
                    <a className={`
                        ${styles.content}
                        ${styles.github}
                        art:border:r-02
                        art:hover:bg:white-03
                        art:no-dark:ft:white-01
                        art:hover:font-color:black-01
                        `}
                        href="https://github.com/ArthurViniciusL"
                        target="_blank"
                    >
                        <GitHub />
                    </a>
                </li>

                <li>
                    <a className={`
                        ${styles.content}
                        ${styles.linkedin}
                        art:border:r-02
                        art:hover:bg:white-03
                        art:no-dark:ft:white-01
                        art:hover:font-color:black-01
                        `}
                        href="https://www.linkedin.com/in/arthur-vin%C3%ADcius-79a8441b6/"
                        target="_blank"
                    >
                        <LinkedIn />
                    </a>
                </li>

                <li>
                    <a className={`
                        ${styles.content}
                        ${styles.email}
                        art:border:r-02
                        art:hover:bg:white-03
                        art:no-dark:ft:white-01
                        art:hover:font-color:black-01
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
                        art:border:r-02
                        art:hover:bg:white-03
                        art:no-dark:ft:white-01
                        art:hover:font-color:black-01
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