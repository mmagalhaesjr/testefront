import styled from "styled-components";
import { azulEscuro,azulClaro } from '../../constant/constant';


import foto from '../../assets/abelha.png';

const fotoCaminho = `url(${foto})`;

export const StyledTarefas = styled.div`
width: 400px;
height: 100vh;
/* 
background-image: ${fotoCaminho}; */
/* background-size: cover;
background-repeat: no-repeat; */
background-position: -100px -30px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

#container{
    width: 100%;
    height: 90%;
    overflow: auto;
 
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: ${({ tarefas }) => (tarefas && tarefas.length > 3 ? "flex-start" : "center")};
}
#container::-webkit-scrollbar {
  background-color: ${azulEscuro};
  width: 5px;
}
#container::-webkit-scrollbar-thumb {
    background-color: ${azulClaro};
    border-radius: 5px; 
}

p{
    color:#000000;
}
`