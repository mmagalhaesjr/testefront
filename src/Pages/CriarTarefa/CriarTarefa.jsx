import { useContext, useState } from "react";
import { Styled } from "./styled";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import TokenContext from "../../contexts/TokenContext";

export default function CriarTarefa() {
    const { token } = useContext(TokenContext)

    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] =useState('')
    const navigate = useNavigate()

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };


function criarTarefa(event){
    event.preventDefault();

    const body = {
        titulo: titulo,
        descricao: descricao,
    }
    const URL = `${import.meta.env.VITE_API_BASE_URL}/cadastrarTarefas`;
    const promise = axios.post(URL, body,config);
   

    promise.then(res => {
        alert('Tarefa cadastrada com sucesso!')
        console.log(res.data)
        navigate("/tarefas")
    })

    promise.catch(err => {
        if (err.response.data === "Erro ao cadastrar tarefa") {
            alert("Erro ao cadastrar tarefa")
        }
    });
}
const inputTitulo = (event) => {
    setTitulo(event.target.value)
}
const inputDescricao = (event) => {
    setDescricao(event.target.value)
}

    return (
        <Styled>

            <form onSubmit={criarTarefa}>
                
                <label htmlFor="titulo" >TÍTULO DA TAREFA</label>
                <input type="text" onChange={inputTitulo} required className="inputtitulo" placeholder="maximo 20 caracteres" name="titulo" />

                <label htmlFor="descricao" className="">DESCRIÇÃO DA TAREFA</label>
                <textarea id="msg" onChange={inputDescricao} required  className="inputdescricao"  placeholder="maximo 100 caracteres" name="mensagem" rows="4" cols="50"></textarea>

                <button>ENVIAR</button>

            </form>

        </Styled>
    )
}