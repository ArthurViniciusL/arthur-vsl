import Image from "next/image";
import './ProjectsPreview.css';
import img_preview from '../../assets/images/img_preview_projects.png'

export function ProjectsPreview() {
    return (
        <Image className="imgPreview" src={img_preview} alt="imagem dos projetos"/>
    )
}