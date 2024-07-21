'use client';

import '../../styles/global.css';
import { useContext } from 'react';
import { HeaderContext } from '@/app/Context/HeaderContext';

export default function Projects() {

    const { title, setPageTitle } = useContext(HeaderContext);

    setPageTitle('Projetos');

    return (
        <main>
            <h1>Página de projeto</h1>
        </main>
    )
}