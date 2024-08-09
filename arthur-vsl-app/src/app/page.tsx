'use client';
import style from '@/app/pages//Home/Home.module.css'
import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { ThemeContext } from './Context/ThemeContext';
import { HeaderContext } from './Context/HeaderContext';
import ProfilePicture from '@/app/components/ProfilePicture';
import { AboutMe } from '@/app/components/AboutMe';
import { ContactLinks } from './components/ContactLinks';

import { Button } from './components/Button';
import UiGuidelines from './styles/UiGuidelines';
import { Icon } from './components/Icon';
import { useRouter } from 'next/navigation';
import AppRoutes from './app.routes';
import { IconThemeContext } from './Context/IconThemeContext';
import MyProjectsVideo from './components/MyProjectsVideo';

export default function Home() {

  const router = useRouter();

  const { setPageTitle } = useContext(HeaderContext);
  const { pageColor, fontColor, darkTheme } = useContext(ThemeContext);
  const { projectsIcon } = useContext(IconThemeContext)

  const BtnBg = darkTheme ? UiGuidelines.dark['bg-color-04'] : UiGuidelines.light['bg-color-03'];

  useEffect(() => {
    setPageTitle('Início');
  }, []);

  return (
    <main style={{ background: pageColor, color: fontColor }} >
      <section className={style.section}>
        {/* Componente dedicado a simular o espaçamento do Hedader que nao e respeitado devido a formatacao da section */}
        {/* <span className={style.paddingBox}></span> */}

        <div className={style.sectionContentRow}>
          <ProfilePicture />
          <div className={style.textBox}>
            <h2>Sobre mim</h2>
            <AboutMe />
          </div>
        </div>
      </section>

      <section className={style.section} >

        <div className={style.sectionContent}>

          <div className={style.projects}>

            <MyProjectsVideo />

            <Button
              onClick={() => router.push(AppRoutes.projects)}
              bgColorH={BtnBg} width={200}
              height={80}
              fontWeight='bold'
              fontColor={fontColor}
            >
              <Icon src={projectsIcon} size={40} alt='' />
              Clique aqui!
            </Button>

          </div>

        </div>

      </section>

      <section id="secContact" className={style.section}>

        <div className={style.sectionContent}>
          <h2>Minhas redes</h2>
          <ContactLinks />
        </div>
      </section>

    </main>

  );
}