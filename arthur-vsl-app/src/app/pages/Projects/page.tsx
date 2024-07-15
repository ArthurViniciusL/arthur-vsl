import { Header } from '@/app/components/Header';
import '../../styles/global.css';

export default function Projects() {

    const css = {
        border: 'solid red',
        "height": "150px"
    }
    return (
        <main>
            <Header title="Projetos" />
            <h1>Página de projeto</h1>
        </main>
    )
}