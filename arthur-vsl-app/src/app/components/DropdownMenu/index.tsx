import styles from './DropdownMenu.module.css';
import { useContext, useState } from 'react';
import BlurCss from '../../styles/BgBlur.module.css';
import Link from 'next/link';
import { ThemeContext } from '@/app/Context/ThemeContext';
import { Button } from '../Button';
import { Icon } from '../Icon';
import UiGuidelines from '@/app/styles/UiGuidelines';
import AppRoutes from '@/app/app.routes';
import AppAssets from '@/app/modules/app.modules';
import { IconThemeContext } from '@/app/Context/IconThemeContext';

export function DropdownMenu() {

    const { pageColor, fontColor } = useContext(ThemeContext);

    const { homeIcon, projectsIcon, myLinks, cvIcon } = useContext(IconThemeContext)

    const [isDashIcon, setdashIcon] = useState(false);
    const dashIcon = isDashIcon ? AppAssets.DashIconOn : AppAssets.DashIconOff;

    const [painelState, setPainelState] = useState("none");

    function handleIconClick() {
        setdashIcon(!isDashIcon);

        // painel === 'none' ? setPainel('') : setPainel('none');
        if (painelState === 'none') {
            setPainelState('');
        } else {
            setPainelState('none');
        }

    }

    const Btn = {
        width: 150,
        height: 60,
        fontSize: 'large',
        iconSize: 20,
        bgColor: pageColor === '#ffffff' ? UiGuidelines.light['bg-color-03'] : UiGuidelines.dark['bg-color-04'],
        fontColor: pageColor === '#ffffff' ? UiGuidelines.light['font-color-01'] : UiGuidelines.dark['font-color-01']
    }

    return (
        <div className={styles.dropdownMenuContent} >

            <Button onClick={handleIconClick} >
                <Icon src={dashIcon} size={30} alt='icone de nevegação dos menus' />
            </Button>


            <ul className={`${styles.painel} ${BlurCss.Blur}`} style={{ display: painelState, background: pageColor, color: fontColor }}>
                <li>
                    <a href={AppRoutes.home}>
                        <Button
                            width={Btn.width}
                            height={Btn.height}
                            bgColorH={Btn.bgColor}
                            fontColor={Btn.fontColor}
                        >
                            <Icon src={homeIcon} size={Btn.iconSize} alt='icone de inicio' />
                            Início
                        </Button>
                    </a>
                </li>

                <li>
                    <a href={AppRoutes.projects}>
                        <Button
                            width={Btn.width}
                            height={Btn.height}
                            bgColorH={Btn.bgColor}
                            fontColor={Btn.fontColor}
                        >
                            <Icon src={projectsIcon} size={Btn.iconSize} alt='icone de projetos' />
                            Projetos
                        </Button>
                    </a>
                </li>

                <li>
                    <a href='./Arthur_Vinicius_CV.pdf' download="Arthur_Vinicius_CV">
                        <Button
                            width={Btn.width}
                            height={Btn.height}
                            bgColorH={Btn.bgColor}
                            fontColor={Btn.fontColor}
                        >
                            <Icon src={cvIcon} size={Btn.iconSize} alt='icone de projetos' />
                            Currículo
                        </Button>
                    </a>
                </li>

            </ul>

        </div>
    )
}