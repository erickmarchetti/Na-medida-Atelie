import {
    FormSection,
    PedidosBG,
    PedidosContainer,
    PedidosHeader,
    PedidosMain
} from "./style"
import logo from "../../Images/logo.svg"

function Pedidos() {
    return (
        <PedidosBG>
            <PedidosMain>
                <h1>Novo pedido</h1>
                <PedidosContainer>
                    <h2>Peça</h2>
                    <FormSection>
                        <label>Modelagem</label>
                        <select>
                            <option>Feminina</option>
                            <option>Masculina</option>
                        </select>
                    </FormSection>
                    <FormSection>
                        <label>Tipo de peça</label>
                        <select>
                            <option>Blusa</option>
                        </select>
                    </FormSection>
                    <FormSection>
                        <label>Imagem de referência</label>
                        <input />
                    </FormSection>
                    <FormSection>
                        <label>Observações sobre o modelo</label>
                        <input />
                    </FormSection>
                </PedidosContainer>
            </PedidosMain>
        </PedidosBG>
    )
}

export default Pedidos
