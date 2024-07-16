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
    fontSize?: string;
    fontWeight?: string;

    width?: number;
    height?: number;
}

type ButtonProps = BtnProps & BtnStyleProps;


export function Button({ onClick, children, border, bgColor, gradient, fontColor, fontSize, fontWeight , width, height }: ButtonProps) {
    return (
        <ButtonStyled
            onClick={onClick}
            $background_color={bgColor}
            $gradient={gradient}
            color={fontColor}
            $font_size={fontSize}
            $font_weight={fontWeight}
            $width={width}
            $height={height}
        >
            {children}
        </ButtonStyled>
    )
}