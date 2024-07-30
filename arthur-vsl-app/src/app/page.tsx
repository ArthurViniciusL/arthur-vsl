'use client';
import style from '@/app/pages//Home/Home.module.css'
import { useContext, useEffect, useLayoutEffect } from 'react';
import { ThemeContext } from './Context/ThemeContext';
import { HeaderContext } from './Context/HeaderContext';
import ProfilePicture from '@/app/components/ProfilePicture';
import { AboutMe } from '@/app/components/AboutMe';
import { ContactLinks } from './components/ContactLinks';

import VideoProjectsLight from "@/app/assets/videos/meus_projetos_light.mp4";
import VideoProjectsDark from "@/app/assets/videos/meus_projetos_dark.mp4";

import { Button } from './components/Button';
import UiGuidelines from './styles/UiGuidelines';
import { Icon } from './components/Icon';
import AppAssets from './modules/app.modules';

export default function Home() {

  const { pageColor, fontColor } = useContext(ThemeContext);

  const { setPageTitle } = useContext(HeaderContext);

  const BtnBg = pageColor === "#ffffff" ? UiGuidelines.light['bg-color-03'] : UiGuidelines.dark['bg-color-04'];

  const myProjects = pageColor === "#ffffff" ? VideoProjectsLight : VideoProjectsDark;

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

      <section className={style.section} >
        <div className={style.sectionContent}>

          <div className={style.projects}>

            <video className={style.videoProjects} controls={false} autoPlay loop muted>
              <source src={myProjects} type="" />
            </video>

            <Button bgColorH={BtnBg} width={400} height={90} fontWeight='bold' fontColor={fontColor}>
              <Icon src={AppAssets.ProjectsIcon} size={40} alt=''/>
              Clique aqui!
            </Button>

          </div>

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