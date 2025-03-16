// "use client";

import styles from "./home.module.css";
import { ImageProfile } from "@/components/ImageProfile";
import { SocialMedia } from "@/components/SocialMedia";
import { CardProject } from "@/components/CardProject";
import { Link } from "@/components/Link";
import AppRoutes from "@/app.routes";
import { Header } from "@/components/Header";

export default function Home() {
    /*
    const { setTitle } = useHeader();
    useEffect(() => {
        setTitle("Início")
    }, []);
    */

    return (
        <>
            
            {/* <div className={`${styles.box}`}> */}
                <section className={`${styles.content}`}>
                    <ImageProfile />
                    <div className={`${styles.textArea}`}>
                        <h2 className="art:font:3xl">
                            Sobre mim
                        </h2>
                        <p className="art:font:base">
                            Olá! Meu nome é Arthur, sou desenvolvedor web full-stack, um cinéfilo nas horas vagas e paraibano de coração.
                        </p>
                        <p className="art:font:base">
                            Atualmente, estou no sétimo período da graduação em Sistemas de Informação, onde descobri minha paixão por criar e aprimorar produtos por meio de soluções criativas. Nos últimos anos, acumulei experiência no desenvolvimento de software ao me envolver em diversos projetos acadêmicos.
                        </p>

                        <p className="art:font:base">
                            Durante minha jornada na universidade, tive a oportunidade de desempenhar múltiplos papéis, desde desenvolvedor front-end até designer de UI/UX, Scrum Master e QA. Essas experiências não apenas fortaleceram minhas habilidades técnicas, mas também me permitiram explorar diferentes aspectos do desenvolvimento de software.
                        </p>

                        <SocialMedia />
                    </div>
                </section>

                <span className="art:line:white-03"></span>

                <section className={`${styles.content} ${styles.contentProject}`}>
                    <h1 className="art:font:title art:font:yellow-02">
                        Meu projetos:
                    </h1>
                    <CardProject />

                    <span className={styles.boxVerMais}>
                        <Link className="
                        art:bg:yellow:20%
                        art:hover:bg:yellow:40%
                        art:font:yellow-02
                        "
                            href={AppRoutes.projects} newTab={true}>
                            Ver mais
                        </Link>
                    </span>
                </section>
            {/* </div> */}
        </>
    );
}