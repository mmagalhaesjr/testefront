import styled from "styled-components";

export const StyledCarro = styled.section`


   
    

#container{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

div{
    width: 100%;
    background-color: #0fcccc3c;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
#containerForm{
    margin-top: 5%;
}

form{
    margin-top: 10px;
}


`


export const StyledBotao1 = styled.div`
    margin-top: 5%;
    background-color: ${props => props.inclui ? "blue" : "red"};
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: solid 1px black;
    color: #ffffff;
    margin-bottom: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;    
`
