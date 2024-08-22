import { useContext, useEffect, useState } from "react";
import Rodape from "../../Components/Rodape/Rodape";
import { Styled } from "./styled";
import axios from "axios";
import TokenContext from "../../contexts/TokenContext";
import EstruturaTarefas from "../../Components/EstruturaTarefas/EstruturaTarefas";
import UserContext from "../../contexts/UserContext";


export default function MinhasTarefas() {
    const [tarefas, setTarefas] = useState([]);
    const [loading, setLoading] = useState(false); // Estado para controlar o carregamento
    const { token } = useContext(TokenContext);
    const { usuario } = useContext(UserContext);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    function buscarTarefas() {
        setLoading(true); // Define o estado de carregamento como true

        const URL = `${import.meta.env.VITE_API_BASE_URL}/minhasTarefas/${usuario}`;
        const promise = axios.get(URL, config);

        promise.then(res => {
            setTarefas(res.data);
        })
            .catch(err => {
                console.log(err.response.data);
            })
            .finally(() => {
                setLoading(false); // Define o estado de carregamento como false, independentemente do resultado da promise
            });
    }

    useEffect(() => {
        buscarTarefas();
    }, []);

    return (
        <Styled tarefas={tarefas}>

          

            <div id="container">
                {loading ? ( // Se loading for true, exibe "Carregando..."
                    <p>Carregando...</p>
                ) : (
                    tarefas && tarefas.length === 0 ? (

                        <p>Não existe tarefas cadastradas</p>
                    ) : (
                        tarefas.map(obj => (

                            <EstruturaTarefas
                                key={obj.id}
                                idTarefa={obj.id}
                                titulo={obj.titulo_tarefa}
                                descricao={obj.descricao_tarefa}
                                nome={obj.nome}
                                check={obj.concluida}
                                buscarTarefas={buscarTarefas}
                            />
                        ))
                    )
                )}
            </div>
            <Rodape />
        </Styled>
    )
}
