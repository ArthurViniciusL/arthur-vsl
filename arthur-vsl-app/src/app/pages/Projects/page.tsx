'use client';

import '../../styles/global.css';
import { useContext } from 'react';
import { HeaderContext } from '@/app/Context/HeaderContext';

import underConstrution from "@/app/assets/videos/under_construction.mp4"

export default function Projects() {

    const { title, setPageTitle } = useContext(HeaderContext);

    setPageTitle('Projetos');

    return (
        <main style={{
            width: "100vw",
            height: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "20px"
        }}>
            <video autoPlay loop controls={false} >
                <source src={underConstrution} type="" />
            </video>
        </main>
    )
}