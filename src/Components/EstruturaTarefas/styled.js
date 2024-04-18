import styled from "styled-components";
import { azulClaro } from "../../constant/constant";


export const Styled = styled.div`
width:400px;
height: 200px;
border-radius: 20px;
background-color: #ffffff;
border: solid 2px ${azulClaro};

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
    justify-content: space-evenly;
}

.cxTexto{
    width: 98%;
    height: fit-content;
    border:  solid 2px ${azulClaro} ;
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
    
    display: flex;
    align-items: center;
    justify-content: space-evenly;

}


`