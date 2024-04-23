import { styled } from 'styled-components';
import { azulClaro } from '../../constant/constant';
import { Link } from 'react-router-dom';


export const Styled = styled.section`

width: 100%;
height: 10%;
margin-top: 10px;
/* background-color: blue; */
background-color: transparent;
border-top: 2px solid #ffffff;

display:flex ;
align-items: center;
justify-content: center;

`
export const StyledLink = styled(Link)`

    width: 100%;
    text-decoration: none;
    transition: color 0.3s ease;
    margin-left: 5%;

    display: flex;
    align-items: center;
    justify-content: space-between;

   

 

  .icone{
    font-size: 1.5rem;
    position: relative;
    top: 5px;
}

h1{
  color: #ffffff;
  &:hover {
    color: ${azulClaro}; 
  }
}

`