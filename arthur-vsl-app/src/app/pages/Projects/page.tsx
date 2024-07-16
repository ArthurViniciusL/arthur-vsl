import { Header } from '@/app/components/Header';
import '../../styles/global.css';
import { useContext } from 'react';

interface ProjectsPops {
    title: string;
}

export default function Projects() {
    return (
        <main>
            <Header title='Projetos'/>
            <h1>Página de projeto</h1>
        </main>
    )
}