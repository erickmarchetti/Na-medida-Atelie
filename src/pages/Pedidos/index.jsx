import ThemeHeader from "../../components/ThemeHeader"
import {
    Button,
    Textarea,
    Input,
    InputGroup,
    Select,
    InputRightAddon
} from "@chakra-ui/react"
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
                            <Select
                                minH="46px"
                                bg="#EAEAEA"
                                borderColor="#6B6B6B"
                                borderWidth="2px"
                                placeholder="Selecione uma opção"
                            >
                                <option value="Feminina">Feminina</option>
                                <option value="Masculina">Masculina</option>
                            </Select>
                        </FormSection>
                        <FormSection direction="column">
                            <label>Tipo de peça</label>
                            <Select
                                minH="46px"
                                bg="#EAEAEA"
                                borderColor="#6B6B6B"
                                borderWidth="2px"
                                placeholder="Selecione uma opção"
                            >
                                <option value="Blusa">Blusa</option>
                                <option value="Vestido">Vestido</option>
                            </Select>
                        </FormSection>
                        <FormSection direction="column">
                            <label>Imagem de referência</label>
                            <Input
                                padding="8px 16px"
                                bg="#EAEAEA"
                                borderColor="#6B6B6B"
                                borderWidth="2px"
                                placeholder="URL do site"
                            />
                        </FormSection>
                        <FormSection direction="column" flex="1">
                            <label>Observações sobre o modelo</label>
                            <Textarea
                                placeholder="Insira detalhes adicionais que deseja no modelo escolhido..."
                                resize="none"
                                flex="1"
                                bg="#EAEAEA"
                                borderColor="#6B6B6B"
                                borderWidth="2px"
                            />
                        </FormSection>
                    </PedidosCard>
                    <PedidosCard>
                        <h2>Medidas - Circunferências</h2>
                        <FormSection>
                            <label>Busto / Tórax</label>
                            <InputGroup
                                d="flex"
                                justifyContent="flex-end"
                                w="50%"
                            >
                                <Input
                                    padding="10px"
                                    bg="#EAEAEA"
                                    borderColor="#6B6B6B"
                                    borderWidth="2px"
                                    textAlign="right"
                                />
                                <InputRightAddon
                                    bg="#6B6B6B"
                                    borderWidth="2px"
                                    borderColor="#6B6B6B"
                                    color="#EAEAEA"
                                    children="cm"
                                />
                            </InputGroup>
                        </FormSection>
                        <FormSection>
                            <label>Cintura</label>
                            <InputGroup
                                d="flex"
                                justifyContent="flex-end"
                                w="50%"
                            >
                                <Input
                                    padding="10px"
                                    bg="#EAEAEA"
                                    borderColor="#6B6B6B"
                                    borderWidth="2px"
                                    textAlign="right"
                                />
                                <InputRightAddon
                                    bg="#6B6B6B"
                                    borderWidth="2px"
                                    borderColor="#6B6B6B"
                                    color="#EAEAEA"
                                    children="cm"
                                />
                            </InputGroup>
                        </FormSection>
                        <FormSection>
                            <label>Quadril</label>
                            <InputGroup
                                d="flex"
                                justifyContent="flex-end"
                                w="50%"
                            >
                                <Input
                                    padding="10px"
                                    bg="#EAEAEA"
                                    borderColor="#6B6B6B"
                                    borderWidth="2px"
                                    textAlign="right"
                                />
                                <InputRightAddon
                                    bg="#6B6B6B"
                                    borderWidth="2px"
                                    borderColor="#6B6B6B"
                                    color="#EAEAEA"
                                    children="cm"
                                />
                            </InputGroup>
                        </FormSection>
                        <FormSection>
                            <label>Braço (Biceps)</label>
                            <InputGroup
                                d="flex"
                                justifyContent="flex-end"
                                w="50%"
                            >
                                <Input
                                    padding="10px"
                                    bg="#EAEAEA"
                                    borderColor="#6B6B6B"
                                    borderWidth="2px"
                                    textAlign="right"
                                />
                                <InputRightAddon
                                    bg="#6B6B6B"
                                    borderWidth="2px"
                                    borderColor="#6B6B6B"
                                    color="#EAEAEA"
                                    children="cm"
                                />
                            </InputGroup>
                        </FormSection>
                        <FormSection>
                            <label>Punho</label>
                            <InputGroup
                                d="flex"
                                justifyContent="flex-end"
                                w="50%"
                            >
                                <Input
                                    padding="10px"
                                    bg="#EAEAEA"
                                    borderColor="#6B6B6B"
                                    borderWidth="2px"
                                    textAlign="right"
                                />
                                <InputRightAddon
                                    bg="#6B6B6B"
                                    borderWidth="2px"
                                    borderColor="#6B6B6B"
                                    color="#EAEAEA"
                                    children="cm"
                                />
                            </InputGroup>
                        </FormSection>
                        <FormSection>
                            <label>Coxa</label>
                            <InputGroup
                                d="flex"
                                justifyContent="flex-end"
                                w="50%"
                            >
                                <Input
                                    padding="10px"
                                    bg="#EAEAEA"
                                    borderColor="#6B6B6B"
                                    borderWidth="2px"
                                    textAlign="right"
                                />
                                <InputRightAddon
                                    bg="#6B6B6B"
                                    borderWidth="2px"
                                    borderColor="#6B6B6B"
                                    color="#EAEAEA"
                                    children="cm"
                                />
                            </InputGroup>
                        </FormSection>
                        <FormSection>
                            <label>Joelho</label>
                            <InputGroup
                                d="flex"
                                justifyContent="flex-end"
                                w="50%"
                            >
                                <Input
                                    padding="10px"
                                    bg="#EAEAEA"
                                    borderColor="#6B6B6B"
                                    borderWidth="2px"
                                    textAlign="right"
                                />
                                <InputRightAddon
                                    bg="#6B6B6B"
                                    borderWidth="2px"
                                    borderColor="#6B6B6B"
                                    color="#EAEAEA"
                                    children="cm"
                                />
                            </InputGroup>
                        </FormSection>
                        <FormSection type="medidas">
                            <label>Tornozelo</label>
                            <InputGroup
                                d="flex"
                                justifyContent="flex-end"
                                w="50%"
                            >
                                <Input
                                    padding="10px"
                                    bg="#EAEAEA"
                                    borderColor="#6B6B6B"
                                    borderWidth="2px"
                                    textAlign="right"
                                />
                                <InputRightAddon
                                    bg="#6B6B6B"
                                    borderWidth="2px"
                                    borderColor="#6B6B6B"
                                    color="#EAEAEA"
                                    children="cm"
                                />
                            </InputGroup>
                        </FormSection>
                    </PedidosCard>
                    <PedidosCard>
                        <h2>Medidas Adicionais</h2>
                        <FormSection>
                            <label>Largura Ombro</label>
                            <InputGroup
                                d="flex"
                                justifyContent="flex-end"
                                w="50%"
                            >
                                <Input
                                    padding="10px"
                                    bg="#EAEAEA"
                                    borderColor="#6B6B6B"
                                    borderWidth="2px"
                                    textAlign="right"
                                />
                                <InputRightAddon
                                    bg="#6B6B6B"
                                    borderWidth="2px"
                                    borderColor="#6B6B6B"
                                    color="#EAEAEA"
                                    children="cm"
                                />
                            </InputGroup>
                        </FormSection>
                        <FormSection>
                            <label>Comp. Total</label>
                            <InputGroup
                                d="flex"
                                justifyContent="flex-end"
                                w="50%"
                            >
                                <Input
                                    padding="10px"
                                    bg="#EAEAEA"
                                    borderColor="#6B6B6B"
                                    borderWidth="2px"
                                    textAlign="right"
                                />
                                <InputRightAddon
                                    bg="#6B6B6B"
                                    borderWidth="2px"
                                    borderColor="#6B6B6B"
                                    color="#EAEAEA"
                                    children="cm"
                                />
                            </InputGroup>
                        </FormSection>
                        <FormSection>
                            <label>Comp. Manga</label>
                            <InputGroup
                                d="flex"
                                justifyContent="flex-end"
                                w="50%"
                            >
                                <Input
                                    padding="10px"
                                    bg="#EAEAEA"
                                    borderColor="#6B6B6B"
                                    borderWidth="2px"
                                    textAlign="right"
                                />
                                <InputRightAddon
                                    bg="#6B6B6B"
                                    borderWidth="2px"
                                    borderColor="#6B6B6B"
                                    color="#EAEAEA"
                                    children="cm"
                                />
                            </InputGroup>
                        </FormSection>
                        <FormSection direction="column" flex="1">
                            <label>
                                Outras medidas que julgar necessárias:
                            </label>
                            <Textarea
                                resize="none"
                                flex="1"
                                bg="#EAEAEA"
                                borderColor="#6B6B6B"
                                borderWidth="2px"
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
