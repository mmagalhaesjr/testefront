import { Styled } from "./styled";
import { FaCircleCheck } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";

export default function EstruturaTarefas(prop) {
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
                <FaTrash />
            </div>
        </Styled>
    )
}