'use client'

import ButtonStyled from './Style';

interface BtnProps {
    onClick?: () => void;
    children: React.ReactNode;
}

interface BtnStyleProps {
    border?: string;
    bgColor?: string;
    fontColor?: string;
}

type ButtonProps = BtnProps & BtnStyleProps;


export function Button({ onClick, children, border, bgColor, fontColor }: ButtonProps) {
    return (
        <ButtonStyled
            onClick={onClick}
            $backgroundColor={bgColor}
            color={fontColor}
        >
            {children}
        </ButtonStyled>
    )
}