import { Styled } from "./styled";
import { FaCircleCheck } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import axios from "axios";

import TokenContext from "../../contexts/TokenContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";




export default function EstruturaTarefas(prop) {
    const { token } = useContext(TokenContext)

    const navigate = useNavigate()
    // console.log(`console q está na EstruturaTarefas`,prop)


    function deletarTarefa(idTarefa) {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const URL = `${import.meta.env.VITE_API_BASE_URL}/deletarTarefas/${idTarefa}`
        const promise = axios.delete(URL, config)


        promise.then(res => {
            console.log(res.data)

            alert('Tarefa excluida')
            navigate('/tarefas')
        })

        promise.catch(err => {
            alert(err.response.data)
        })
    }




    function checkTarefa(idTarefa, check) {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        let URL = ''
        const data = ""

        if (check === 1) {
            URL = `${import.meta.env.VITE_API_BASE_URL}/unCheckTarefas/${idTarefa}`
        } else {
            URL = `${import.meta.env.VITE_API_BASE_URL}/checkTarefas/${idTarefa}`
        }



        const promise = axios.put(URL, data, config)

        promise.then(res => {
            console.log(res.data)
            prop.buscarTarefas()
        })

        promise.catch(err => {
            console.log(err.response.data)
        })
    }

    return (
        <Styled pagina={prop.pagina} check={prop.check}>
            <div className="caixaInfo">
                <h1>{prop.titulo}</h1>
            </div>

            <div type="text" className="cxTexto">
                <p>{prop.descricao}</p>
            </div>

            <div className="cxIcones">
                <h2>&#40;{prop.nome} &#41;</h2>
                <div className="ico">
                    <FaCircleCheck id="iconecheck" onClick={() => checkTarefa(prop.idTarefa, prop.check)} />
                    <FaTrash id="iconelixo" onClick={() => deletarTarefa(prop.idTarefa)} />
                </div>

            </div>
        </Styled>
    )
}
