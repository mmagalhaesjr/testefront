import styled from "styled-components";
import { azulEscuro } from '../../constant/constant';

export const Styled = styled.div`
width: 100%;
height: 100vh;
overflow: scroll;
background-color: ${azulEscuro};

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

p{
    color:#ffffff;
}
`