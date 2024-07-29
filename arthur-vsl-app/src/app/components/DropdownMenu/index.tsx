import styles from './DropdownMenu.module.css';
import globalCss from '../../styles/BgBlur.module.css';
import { Button } from '../Button';
import { Icon } from '../Icon';

import dashIconOn from "../../assets/icons/Adwaita/dock-top-symbolic.svg";
import dashIconOff from "../../assets/icons/Adwaita/dock-bottom-symbolic.svg";

import { useContext, useState } from 'react';

import Link from 'next/link';
import { CV_Icon, Home_Icon, Projects_Icon } from '../AdwaitaIcon/AdwaitaIcons';
import UiGuidelines from '@/app/styles/UiGuidelines';
import { ThemeContext } from '@/app/Context/ThemeContext';
import AppRoutes from '@/app/app.routes';

export function DropdownMenu() {

    const { pageColor, fontColor } = useContext(ThemeContext);

    const [isDashIcon, setdashIcon] = useState(false);
    const dashIcon = isDashIcon ? dashIconOn : dashIconOff;
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

    const btnAttributes = {
        width: 200,
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


            <ul className={`${styles.painel} ${globalCss.Blur}`} style={{ display: painelState, background: pageColor, color: fontColor }}>
                <li>
                    <Link href={AppRoutes.home}>
                        <Button
                            width={btnAttributes.width}
                            height={btnAttributes.height}
                            bgColor={btnAttributes.bgColor}
                            bgColorH=''
                            fontColor={btnAttributes.fontColor}
                        >
                            <Icon src={Home_Icon} size={btnAttributes.iconSize} alt='icone de inicio' />
                            Início
                        </Button>
                    </Link>
                </li>

                <li>
                    <Link href={AppRoutes.projects}>
                        <Button
                            width={btnAttributes.width}
                            height={btnAttributes.height}
                            bgColor={btnAttributes.bgColor}
                            bgColorH=''
                            fontColor={btnAttributes.fontColor}
                        >
                            <Icon src={Projects_Icon} size={btnAttributes.iconSize} alt='icone de projetos' />
                            Projetos
                        </Button>
                    </Link>
                </li>

                <li>
                    <Link href='./Arthur_Vinicius_CV.pdf' download="Arthur_Vinicius_CV">
                        <Button
                            width={btnAttributes.width}
                            height={btnAttributes.height}
                            bgColor={btnAttributes.bgColor}
                            bgColorH=''
                            fontColor={btnAttributes.fontColor}
                        >
                            <Icon src={CV_Icon} size={btnAttributes.iconSize} alt='icone de projetos' />
                            Currículo
                        </Button>
                    </Link>
                </li>

            </ul>

        </div>
    )
}