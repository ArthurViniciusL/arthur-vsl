'use client';

import '../../styles/global.css';
import { useContext } from 'react';
import { HeaderContext } from '@/app/Context/HeaderContext';

import underConstrution from "@/app/assets/videos/under_construction.mp4"
import { ThemeContext } from '@/app/Context/ThemeContext';

export default function Projects() {

    const { title, setPageTitle } = useContext(HeaderContext);
    const { pageColor } = useContext(ThemeContext);

    setPageTitle('Projetos');

    return (
        <main style={{
            width: "100vw",
            height: "85vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: pageColor
        }}>
            <section style={{}}>
                <video autoPlay loop controls={false} style={{
                    borderRadius: "20px"
                }} >
                    <source src={underConstrution} type="" />
                </video>

            </section>
        </main>
    )
}