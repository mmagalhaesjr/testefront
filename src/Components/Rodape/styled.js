import { styled } from 'styled-components';
import { amarelo } from '../../constant/constant';
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

    display: flex;
    align-items: center;
    justify-content: center;


  .icone{
    font-size: 1.3rem;
    position: relative;
    &:hover{
      color: ${amarelo}
    }
}

h1{
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  font-size:.8rem;
  color: #ffffff;
  &:hover {
    color: ${amarelo}; 
  }
}

`