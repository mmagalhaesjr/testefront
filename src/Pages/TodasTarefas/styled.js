import styled from "styled-components";
import { azulEscuro } from '../../constant/constant';

export const StyledTarefas = styled.div`
width: 400px;
height: 100vh;
background-color: ${azulEscuro};

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

#container{
    width: 100%;
    height: 600px;
    overflow-x: none;
    overflow-y: scroll;
    border: solid 2px red;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


p{
    color:#ffffff;
}
`