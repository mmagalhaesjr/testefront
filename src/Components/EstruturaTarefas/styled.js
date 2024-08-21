import styled from "styled-components";
import { azulEscuro, verde } from "../../constant/constant";


export const Styled = styled.div`
width: 95%;
min-height: 200px;
border-radius: 10px;
border: solid 2px #ffffff;

background-color: ${prop => prop.check == true ? 'rgba(31, 174, 15, 0.39)' : 'rgba(255, 255, 255, 0.5)'};
   

backdrop-filter: blur(10px);
box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); 
margin-top: 10px;
position: relative;
overflow: hidden;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

gap: 5px;

.cxTitulo{
    width: 98%;
    height: 20%;
    border-radius: 10px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
}


.cxDescricao {
    width: 100%;
    height: 200px;
    background-color: #ffffff6d;
    border-radius: 10px;
  
    display: flex;
    align-items: flex-start;
    justify-content: left;
    flex-wrap: wrap;
    word-wrap: break-word; 
}




.cxIcones{
    width: 100%;
    height:fit-content;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-right: 10px;
    gap: 10px;

}
.ico{
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
}

#iconecheck{
color: #000000;
display: ${({ pagina }) => (pagina === 'TodasTarefas' ? 'none' : 'flex')};
&:hover{
      color: ${verde}
    }
}
#iconelixo{
    color: #000000;
    display: ${({ pagina }) => (pagina === 'TodasTarefas' ? 'none' : 'flex')};
&:hover{
      color: red;
    }
}



h1{
    width:60%;
    height: fit-content;
    font-size: 1.3rem;
    margin-left: 10px;
    margin-top: 5px;   
}
h2{
    width: 40%;
    color: ${({ pagina }) => (pagina === 'TodasTarefas' ? '#ffffff' : azulEscuro)};
    margin-bottom: 5px;
}
p{
    width: 100%;
    height: fit-content;
    color: #000000;
    margin-top: 3%;
    margin-left: 2%;
   
}


`