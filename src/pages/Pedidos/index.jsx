import ThemeHeader from "../../components/ThemeHeader"
import { Button, Textarea } from "@chakra-ui/react"

import {
    ButtonContainer,
    FormSection,
    PedidosBG,
    PedidosCard,
    PedidosContainer,
    PedidosMain
} from "./style"

function Pedidos() {
    return (
        <PedidosBG>
            <ThemeHeader />
            <PedidosMain>
                <h1>Novo pedido</h1>
                <PedidosContainer>
                    <PedidosCard>
                        <h2>Peça</h2>
                        <FormSection direction="column">
                            <label>Modelagem</label>
                            <select>
                                <option>Feminina</option>
                                <option>Masculina</option>
                            </select>
                        </FormSection>
                        <FormSection direction="column">
                            <label>Tipo de peça</label>
                            <select>
                                <option>Blusa</option>
                            </select>
                        </FormSection>
                        <FormSection direction="column">
                            <label>Imagem de referência</label>
                            <input />
                        </FormSection>
                        <FormSection direction="column" flex="1">
                            <label>Observações sobre o modelo</label>
                            <Textarea
                                placeholder="Insira detalhes adicionais que deseja no modelo escolhido..."
                                resize="none"
                                flex="1"
                            />
                        </FormSection>
                    </PedidosCard>
                    <PedidosCard>
                        <h2>Medidas - Circunferências</h2>
                        <FormSection>
                            <label>Busto / Tórax</label>
                            <input />
                        </FormSection>
                        <FormSection>
                            <label>Cintura</label>
                            <input />
                        </FormSection>
                        <FormSection>
                            <label>Quadril</label>
                            <input />
                        </FormSection>
                        <FormSection>
                            <label>Braço (Biceps)</label>
                            <input />
                        </FormSection>
                        <FormSection>
                            <label>Punho</label>
                            <input />
                        </FormSection>
                        <FormSection>
                            <label>Coxa</label>
                            <input />
                        </FormSection>
                        <FormSection>
                            <label>Joelho</label>
                            <input />
                        </FormSection>
                        <FormSection>
                            <label>Tornozelo</label>
                            <input />
                        </FormSection>
                    </PedidosCard>
                    <PedidosCard>
                        <h2>Medidas Adicionais</h2>
                        <FormSection>
                            <label>Largura Ombro</label>
                            <input />
                        </FormSection>
                        <FormSection>
                            <label>Comp. Total</label>
                            <input />
                        </FormSection>
                        <FormSection>
                            <label>Comp. Manga</label>
                            <input />
                        </FormSection>
                        <FormSection direction="column" flex="1">
                            <label>
                                Outras medidas que julgar necessárias:
                            </label>
                            <Textarea
                                placeholder="Insira detalhes adicionais que deseja no modelo escolhido..."
                                resize="none"
                                flex="1"
                            />
                        </FormSection>
                    </PedidosCard>
                </PedidosContainer>
                <ButtonContainer>
                    <Button
                        w="280px"
                        h="70px"
                        bg="var(--Color-Primary-Main)"
                        color="var(--White)"
                        fontSize="25px"
                        fontWeight="700"
                    >
                        Finalizar Pedido
                    </Button>
                </ButtonContainer>
            </PedidosMain>
        </PedidosBG>
    )
}

export default Pedidos
