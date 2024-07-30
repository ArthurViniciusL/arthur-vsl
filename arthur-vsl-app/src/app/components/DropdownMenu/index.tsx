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

export function DropdownMenu() {

    const { pageColor, fontColor } = useContext(ThemeContext);

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


            <ul className={`${styles.painel} ${BlurCss.Blur}`} style={{ display: painelState, background: pageColor, color: fontColor }}>
                <li>
                    <Link href={AppRoutes.home}>
                        <Button
                            width={Btn.width}
                            height={Btn.height}
                            bgColorH={Btn.bgColor}
                            fontColor={Btn.fontColor}
                        >
                            <Icon src={AppAssets.HomeIcon} size={Btn.iconSize} alt='icone de inicio' />
                            Início
                        </Button>
                    </Link>
                </li>

                <li>
                    <Link href={AppRoutes.projects}>
                        <Button
                            width={Btn.width}
                            height={Btn.height}
                            bgColorH={Btn.bgColor}
                            fontColor={Btn.fontColor}
                        >
                            <Icon src={AppAssets.ProjectsIcon} size={Btn.iconSize} alt='icone de projetos' />
                            Projetos
                        </Button>
                    </Link>
                </li>

                <li>
                    <Link href='./Arthur_Vinicius_CV.pdf' download="Arthur_Vinicius_CV">
                        <Button
                            width={Btn.width}
                            height={Btn.height}
                            bgColorH={Btn.bgColor}
                            fontColor={Btn.fontColor}
                        >
                            <Icon src={AppAssets.CvIcon} size={Btn.iconSize} alt='icone de projetos' />
                            Currículo
                        </Button>
                    </Link>
                </li>

            </ul>

        </div>
    )
}