import styled from "styled-components";

interface Props {
    bg_color: string;
    f_color: string;
}
const ButtonStyled = styled.button<Props>` 
cursor: pointer;
padding: 10px;
cursor: pointer;
color: ${({f_color}) => f_color};
background-color: ${({ bg_color }) => bg_color};
border-radius: 15px;
    &:hover {
        box-shadow: 0px 0px 28px 0px rgba(32, 32, 32, 0.089);
        opacity: 0.8;
        transition: opacity 0.5s ease;
    }

`;
export default ButtonStyled;