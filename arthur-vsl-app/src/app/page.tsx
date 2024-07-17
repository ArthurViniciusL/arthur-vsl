'use client';

import './styles/global.css';
import styles from './pages/Home/Home.module.css';
import { Header } from './components/Header';
import ProfilePicture from './components/HomeComponents/ProfilePicture';
import { AboutMe } from './components/HomeComponents/AboutMe';
import { ProjectsPreview } from './components/HomeComponents/ProjectsPreview';
import { ListSocialNetwork } from './components/HomeComponents/ListSocialNetwork';
import { Button } from './components/Button';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function Home() {

  // const { theme, setPageTheme } = useContext(ThemeContext);

  return (
    <main className={styles.Main}>

      <Header title='Início' />

      {/* <button onClick={setPageTheme}>
        {theme}
        </button> */}

      <section className={styles.Section}>
        <div className={styles.ContainerSectionRow}>
          <ProfilePicture />
          <div className={styles.ContainerText}>
            <h2 className={styles.h2}>Sobre mim</h2>
            <AboutMe />
          </div>
        </div>
      </section>

      <section className={styles.Section}>
        <div className={styles.ContainerSectionColumm}>
          <h2>Meus projetos</h2>
          <Link href="/pages/Projects">
            <div>
              <ProjectsPreview />
              <ExternalLink size={15} color='black' />
            </div>
          </Link>
        </div>

      </section>

      {/*  <section className={styles.Section}>
        <h2> Como eu posso te ajuar?</h2>
      </section> */}

      <section className={styles.Section}>
        <div className={styles.ContainerSectionColumm}>
          <h2>Minhas redes</h2>
          <ListSocialNetwork />
        </div>
      </section>
    </main>
  );
}
