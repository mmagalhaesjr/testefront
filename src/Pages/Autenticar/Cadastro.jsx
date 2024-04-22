import { useState } from "react";
import { StyledAut, StyledLink } from "./styled";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import task from '../../assets/task.png'


export function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate()

    const cadastrarUsuario = (event) => {
        event.preventDefault();

        const body = {
            nome: nome,
            email: email,
            senha: senha
        }

        const URL = `${import.meta.env.VITE_API_BASE_URL}/singup`;

        const promise = axios.post(URL, body);
        
       

        promise.then(res => {
            alert('Usuário cadastrado com sucesso!')
            console.log(res.data)
            navigate("/")
        })

        promise.catch(err => {
            if (err.response.data === "Usuário já cadastrado!") {
                alert("Usuário já cadastrado!")
            }
        });
    }

    const inputNome = (event) => {
        setNome(event.target.value)
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
            <form onSubmit={cadastrarUsuario}>

                <input type="text" placeholder="Nome:" value={nome} onChange={inputNome} required />

                <input type="email" placeholder="Email:" value={email} onChange={inputEmail} required />

                <input type="password" placeholder="Senha:" value={senha} onChange={inputSenha} required />

                <button type="submit">Cadastrar</button>

            </form>

            <StyledLink to={'/'}>Já tem uma conta? Faça login</StyledLink>
        </StyledAut>
    )
}
