'use client'

import ButtonStyled from './Style';

interface BtnProps {
    onClick?: () => void;
    children?: React.ReactNode;
}

interface BtnStyleProps {
    border?: string;
    bgColor?: string;
    color?: string;
}

type ButtonProps = BtnProps & BtnStyleProps;


export function Button({ onClick, children, border, bgColor, color}: ButtonProps) {
    return (
        <ButtonStyled
            bg_color={bgColor}
            f_color={color}
            onClick={onClick}
        >
            {children}
        </ButtonStyled>
    )
}