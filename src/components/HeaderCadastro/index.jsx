import teste from "../../Images/teste.svg"
import { HeaderPaginaCadastro } from "./styled"

export default function Header() {
    return (
        <HeaderPaginaCadastro>
            <img src={teste} alt="teste" />
        </HeaderPaginaCadastro>
    )
}
