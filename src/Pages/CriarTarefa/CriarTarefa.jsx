import { useContext, useState } from "react";
import { Styled } from "./styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TokenContext from "../../contexts/TokenContext";
import Rodape from "../../Components/Rodape/Rodape";

// import m from '../../assets/m.png'


export default function CriarTarefa() {
    const { token } = useContext(TokenContext);

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [loading, setLoading] = useState(false); // Estado para controlar o carregamento
    const navigate = useNavigate();

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    function criarTarefa(event) {
        event.preventDefault();
        setLoading(true); // Define o estado de carregamento como true

        const body = {
            titulo: titulo,
            descricao: descricao,
        };
        const URL = `${import.meta.env.VITE_API_BASE_URL}/cadastrarTarefas`;
        const promise = axios.post(URL, body, config);

        promise.then(res => {
            alert('Tarefa cadastrada com sucesso!');
            console.log(res.data);
            navigate("/tarefas");
        })
            .catch(err => {
                if (err.response.data === "Erro ao cadastrar tarefa") {
                    alert("Erro ao cadastrar tarefa");
                }
            })
            .finally(() => {
                setLoading(false); // Define o estado de carregamento como false, independentemente do resultado da promise
            });
    }

    const inputTitulo = (event) => {
        setTitulo(event.target.value);
    }
    const inputDescricao = (event) => {
        setDescricao(event.target.value);
    }

    return (
        <Styled>

            {/* <img src={m} alt="logo" /> */}

            <form onSubmit={criarTarefa}>

                <label htmlFor="titulo">TÍTULO DA TAREFA</label>
                <input type="text" onChange={inputTitulo} required className="inputtitulo" placeholder="maximo 20 caracteres" name="titulo" maxLength={20} />

                <label htmlFor="descricao" className="">DESCRIÇÃO DA TAREFA</label>
                <textarea id="msg" onChange={inputDescricao} required className="inputdescricao" placeholder="maximo 100 caracteres" name="mensagem" ></textarea>

                <button type="submit">{loading ? 'Enviando...' : 'ENVIAR'}</button> {/* Exibe 'Enviando...' enquanto loading for true */}
            </form>

            <Rodape />
        </Styled>
    )
}
