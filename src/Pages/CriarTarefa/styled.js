import { styled } from 'styled-components';
import { rosa} from '../../constant/constant';


export const Styled = styled.div`
width: 500px;
height: 100vh;

border-radius: 10px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

background: rgb(16,105,127);
background: radial-gradient(circle, rgba(16,105,127,1) 0%, rgba(15, 85, 119, 1) 50%, rgba(4,12,36,1) 100%);

@media(max-width:500px) {
    width:100%;
}

img{
    width: 200px;
    position: absolute;
    top: 0;
}

form{
    width:90%;
    height: 90vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    color:#000000 ;
    background-color: transparent; 
}



label{
    margin-bottom: 5%;
    margin-top: 10%;
    color: #ffffff;
}

.inputtitulo{
    width: 100%;
    height: 50px;
    outline: none;
    border-radius: 10px;
    border: none;
}

.inputdescricao{
    width: 100%;
    height: 150px;
    outline: none;
    border-radius: 10px;
    border: none;

    display: flex;
    flex-wrap: wrap;
    align-items:start;
    justify-content:start;
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
        background-color: ${rosa};
        color:#ffffff; 
        transition:0.7s;
    }
}

`