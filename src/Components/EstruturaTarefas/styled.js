import styled from "styled-components";
import { azulClaro } from "../../constant/constant";


export const Styled = styled.div`
width:400px;
height: 200px;
border-radius: 10px;
background-color: rgba(255, 255, 255, 0.5); /* Cor de fundo com transparência */
backdrop-filter: blur(10px);
box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); 
margin-top: 20px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

.caixaInfo{
    width: 98%;
    height: fit-content;
    /* border:  solid 2px ${azulClaro} ; */
    border-radius: 20px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
}


.cxTexto{
    width: 98%;
    height: 100px;
    border:  solid 2px ${azulClaro} ;
    background-color: #ffffff6d;
    border-radius: 20px;
    
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.cxIcones{
    width: 98%;
    height: fit-content;
    /* border:  solid 2px ${azulClaro} ; */
    border-radius: 20px;
    margin-bottom: 5%;
    
    display: flex;
    align-items: center;
    justify-content: space-around;
}
h1{
    font-size: 1.5rem;
    margin-left: 10px;
    margin-top: 10px;
}
h2{
    color: #424242;
}
p{
    color: #000000;
}


`