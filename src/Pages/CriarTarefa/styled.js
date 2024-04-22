import { styled } from 'styled-components';
import { azulClaro, azulEscuro} from '../../constant/constant';


export const Styled = styled.div`
width: 400px;
height: 100vh;
background-color: ${azulEscuro};

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

form{
    width:90%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    color:#ffffff ;
    background-color: transparent;
    
}



label{
    margin-bottom: 5%;
    margin-top: 10%;
}

.inputtitulo{
    width: 100%;
    height: 50px;
    outline: none;
}

.inputdescricao{
    width: 100%;
    height: 150px;
    outline: none;
}


button{
    background-color: #ffffff;
        width: 50%;
        height: 40px;
        font-size: 90%;
        font-weight: 700;
        cursor: pointer;
        border-radius: 10px;
        position:relative;
        top:20px;
        border: none;
    &:hover{
        background-color: ${azulClaro};
        color:#ffffff; 
        transition:0.7s;
    }
}

`