'use client'

import ButtonStyled from './Style';

interface BtnProps {
    onClick?: () => void;
    children: React.ReactNode;
}

interface BtnStyleProps {
    fontWeight?: string,
    width?: number,
    height?: number,
    fontColor?: string,
    bgColor?: string,
    bgGradient?: string
    fontColorH?: string,
    bgColorH?: string,
}

type ButtonProps = BtnProps & BtnStyleProps;


export function Button({ onClick, children, fontWeight, width, height, fontColor, bgColor, bgGradient, fontColorH, bgColorH }: ButtonProps) {
    return (
        <ButtonStyled
            onClick={onClick}
            $fontWeight={fontWeight}
            $width={width}
            $height={height}
            $fontColor={fontColor}
            $bgColor={bgColor}
            $bgGradient={bgGradient}
            $fontColorHover={fontColorH}
            $bgColorHover={bgColorH}
        >
            {children}
        </ButtonStyled>
    )
}