
import { Styled, StyledLink } from "./styled";
import { MdAddBox } from "react-icons/md";
import { FaPlay } from "react-icons/fa";


export default function Rodape() {
    // Verifica se a página atual é "/minhastarefas"
    const navegarTarefas = window.location.pathname === "/minhastarefas";

    return (
        <Styled>
            <StyledLink to={"/criarTarefa"} >
                <h1>NOVA TAREFA <MdAddBox className="icone" /></h1>
            </StyledLink>
            
            <StyledLink to={navegarTarefas ? "/tarefas" : "/minhastarefas"}>
                {navegarTarefas ? (
                    <h1>TODAS TAREFAS <FaPlay className="icone" /></h1>
                ) : (
                    <h1>MINHAS TAREFAS  <FaPlay className="icone" /></h1>
                )}
            </StyledLink>
        </Styled>
    );
}