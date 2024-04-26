import { useContext, useState } from "react";
import { StyledAut, StyledLink } from "./styled";
import axios from "axios";
import TokenContext from "../../contexts/TokenContext";
import { useNavigate } from "react-router-dom";
import task from '../../assets/task.png';
import UserContext from "../../contexts/UserContext";



export function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const { setToken } = useContext(TokenContext)
    const { setUsuario } = useContext(UserContext)
    const { setNome } = useContext(UserContext)


    const navigate = useNavigate()

    function logarUsuario(event) {
        event.preventDefault();

        const body = {
            email: email,
            senha: senha
        }
        const URL = `${import.meta.env.VITE_API_BASE_URL}/login`;


        const promise = axios.post(URL, body);

        promise.then(res => {
            setToken(res.data.token)
            setUsuario(res.data.idUsuario)
            setNome(res.data.nome)
            navigate("/tarefas")



        })
       

        promise.catch(err => {
            if (err.message == "Network Error" ) {
               alert("Ocorreu um erro interno. Por favor, tente novamente mais tarde." )
            } else {
                alert(err.response.data);
           }
        })
    }
  

        



    const inputEmail = (event) => {
        setEmail(event.target.value)
    }
    const inputSenha = (event) => {
        setSenha(event.target.value)
    }

    return (
        <StyledAut>
            <img src={task} alt="foto" />
            <form onSubmit={logarUsuario}>

                <input type="text" placeholder="Email:" value={email} onChange={inputEmail} required />

                <input type="password" placeholder="Senha:" value={senha} onChange={inputSenha} required />

                <button type="submit">Entrar</button>

            </form>
            <StyledLink to={'/cadastro'}>Não tem uma conta? cadastre-se.</StyledLink>
        </StyledAut>
    )
}
