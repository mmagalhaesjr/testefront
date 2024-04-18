import { useState } from "react";
import { StyledAut, StyledLink } from "./styled";


export function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

const inputEmail = (event)=>{
    setEmail(event.target.value)
}
const inputSenha = (event)=>{
    setSenha(event.target.value)
}
function logarUsuario(event){
    event.preventDefault();
}


    return (

        <StyledAut>
            <h1>LOGO</h1>
            <form onChange={logarUsuario}>

                <input type="text" placeholder="Email:" value={email} onChange={inputEmail} required/>

                <input type="text" placeholder="Senha:" value={senha} onChange={inputSenha} required/>

                <button type="submit">Entrar</button>

            </form>
            <StyledLink to={'/cadastro'}>Não tem uma conta? cadastre-se.</StyledLink>
        </StyledAut>
    )
}