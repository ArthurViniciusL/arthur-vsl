import styled from "styled-components";


interface Props {
    // No styled-components, o uso do prefixo $ para propriedades transitórias ajuda a distinguir entre propriedades que são usadas apenas para estilização e aquelas que devem ser passadas para o elemento DOM. 
    $backgroundColor?: string;
    color?: string;
}

const ButtonStyled = styled.button<Props>` 
cursor: pointer;
padding: 10px;
cursor: pointer;
color: ${({ color }) => color};
background-color: ${({ $backgroundColor }) => $backgroundColor || 'transparent'};
border-radius: 15px;
    &:hover {
        box-shadow: 0px 0px 28px 0px rgba(32, 32, 32, 0.089);
        opacity: 0.8;
        transition: opacity 0.5s ease;
    }

`;
export default ButtonStyled;