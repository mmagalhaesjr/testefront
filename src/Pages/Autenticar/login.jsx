import { useContext, useState } from "react";
import { StyledAut, StyledLink } from "./styled";
import axios from "axios";
import TokenContext from "../../contexts/TokenContext";
import { useNavigate } from "react-router-dom";
import task from '../../assets/task.png';



export function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const {setToken} = useContext(TokenContext)
    

    const navigate = useNavigate()

    function logarUsuario(event){
        event.preventDefault();

        const body = {
            email: email,
            senha: senha
        }
        const URL = `${import.meta.env.VITE_API_BASE_URL}/login`;
     

        const promise = axios.post(URL, body);

        promise.then(res => {
            setToken(res.data)
            navigate("/tarefas")
        
        })
        promise.catch(err => {
            if (err.response.status === 404) {
                alert("Usuário não encontrado");
            } else {
                console.error("Erro ao tentar fazer login:", err);
            }
        });
    }

    const inputEmail = (event)=>{
        setEmail(event.target.value)
    }
    const inputSenha = (event)=>{
        setSenha(event.target.value)
    }

    return (
        <StyledAut>
             <img src={task} alt="foto" />
            <form onSubmit={logarUsuario}>

                <input type="text" placeholder="Email:" value={email} onChange={inputEmail} required/>

                <input type="password" placeholder="Senha:" value={senha} onChange={inputSenha} required/>

                <button type="submit">Entrar</button>

            </form>
            <StyledLink to={'/cadastro'}>Não tem uma conta? cadastre-se.</StyledLink>
        </StyledAut>
    )
}
