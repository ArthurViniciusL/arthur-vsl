import styles from './DropdownMenu.module.css';
import globalCss from '../../styles/BgBlur.module.css';
import { Button } from '../Button';
import { Icon } from '../Icon';
import dashIconOn from "../../assets/icons/dock-top-symbolic.svg";
import dashIconOff from "../../assets/icons/dock-bottom-symbolic.svg";
import { useState } from 'react';

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
                <li>Iteeeeeeeeeeeeeeeeem 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
                <li>Item 5</li>
                <li>Item 5</li>
                <li>Item 5</li>
                <li>Item 5</li>
            </ul>

        </div>
    )
}