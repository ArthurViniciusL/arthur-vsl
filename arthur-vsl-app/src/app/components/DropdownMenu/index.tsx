import styles from './DropdownMenu.module.css';
import globalCss from '../../styles/BgBlur.module.css';
import { Button } from '../Button';
import { Icon } from '../Icon';

import dashIconOn from "../../assets/icons/Adwaita/dock-top-symbolic.svg";
import dashIconOff from "../../assets/icons/Adwaita/dock-bottom-symbolic.svg";
import home from "../../assets/icons/Adwaita/user-home-symbolic.svg";
import projects from "../../assets/icons/Adwaita/shapes-large-symbolic.svg";

import { useState } from 'react';

import Link from 'next/link';

export function DropdownMenu() {

    const [isDashIcon, setdashIcon] = useState(false);
    const dashIcon = isDashIcon ? dashIconOn : dashIconOff;

    const [painel, setPainel] = useState("none")
    const visibility = {
        display: `${painel}`
    }

    function handleIconClick() {
        setdashIcon(!isDashIcon);
        // painel === 'none' ? setPainel('') : setPainel('none');

        if (painel === 'none') {
            setPainel('');
        } else {
            setPainel('none');
        }
    }


    return (
        <div className={styles.DropdownMenuContent}>

            <Button onClick={handleIconClick} >
                <Icon src={dashIcon} size={30} alt='icone de nevegação dos menus' />
            </Button>


            <ul className={`${styles.painel} ${globalCss.Blur}`} style={visibility} >
                <li>
                    <Link href="/">
                        <Button>
                            <Icon src={home} size={30} alt='icone de inicio' />
                            {/* <AdwaitaIcons name={'/home'} size={30} alt=''/> */}
                            Início
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link href="/pages/Projects">
                        <Button>
                            <Icon src={projects} size={30} alt='icone de inicio' />
                            {/* <AdwaitaIcons name={'/home'} size={30} alt=''/> */}
                            Projetos
                        </Button>

                    </Link>
                </li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>

            </ul>

        </div>
    )
}