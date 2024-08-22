import { useContext, useState } from "react";
import { StyledAut, StyledLink } from "./styled";
import axios from "axios";
import TokenContext from "../../contexts/TokenContext";
import { useNavigate } from "react-router-dom";
import m from '../../assets/m.png';
import UserContext from "../../contexts/UserContext";

export function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false); 
    const { setToken } = useContext(TokenContext);
    const { setUsuario } = useContext(UserContext);
    const { setNome } = useContext(UserContext);
    const navigate = useNavigate();

    function logarUsuario(event) {
        event.preventDefault();
        setLoading(true); 

        const body = {
            email: email,
            senha: senha
        }
        const URL = `${import.meta.env.VITE_API_BASE_URL}/login`;

        const promise = axios.post(URL, body);

        promise.then(res => {
            setToken(res.data.token);
            setUsuario(res.data.idUsuario);
            setNome(res.data.nome);
            navigate("/tarefas");
           
        })
        .catch(err => {
            if (err.message === "Network Error") {
                alert("Ocorreu um erro interno. Por favor, tente novamente mais tarde.");
            } else {
                alert(err.response.data);
            }
        })
        .finally(() => {
            setLoading(false); // Define o estado de carregamento como false, independentemente do resultado da promise
        });
    }

    const inputEmail = (event) => {
        setEmail(event.target.value);
    }
    const inputSenha = (event) => {
        setSenha(event.target.value);
    }

    return (
        <StyledAut>
            <img src={m} alt="foto" />
            <form onSubmit={logarUsuario}>
                <input type="text" placeholder="Email:" value={email} onChange={inputEmail} required />
                <input type="password" placeholder="Senha:" value={senha} onChange={inputSenha} required />
                <button type="submit">{loading ? 'CARREGANDO...' : 'Entrar'}</button> {/* Exibe 'Carregando...' enquanto loading for true */}
            </form>
            <StyledLink to={'/cadastro'}>Não tem uma conta? Cadastre-se.</StyledLink>
        </StyledAut>
    )
}
