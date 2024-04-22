import styled from "styled-components";
import { azulEscuro,azulClaro } from '../../constant/constant';

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
    max-height: 80vh; 
    overflow: auto;

    
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
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
    color:#ffffff;
}
`