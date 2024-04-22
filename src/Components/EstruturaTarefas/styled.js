import styled from "styled-components";
import { azulClaro } from "../../constant/constant";


export const Styled = styled.div`
width: 90%;
min-height: 150px;
border-radius: 10px;
border: solid 2px #ffffff;
background-color: rgba(255, 255, 255, 0.5); /* Cor de fundo com transparência */
backdrop-filter: blur(10px);
box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); 
margin-top: 10px;
position: relative;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

.caixaInfo{
    width: 98%;
    height: 30px;
    border-radius: 10px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
}


.cxTexto{
    width: 100%;
    height: 100px;
    background-color: #ffffff6d;
    border-radius: 10px;
    margin-bottom: 20px;
    
    display: flex;
    align-items: flex-start;
    justify-content: left;
}



.cxIcones{
    height:fit-content;
    /* border:  solid 2px ${azulClaro} ; */
    border-radius: 20px;

    position: absolute;
    top: 132px;
    left: 300px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
h1{
    width:150px;
    height: fit-content;
    font-size: 1.3rem;
    margin-left: 10px;
    margin-top: 5px;   
}
h2{
    color: #424242;
}
p{
    color: #000000;
    margin-top: 3%;
    margin-left: 2%;
}


`