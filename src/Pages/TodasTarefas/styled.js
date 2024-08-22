import styled from "styled-components";
import { azulEscuro,azulClaro } from '../../constant/constant';




export const StyledTarefas = styled.div`
width: 500px;
height: 100vh;

border-radius: 10px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

background: rgb(16,105,127);
background: radial-gradient(circle, rgba(16,105,127,1) 0%, rgba(13,80,114,1) 50%, rgba(4,12,36,1) 100%);

@media(max-width:500px) {
    width:100%;
}


#container{
    width: 100%;
    height: 90%;
  
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
   
    overflow: auto;

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