import styled from "styled-components";
import { azulEscuro,azulClaro } from '../../constant/constant';




export const StyledTarefas = styled.div`
width: 100%;
max-width: 500px;
height: 90vh;
border-radius: 10px;

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

background: rgb(16,105,127);
background: -moz-radial-gradient(circle,  rgba(16,105,127,1) 0%, rgba(13,80,114,1) 50%, rgba(4,12,36,1) 100%);
background: -webkit-radial-gradient(circle,  rgba(16,105,127,1) 0%, rgba(13,80,114,1) 50%, rgba(4,12,36,1) 100%);
background: radial-gradient(circle,  rgba(16,105,127,1) 0%, rgba(13,80,114,1) 50%, rgba(4,12,36,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3a77b4",endColorstr="#000000",GradientType=1);

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