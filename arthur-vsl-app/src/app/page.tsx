'use client';
import style from '@/app/pages//Home/Home.module.css'
import { useContext, useEffect, useLayoutEffect } from 'react';
import { ThemeContext } from './Context/ThemeContext';
import { HeaderContext } from './Context/HeaderContext';
import ProfilePicture from '@/app/components/ProfilePicture';
import { AboutMe } from '@/app/components/AboutMe';
import { ContactLinks } from './components/ContactLinks';

export default function Home() {

  const { pageColor, fontColor } = useContext(ThemeContext);

  const { setPageTitle } = useContext(HeaderContext);

  useEffect(() => {
    setPageTitle('Início');
  }, []);

  return (
    <main style={{ background: pageColor, color: fontColor }} >
      <section className={style.section}>
        <div className={style.sectionContentRow}>
          <ProfilePicture />

          {/* <video width="300" height="600" controls preload='none'>
            <source src="./assets/teste.mp4" type="video/mp4" />
          </video> */}

          <div className={style.textBox}>
            <h2 className=''>Sobre mim</h2>
            <AboutMe />
          </div>
        </div>
      </section>

      <section className={style.section}>
        <div className={style.sectionContent}>
          <h2>Meus projetos</h2>
        </div>

      </section>

      <section className={style.section}>
        <div className={style.sectionContent}>
          <h2>Minhas redes</h2>
          <ContactLinks />
        </div>
      </section>

    </main>

  );
}