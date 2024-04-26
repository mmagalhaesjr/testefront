import { useContext, useEffect, useState } from "react";
import EstruturaTarefas from "../../Components/EstruturaTarefas/EstruturaTarefas";
import { StyledTarefas } from "./styled";
import axios from "axios";
import TokenContext from "../../contexts/TokenContext";
import Rodape from "../../Components/Rodape/Rodape";


export default function TodasTarefas() {
    const { token } = useContext(TokenContext)
    const [tarefas, setTarefas] = useState([]);
    


    useEffect(() => {


        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const URL = `${import.meta.env.VITE_API_BASE_URL}/todasTarefas`;
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
        <StyledTarefas page="TodasTarefas">

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
                        nome={obj.nome}
                        pagina="TodasTarefas"
                        check={obj.tarefa}
                    />
                    ))
                )}
            </div>


            <Rodape />

        </StyledTarefas>
    )
}