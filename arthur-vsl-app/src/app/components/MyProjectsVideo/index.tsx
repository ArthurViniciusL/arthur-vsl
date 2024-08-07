'use client'

import style from './MyProjectsVideo.module.css';

import VideoProjectsLight from "@/app/assets/videos/meus_projetos_light.mp4";

export default function MyProjectsVideo() {

    return (
        <video className={style.videoProjects} controls={false} autoPlay loop muted >
            <source src={VideoProjectsLight} type="" />
        </video >
    );
}