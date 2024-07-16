import styled from "styled-components";


interface Props {
    // No styled-components, o uso do prefixo $ para propriedades transitórias ajuda a distinguir entre propriedades que são usadas apenas para estilização e aquelas que devem ser passadas para o elemento DOM. 
    $background_color?: string;
    $gradient?: string;
    color?: string;
    $font_size?: string;
    $font_weight?: string;
    $width?: number;
    $height?: number
}

const ButtonStyled = styled.button<Props>`
gap: 10px;
cursor: pointer;
padding: 10px;
display: flex;

align-items: center;
justify-content: center;

font-size: ${({ $font_size }) => $font_size};
font-weight: ${({ $font_weight }) => $font_weight};

color: ${({ color }) => color};
width: ${({ $width }) => $width}px;
height: ${({ $height }) => $height}px;
background: linear-gradient(${({ $gradient }) => $gradient || 'transparent'});
background-color: ${({ $background_color }) => $background_color || 'transparent'};
border-radius: 15px;
    &:hover {
        opacity: 0.6;
        transition: opacity 0.5s ease;
        text-decoration: underline;
    }

`;
export default ButtonStyled;