import styled from "styled-components";
import {rosa } from '../../constant/constant'
import { Link } from "react-router-dom";

export const StyledAut = styled.div`

width: 100%;
max-width: 500px;
height: 100vh;
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



img{
    width: 300px;
}

form{
    width: 100%;
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
    border-radius: 10px;
    padding: 10px;
   
}
button{
    width: 90%;
    height: 50px;
    border: none;
    font-size: 1rem;
    border-radius: 10px;
    

    &:hover{
        background-color:${rosa};
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

.gif{
    width: 100px;
}

`

export const StyledLink = styled(Link)`

    text-decoration: none;
    transition: color 0.3s ease;
    color: #ffffff;

  &:hover {
    color: ${rosa}; 
  }
  
`