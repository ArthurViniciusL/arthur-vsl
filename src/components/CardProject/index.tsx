"use client";
import styles from "./card-project.module.css";
import { CurrentLink } from "@/modules/app.modules";
import { StackTag } from "../StackTag";
import { useEffect, useState } from "react";
import { useWindow } from "@/hooks/useWindow";

export function CardProject() {

    const window = useWindow();
    const sliceDescription: number = window <= 500 ? 12 : window <= 1100 ? 24 : 30;

    const projects = [
        {
            title: '@Arthur.vsl',
            description: 'Este site! Um reflexo da minha paixão pela construção de sofwares, meu compromisso com a qualidade do código e seu constante aprendizado e aprimoramento nas tecnologias mais recentes. Aqui, você encontrará uma combinação de projetos acadêmicos, experiências práticas e visões sobre o futuro do desenvolvimento de software.',
            link: 'https://github.com/ArthurViniciusL/arthur-vsl',
            stacks: ['typescript', 'next.js', 'css', 'art css']
        },
        {
            title: 'Improve Next App',
            description: 'Script de automatização que simplifica as etapas iniciais de configuração em projetos Next.js. Ele foi desenvolvido para ajudar tanto usuários de Linux quanto desenvolvedores de Next.js a economizar tempo e garantir consistência na estruturação e configuração de novos projetos. A solução é ideal para quem busca agilidade no desenvolvimento, eliminando tarefas repetitivas e otimizando o processo de criação',
            link: 'https://github.com/ArthurViniciusL/improve-next-app',
            stacks: ['shell', 'linux']
        },
        {
            title: 'Eve',
            description: 'Eve é um gerenciador de arquivos baseado em nuvem desenvolvido para praticar docker e kubernets',
            link: 'https://github.com/ArthurViniciusL/EVE',
            stacks: ['javascript', 'react.js', 'spring boot', 'css', 'docker']
        },
        {
            title: 'Art CSS',
            description: 'Art CSS é a minha biblioteca pessoal de estilização, projetada para incorporar as principais diretrizes de design que sigo ao desenvolver projetos front-end. Inspirada no Tailwind CSS, Art CSS adota uma abordagem funcional semelhante, mas com um diferencial: não se propõe a substituir o Tailwind, e sim a complementá-lo, oferecendo um toque único e personalizado ao desenvolvimento de interfaces.',
            link: 'https://github.com/ArthurViniciusL/art-css',
            stacks: ['css', 'python', 'git']
        }
    ]

    return (
        <>
            <ul className={styles.box}>
                {
                    projects.map((project: any, index: number) => (
                        <li key={index} className={`${styles.content} art:cursor:pointer
                                    art:font:normal-01
                                    art:bg:white-01
                                    art:border:solid
                                    art:border:thin
                                    art:border:white-03
                                    art:hover:bg:white-02
                                    art:border-rd:base
                                    art:p:base
                            `}>
                            <a href={project.link} target="_blank" className={`${styles.card} `}>
                                <h2 className={`${styles.cardTitle} art:font:subtitle-02`}>
                                    {project.title}
                                    <CurrentLink className="art:font:blue-02" width={15} />
                                </h2>
                                <div className={`${styles.textArea}`}>
                                    <p className="">
                                        {
                                            project.description.length > 200
                                                ?
                                                project.description.split(" ").slice(0, sliceDescription).join(" ") + "..."
                                                :
                                                project.description + "."
                                        }
                                    </p>
                                </div>

                                <ul className={styles.stakTagContent}>
                                    {
                                        project.stacks.map((stack: any, index: number) => (
                                            <li key={index}>
                                                <StackTag name={stack} />
                                            </li>
                                        ))
                                    }
                                </ul>
                            </a>
                        </li>
                    ))
                }
            </ul >

        </>
    );
}