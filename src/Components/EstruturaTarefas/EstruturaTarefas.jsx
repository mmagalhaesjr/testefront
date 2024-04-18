import { Styled } from "./styled";
import { FaCircleCheck } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";

export default function EstruturaTarefas(prop) {
    return (
        <Styled>
            <div className="caixaInfo">
                <h1>{prop.nome}</h1>
                <p>(proprietario)</p>
            </div>

            <div className="cxTexto">
                <p>descrição da tarefa</p>
            </div>

            <div className="cxIcones">
                <FaCircleCheck />
                <FaTrash />
            </div>
        </Styled>
    )
}