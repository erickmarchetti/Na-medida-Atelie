import ThemeHeader from "../../components/ThemeHeader"
import {
    Button,
    Textarea,
    Input,
    InputGroup,
    Select,
    InputRightAddon,
    useMediaQuery
} from "@chakra-ui/react"
import {
    ButtonContainer,
    FormSection,
    PedidosBG,
    PedidosCard,
    PedidosContainer,
    PedidosMain
} from "./style"
import { useContext, useEffect } from "react"
import { UserContext } from "../../providers/user"
import { useHistory } from "react-router-dom"

function Pedidos() {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)")

    const history = useHistory()

    const { pegarToken } = useContext(UserContext)

    useEffect(() => {
        !pegarToken() && history.push("/")
    }, [])

    return (
        <>
            {!!pegarToken() && (
                <PedidosBG>
                    <ThemeHeader />
                    <PedidosMain>
                        {!isLargerThan768 ? (
                            <h1>Novo pedido</h1>
                        ) : (
                            <ButtonContainer>
                                <h1>Novo pedido</h1>
                                <Button
                                    w="280px"
                                    h="70px"
                                    bg="var(--Color-Primary-Main)"
                                    color="var(--White)"
                                    fontSize="25px"
                                    fontWeight="700"
                                    _hover={{
                                        bgColor: "#A6324F",
                                        borderColor: "#A6324F"
                                    }}
                                >
                                    Finalizar Pedido
                                </Button>
                            </ButtonContainer>
                        )}
                        <PedidosContainer>
                            <PedidosCard>
                                <h2>Peça</h2>
                                <FormSection direction="column">
                                    <label>Modelagem</label>
                                    <Select
                                        minH="29px"
                                        h="5vh"
                                        bg="#EAEAEA"
                                        borderColor="#6B6B6B"
                                        borderWidth="2px"
                                        placeholder="Selecione uma opção"
                                    >
                                        <option value="Feminina">
                                            Feminina
                                        </option>
                                        <option value="Masculina">
                                            Masculina
                                        </option>
                                    </Select>
                                </FormSection>
                                <FormSection direction="column">
                                    <label>Tipo de peça</label>
                                    <Select
                                        minH="29px"
                                        h="5vh"
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
                                        minH="29px"
                                        h="7vh"
                                        padding="0 16px"
                                        bg="#EAEAEA"
                                        borderColor="#6B6B6B"
                                        borderWidth="2px"
                                        placeholder="URL do site"
                                    />
                                </FormSection>
                                <FormSection direction="column" flex="1">
                                    <label>Observações sobre o modelo</label>
                                    <Textarea
                                        h="5vh"
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
                                        h="5vh"
                                        minH="29px"
                                    >
                                        <Input
                                            bg="#EAEAEA"
                                            borderColor="#6B6B6B"
                                            borderWidth="2px"
                                            textAlign="right"
                                            h="70%"
                                            alignSelf="center"
                                            p="4px"
                                        />
                                        <InputRightAddon
                                            bg="#6B6B6B"
                                            borderWidth="2px"
                                            borderColor="#6B6B6B"
                                            color="#EAEAEA"
                                            children="cm"
                                            h="70%"
                                            alignSelf="center"
                                            p="4px"
                                            fontSize="14px"
                                        />
                                    </InputGroup>
                                </FormSection>
                                <FormSection>
                                    <label>Cintura</label>
                                    <InputGroup
                                        d="flex"
                                        justifyContent="flex-end"
                                        w="50%"
                                        h="5vh"
                                        minH="29px"
                                    >
                                        <Input
                                            bg="#EAEAEA"
                                            borderColor="#6B6B6B"
                                            borderWidth="2px"
                                            textAlign="right"
                                            h="70%"
                                            alignSelf="center"
                                            p="4px"
                                        />
                                        <InputRightAddon
                                            bg="#6B6B6B"
                                            borderWidth="2px"
                                            borderColor="#6B6B6B"
                                            color="#EAEAEA"
                                            children="cm"
                                            h="70%"
                                            alignSelf="center"
                                            p="4px"
                                            fontSize="14px"
                                        />
                                    </InputGroup>
                                </FormSection>
                                <FormSection>
                                    <label>Quadril</label>
                                    <InputGroup
                                        d="flex"
                                        justifyContent="flex-end"
                                        w="50%"
                                        h="5vh"
                                        minH="29px"
                                    >
                                        <Input
                                            bg="#EAEAEA"
                                            borderColor="#6B6B6B"
                                            borderWidth="2px"
                                            textAlign="right"
                                            h="70%"
                                            alignSelf="center"
                                            p="4px"
                                        />
                                        <InputRightAddon
                                            bg="#6B6B6B"
                                            borderWidth="2px"
                                            borderColor="#6B6B6B"
                                            color="#EAEAEA"
                                            children="cm"
                                            h="70%"
                                            alignSelf="center"
                                            p="4px"
                                            fontSize="14px"
                                        />
                                    </InputGroup>
                                </FormSection>
                                <FormSection>
                                    <label>Braço (Biceps)</label>
                                    <InputGroup
                                        d="flex"
                                        justifyContent="flex-end"
                                        w="50%"
                                        h="5vh"
                                        minH="29px"
                                    >
                                        <Input
                                            bg="#EAEAEA"
                                            borderColor="#6B6B6B"
                                            borderWidth="2px"
                                            textAlign="right"
                                            h="70%"
                                            alignSelf="center"
                                            p="4px"
                                        />
                                        <InputRightAddon
                                            bg="#6B6B6B"
                                            borderWidth="2px"
                                            borderColor="#6B6B6B"
                                            color="#EAEAEA"
                                            children="cm"
                                            h="70%"
                                            alignSelf="center"
                                            p="4px"
                                            fontSize="14px"
                                        />
                                    </InputGroup>
                                </FormSection>
                                <FormSection>
                                    <label>Punho</label>
                                    <InputGroup
                                        d="flex"
                                        justifyContent="flex-end"
                                        w="50%"
                                        h="5vh"
                                        minH="29px"
                                    >
                                        <Input
                                            bg="#EAEAEA"
                                            borderColor="#6B6B6B"
                                            borderWidth="2px"
                                            textAlign="right"
                                            h="70%"
                                            alignSelf="center"
                                            p="4px"
                                        />
                                        <InputRightAddon
                                            bg="#6B6B6B"
                                            borderWidth="2px"
                                            borderColor="#6B6B6B"
                                            color="#EAEAEA"
                                            children="cm"
                                            h="70%"
                                            alignSelf="center"
                                            p="4px"
                                            fontSize="14px"
                                        />
                                    </InputGroup>
                                </FormSection>
                                <FormSection>
                                    <label>Coxa</label>
                                    <InputGroup
                                        d="flex"
                                        justifyContent="flex-end"
                                        w="50%"
                                        h="5vh"
                                        minH="29px"
                                    >
                                        <Input
                                            bg="#EAEAEA"
                                            borderColor="#6B6B6B"
                                            borderWidth="2px"
                                            textAlign="right"
                                            h="70%"
                                            alignSelf="center"
                                            p="4px"
                                        />
                                        <InputRightAddon
                                            bg="#6B6B6B"
                                            borderWidth="2px"
                                            borderColor="#6B6B6B"
                                            color="#EAEAEA"
                                            children="cm"
                                            h="70%"
                                            alignSelf="center"
                                            p="4px"
                                            fontSize="14px"
                                        />
                                    </InputGroup>
                                </FormSection>
                                <FormSection>
                                    <label>Joelho</label>
                                    <InputGroup
                                        d="flex"
                                        justifyContent="flex-end"
                                        w="50%"
                                        h="5vh"
                                        minH="29px"
                                    >
                                        <Input
                                            bg="#EAEAEA"
                                            borderColor="#6B6B6B"
                                            borderWidth="2px"
                                            textAlign="right"
                                            h="70%"
                                            alignSelf="center"
                                            p="4px"
                                        />
                                        <InputRightAddon
                                            bg="#6B6B6B"
                                            borderWidth="2px"
                                            borderColor="#6B6B6B"
                                            color="#EAEAEA"
                                            children="cm"
                                            h="70%"
                                            alignSelf="center"
                                            p="4px"
                                            fontSize="14px"
                                        />
                                    </InputGroup>
                                </FormSection>
                                <FormSection type="medidas">
                                    <label>Tornozelo</label>
                                    <InputGroup
                                        d="flex"
                                        justifyContent="flex-end"
                                        w="50%"
                                        h="5vh"
                                        minH="29px"
                                    >
                                        <Input
                                            bg="#EAEAEA"
                                            borderColor="#6B6B6B"
                                            borderWidth="2px"
                                            textAlign="right"
                                            h="70%"
                                            alignSelf="center"
                                            p="4px"
                                        />
                                        <InputRightAddon
                                            bg="#6B6B6B"
                                            borderWidth="2px"
                                            borderColor="#6B6B6B"
                                            color="#EAEAEA"
                                            children="cm"
                                            h="70%"
                                            alignSelf="center"
                                            p="4px"
                                            fontSize="14px"
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
                                        h="5vh"
                                        minH="29px"
                                    >
                                        <Input
                                            bg="#EAEAEA"
                                            borderColor="#6B6B6B"
                                            borderWidth="2px"
                                            textAlign="right"
                                            h="70%"
                                            alignSelf="center"
                                            p="4px"
                                        />
                                        <InputRightAddon
                                            bg="#6B6B6B"
                                            borderWidth="2px"
                                            borderColor="#6B6B6B"
                                            color="#EAEAEA"
                                            children="cm"
                                            h="70%"
                                            alignSelf="center"
                                            p="4px"
                                            fontSize="14px"
                                        />
                                    </InputGroup>
                                </FormSection>
                                <FormSection>
                                    <label>Comp. Total</label>
                                    <InputGroup
                                        d="flex"
                                        justifyContent="flex-end"
                                        w="50%"
                                        h="5vh"
                                        minH="29px"
                                    >
                                        <Input
                                            bg="#EAEAEA"
                                            borderColor="#6B6B6B"
                                            borderWidth="2px"
                                            textAlign="right"
                                            h="70%"
                                            alignSelf="center"
                                            p="4px"
                                        />
                                        <InputRightAddon
                                            bg="#6B6B6B"
                                            borderWidth="2px"
                                            borderColor="#6B6B6B"
                                            color="#EAEAEA"
                                            children="cm"
                                            h="70%"
                                            alignSelf="center"
                                            p="4px"
                                            fontSize="14px"
                                        />
                                    </InputGroup>
                                </FormSection>
                                <FormSection>
                                    <label>Comp. Manga</label>
                                    <InputGroup
                                        d="flex"
                                        justifyContent="flex-end"
                                        w="50%"
                                        h="5vh"
                                        minH="29px"
                                    >
                                        <Input
                                            bg="#EAEAEA"
                                            borderColor="#6B6B6B"
                                            borderWidth="2px"
                                            textAlign="right"
                                            h="70%"
                                            alignSelf="center"
                                            p="4px"
                                        />
                                        <InputRightAddon
                                            bg="#6B6B6B"
                                            borderWidth="2px"
                                            borderColor="#6B6B6B"
                                            color="#EAEAEA"
                                            children="cm"
                                            h="70%"
                                            alignSelf="center"
                                            p="4px"
                                            fontSize="14px"
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
                        {!isLargerThan768 && (
                            <ButtonContainer>
                                <Button
                                    w="280px"
                                    h="70px"
                                    bg="var(--Color-Primary-Main)"
                                    color="var(--White)"
                                    fontSize="25px"
                                    fontWeight="700"
                                    _hover={{
                                        bgColor: "#A6324F",
                                        borderColor: "#A6324F"
                                    }}
                                >
                                    Finalizar Pedido
                                </Button>
                            </ButtonContainer>
                        )}
                    </PedidosMain>
                </PedidosBG>
            )}
        </>
    )
}

export default Pedidos
