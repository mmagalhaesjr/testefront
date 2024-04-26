import { useContext, useEffect, useState } from "react";
import Rodape from "../../Components/Rodape/Rodape";
import { Styled } from "./styled";
import axios from "axios";
import TokenContext from "../../contexts/TokenContext";
import EstruturaTarefas from "../../Components/EstruturaTarefas/EstruturaTarefas";
import UserContext from "../../contexts/UserContext";


export default function MinhasTarefas() {
    const [tarefas, setTarefas] = useState([]);
    const { token } = useContext(TokenContext)
    const { usuario } = useContext(UserContext)
 
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    
    
    useEffect(() => {
       
       
        const URL = `${import.meta.env.VITE_API_BASE_URL}/minhasTarefas/${usuario}`
        const promise = axios.get(URL, config)

        promise.then(res => {
            setTarefas(res.data)
        })

        promise.catch(err => {
            console.log(err.response.data)

            console.log('erro agora')
        })

    }, [])


    return (
        <Styled tarefas={tarefas}>
            <div id="container">
                {tarefas && tarefas.length === 0 ? (
                    <p>
                        Não existe tarefas cadastradas
                    </p>
                ) : (
                    tarefas.map(obj => (
                        <EstruturaTarefas 
                        key={obj.id} 
                        idTarefa={obj.id} 
                        titulo={obj.titulo_tarefa} 
                        descricao={obj.descricao_tarefa} 
                        nome={obj.nome} check={obj.tarefa} />
                        
                    ))
                    
                )}
            </div>
            <Rodape />
        </Styled>
    )
}