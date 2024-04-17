import { StyledAut } from "./styled";

export function Login() {
    return (

        <StyledAut>
            <form action="">

                <label htmlFor="">Email</label>
                <input type="text" />

                <label htmlFor="">Senha</label>
                <input type="text" />

                <button>Entrar</button>

            </form>
        </StyledAut>
    )
}