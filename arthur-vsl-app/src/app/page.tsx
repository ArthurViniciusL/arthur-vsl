'use client';

import './styles/global.css';
import styles from '@/app/pages/Home/Home.module.css'

import { useContext } from 'react';
import { ThemeContext } from './Context/ThemeContext';
import { HeaderContext } from './Context/HeaderContext';
import ProfilePicture from './components/ProfilePicture';
import { AboutMe } from './components/AboutMe';
import { ListSocialNetwork } from './components/ListSocialNetwork';


export default function Home() {

  const { pageColor, fontColor } = useContext(ThemeContext);

  const { title, setPageTitle } = useContext(HeaderContext);

  setPageTitle('Início');

  return (
    <main style={{ background: pageColor, color: fontColor }} >      
      <section className={styles.Section}>
        {/* <button onClick={setThemes}>
          clik
        </button> */}
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
          {/* <Link href={AppRoutes.projects}>
            <div>
            <ProjectsPreview />
            <ExternalLink size={15} color='black' />
            </div>
            </Link> */}
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
