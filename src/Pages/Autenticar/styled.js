import styled from "styled-components";
import {amarelo } from '../../constant/constant'
import { Link } from "react-router-dom";

export const StyledAut = styled.div`

width: 400px;
height: 100vh;

border-radius: 10px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

form{
    width: 90%;
    height: 50%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
input{
    width: 90%;
    height: 50px;
    outline: none;
    border: none;  
    color: #000000;
    background-color:#ffffff;
   
}
button{
    width: 90%;
    height: 50px;
    border: none;
    font-size: 1rem;
    

    &:hover{
        background-color:${amarelo};
        color: #ffffff;
    }
}
h1{
    width: 100px;
    height: 50px;
    border:  1px solid #ffffff; ;
    margin-bottom: 10%;
    color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;
}
p{
    margin-top: 5%;
    color: #ffffff;

    &:hover{
        color: ${amarelo};
    }
}


`

export const StyledLink = styled(Link)`

    text-decoration: none;
    transition: color 0.3s ease;
    color: #ffffff;

  &:hover {
    color: ${amarelo}; 
  }
  
`