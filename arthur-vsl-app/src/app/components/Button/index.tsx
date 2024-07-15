'use client'

import ButtonStyled from './Style';

interface BtnProps {
    onClick?: () => void;
    children: React.ReactNode;
}

interface BtnStyleProps {
    border?: string;
    bgColor?: string;
    gradient?: string
    fontColor?: string;

    width?: number;
    height?: number;
}

type ButtonProps = BtnProps & BtnStyleProps;


export function Button({ onClick, children, border, bgColor, gradient, fontColor, width, height }: ButtonProps) {
    return (
        <ButtonStyled
            onClick={onClick}
            $backgroundColor={bgColor}
            $gradient={gradient}
            color={fontColor}

            $width={width}
            $height={height}
        >
            {children}
        </ButtonStyled>
    )
}