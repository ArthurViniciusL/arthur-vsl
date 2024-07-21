import styles from './DropdownMenu.module.css';
import globalCss from '../../styles/BgBlur.module.css';
import { Button } from '../Button';
import { Icon } from '../Icon';

import dashIconOn from "../../assets/icons/Adwaita/dock-top-symbolic.svg";
import dashIconOff from "../../assets/icons/Adwaita/dock-bottom-symbolic.svg";
import home from "../../assets/icons/Adwaita/user-home-symbolic.svg";

import { useState } from 'react';

import Link from 'next/link';

export function DropdownMenu() {

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
        iconSize: 20
    }

    return (
        <div className={styles.DropdownMenuContent}>

            <Button onClick={handleIconClick} >
                <Icon src={dashIcon} size={30} alt='icone de nevegação dos menus' />
            </Button>


            <ul className={`${styles.painel} ${globalCss.Blur}`} style={{display: painelState}} >

                <li>
                    <Link href="/">
                        <Button width={btnAttributes.width} height={btnAttributes.height} fontSize={btnAttributes.fontSize}>
                            <Icon src={home} size={btnAttributes.iconSize} alt='icone de inicio' />
                            {/* <AdwaitaIcons name={'/home'} size={30} alt=''/> */}
                            Início
                        </Button>
                    </Link>
                </li>
                
            </ul>

        </div>
    )
}