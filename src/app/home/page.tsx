import { ImageProfile } from "@/components/ImageProfile";
import styles from "./home.module.css"
import { SocialMedia } from "@/components/SocialMedia";
import { CardProject } from "@/components/CardProject";

export default function Home() {
    return (
        <main className={`${styles.box}`}>
            <section className={`${styles.content}`}>
                <ImageProfile />
                <div className={`${styles.textArea}`}>
                    <h2 className="art:font-size:subtitle-01">
                        Sobre mim
                    </h2>
                    <p className="art:font-size:normal">
                        Olá! Meu nome é Arthur, sou desenvolvedor web full-stack, um cinéfilo nas horas vagas e paraibano de coração.
                    </p>
                    <p className="art:font-size:normal">
                        Atualmente, estou no sétimo período da graduação em Sistemas de Informação, onde descobri minha paixão por criar e aprimorar produtos por meio de soluções criativas. Nos últimos anos, acumulei experiência no desenvolvimento de software ao me envolver em diversos projetos acadêmicos.
                    </p>

                    <p className="art:font-size:normal">
                        Durante minha jornada na universidade, tive a oportunidade de desempenhar múltiplos papéis, desde desenvolvedor front-end até designer de UI/UX, Scrum Master e QA. Essas experiências não apenas fortaleceram minhas habilidades técnicas, mas também me permitiram explorar diferentes aspectos do desenvolvimento de software.
                    </p>

                    <SocialMedia />
                </div>
            </section>

            <section className={`${styles.content} ${styles.contentProject}`}>
                <h1 className="art:font-size:title">
                    Meu projetos
                </h1>
                <CardProject />

                <button>
                    Veja main
                </button>
            </section>
        </main>
    );
}