import styled from "styled-components";


interface Props {
    /*
    * No styled-components, o uso do prefixo $ para propriedades transitórias ajuda a distinguir
    * entre propriedades que são usadas apenas para estilização e aquelas que devem ser passadas
    * para o elemento DOM.
    */

    $fontWeight?: string;
    $width?: number;
    $height?: number;
    $fontColor?: string;
    $bgColor?: string;
    $bgGradient?: string;
    $fontColorHover?: string;
    $bgColorHover?: string;
}

const ButtonStyled = styled.button<Props>`
gap: 10px;
padding: 10px;
cursor: pointer;
border-radius: 15px;

display: flex;
align-items: center;
justify-content: center;

font-size: medium;
font-weight: ${({ $fontWeight }) => $fontWeight || "normal"};

width: ${({ $width }) => $width}px;
height: ${({ $height }) => $height}px;

color: ${({ $fontColor }) => $fontColor};
background-color: ${({ $bgColor }) => $bgColor || 'transparent'};
background: linear-gradient(${({ $bgGradient }) => $bgGradient});
&:hover {
    text-decoration: underline;
    color: ${({ $fontColorHover }) => $fontColorHover};
    background: ${({ $bgColorHover }) => $bgColorHover};
    background-color: ${({ $bgColorHover }) => $bgColorHover};
}

`;
export default ButtonStyled;