import styled from "styled-components";


interface Props {
    // No styled-components, o uso do prefixo $ para propriedades transitórias ajuda a distinguir entre propriedades que são usadas apenas para estilização e aquelas que devem ser passadas para o elemento DOM. 
    $backgroundColor?: string;
    $gradient?: string;
    color?: string;

    $width?: number;
    $height?: number
}

const ButtonStyled = styled.button<Props>` 
cursor: pointer;
padding: 10px;
cursor: pointer;
width: ${({ $width }) => $width}px;
height: ${({$height}) => $height}px;
color: ${({ color }) => color};
background: linear-gradient(${({ $gradient }) => $gradient || 'transparent'});
background-color: ${({ $backgroundColor }) => $backgroundColor || 'transparent'};
border-radius: 15px;
    &:hover {
        
        opacity: 0.6;
        transition: opacity 0.5s ease;
    }

`;
export default ButtonStyled;