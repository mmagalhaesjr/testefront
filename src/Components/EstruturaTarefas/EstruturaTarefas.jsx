import { Styled } from "./styled";
import { FaCircleCheck } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import axios from "axios";

import TokenContext from "../../contexts/TokenContext";
import { useContext } from "react";




export default function EstruturaTarefas(prop) {
    const { token } = useContext(TokenContext)
   
   
    console.log(prop)

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    

    function deletarTarefa(id){

        console.log(id)

        const URL = `${import.meta.env.VITE_API_BASE_URL}/deletarTarefas/${id}`
        const promise = axios.delete(URL,config)

        promise.then(res => {
           console.log(res.data)
           alert('Tarefa excluida')

        //    window.location.reload();
          
          
        })

        promise.catch(err => {
            console.log(err.response.data)
        })
           
    }

    return (
        <Styled>
            <div className="caixaInfo">
                <h1>{prop.titulo}</h1>
                <h2>&#40;{prop.nome} &#41;</h2>
            </div>

            <div type="text" className="cxTexto">
                    <p>{prop.descricao}</p>
            </div>

            <div className="cxIcones">
                <FaCircleCheck />
                <FaTrash onClick={ ()=> deletarTarefa(prop.idTarefa) } />
            </div>
        </Styled>
    )
}
