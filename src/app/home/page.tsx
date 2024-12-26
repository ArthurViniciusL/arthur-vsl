import { ImageProfile } from "@/components/ImageProfile";
import styles from "./home.module.css"

export default function Home() {
    return (
        <main className={`${styles.box}`}>
            <section>
                <ImageProfile/>
                <h1>
                    Sobre mim
                </h1>
                <p>
                    Olá! Meu nome é Arthur, sou desenvolvedor web full-stack, um cinéfilo nas horas vagas e paraibano de coração.
                </p>
                <p>
                    Atualmente, estou no sétimo período da graduação em Sistemas de Informação, onde descobri minha paixão por criar e aprimorar produtos por meio de soluções criativas. Nos últimos anos, acumulei experiência no desenvolvimento de software ao me envolver em diversos projetos acadêmicos.
                </p>

                <p>
                    Durante minha jornada na universidade, tive a oportunidade de desempenhar múltiplos papéis, desde desenvolvedor front-end até designer de UI/UX, Scrum Master e QA. Essas experiências não apenas fortaleceram minhas habilidades técnicas, mas também me permitiram explorar diferentes aspectos do desenvolvimento de software.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur recusandae temporibus soluta sed enim? Aliquid corrupti rerum tempora quod id omnis dolorum, facilis iure ducimus laudantium, fugiat nemo voluptate eligendi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque dolorem nemo. Eligendi, exercitationem dolorem, sint rem laudantium numquam voluptas, animi molestiae nobis voluptates tempore repellendus maiores quod veniam magnam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consequuntur placeat beatae corrupti nostrum, ipsum amet qui voluptatem vitae illum ab earum autem tempora? Itaque dignissimos at maxime? Ipsa, dolor?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia provident soluta, rerum odio dolorem itaque reprehenderit quidem eum perspiciatis sequi architecto labore earum porro, numquam asperiores neque nisi. Eius, voluptates?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae autem beatae consequuntur omnis nobis velit, ipsum tempora numquam quia voluptatibus soluta voluptatem natus repellendus sint, in adipisci molestiae suscipit modi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolores voluptates ut, alias impedit quidem rerum nulla temporibus accusamus, deserunt similique explicabo eaque quaerat atque! Inventore alias nam ut iste?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sed assumenda enim labore doloribus provident, maiores autem! Mollitia laborum, dolorum dolore asperiores, magni sequi aliquam reiciendis placeat quia eum sint.
                </p>
            </section>
        </main>
    );
}