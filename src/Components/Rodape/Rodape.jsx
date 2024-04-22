
import { Styled, StyledLink } from "./styled";
import { MdAddBox } from "react-icons/md";
import { FaPlay } from "react-icons/fa";


export default function Rodape() {
    return (
        <Styled>
            <StyledLink to={"/criarTarefa"} >
                <h1 to={"/criarTarefa"}>NOVA TAREFA <MdAddBox className="icone" /></h1>
            </StyledLink>
            
            <StyledLink >
                <h1>MINHAS TAREFAS <FaPlay className="icone" /> </h1>
            </StyledLink>
        </Styled>
    )
}