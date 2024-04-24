import styled from "styled-components";

export const Styled = styled.section`
width: 100%;
height: 100%;

main{
    width: 500px;
    height: 500px;
    background-color: red;

    overflow: auto;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
   
}

div{
    min-width: 100px;
    min-height: 100px;
    border: solid 2px #000000;
    background-color: #ffffff;
}



`