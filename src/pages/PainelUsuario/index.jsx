import ThemeHeader from "../../components/ThemeHeader"
import {
    Button,
    Modal,
    ModalContent,
    ModalCloseButton,
    ModalHeader,
    ModalOverlay,
    ModalBody,
    ModalFooter,
    Text,
    Stack,
    useDisclosure,
    Spinner,
    Textarea,
    Badge
} from "@chakra-ui/react"

import { motion } from "framer-motion"

import {
    BackgroundImg,
    ContainerButton,
    ContainerMain,
    ContainerPedidos,
    Item,
    ItemData,
    ItemDescription,
    ItemImg,
    ListaPedidos,
    UsuarioBG
} from "./style"

import { toast } from "react-toastify"

import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

import Api from "../../Api"

function PainelUsuario() {
    const [pedidos, setPedidos] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const { isOpen, onOpen, onClose } = useDisclosure()

    const history = useHistory()

    const request = () => {
        setIsLoading(true)
        Api.get(`/users/${localStorage.getItem("@user/id")}/pedidos`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("@user/token")}`
            }
        })
            .then((response) => {
                setPedidos(response.data)
            })
            .catch((erro) => erro)
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        request()
    }, [])

    return (
        <UsuarioBG>
            <ThemeHeader usuarioLogado />
            <motion.div
                initial={{ x: -100, y: -100 }}
                animate={{ x: 0, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <ContainerMain>
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Deixe seu feedback!</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Stack mb={3}>
                                    <Text>Escreva sua experiência abaixo:</Text>
                                </Stack>
                                <Stack>
                                    <Textarea
                                        resize="none"
                                        placeholder="Seu comentário..."
                                    />
                                </Stack>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="var(--White)"
                                    bg="var(--Color-Primary-Main)"
                                    fontSize="20px"
                                    marginTop="5px"
                                    _hover={{
                                        bgColor: "var(--Color-Primary-Dark)",
                                        borderColor: "var(--Color-Primary-Dark)"
                                    }}
                                    onClick={() => {
                                        toast.info(
                                            "Obrigado pelo feedback! Infelizmente não possuimos essa feature ainda :("
                                        )
                                        onClose()
                                    }}
                                >
                                    Enviar
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                    <BackgroundImg>
                        <ContainerButton>
                            <Button
                                variant="outline"
                                borderColor="var(--Color-Primary-Main)"
                                color="var(--White)"
                                bg="var(--Color-Primary-Main)"
                                boxShadow="dark-lg"
                                fontSize="30px"
                                w="320px"
                                h="80px"
                                fontWeight="700"
                                _active={false}
                                _hover={{
                                    bgColor: "var(--Color-Primary-Dark)",
                                    borderColor: "var(--Color-Primary-Dark)"
                                }}
                                onClick={() => history.push("/pedidos")}
                            >
                                Fazer pedido
                            </Button>
                            <Button
                                variant="outline"
                                borderColor="var(--BackgroundColor-Black)"
                                borderWidth="2px"
                                color="var(--Black)"
                                bg="var(--BackgroundColor-Main)"
                                boxShadow="dark-lg"
                                fontSize="30px"
                                w="320px"
                                h="80px"
                                fontWeight="700"
                                onClick={onOpen}
                                _active={false}
                                _hover={{
                                    textDecoration: "underline"
                                }}
                            >
                                Feedback
                            </Button>
                        </ContainerButton>
                    </BackgroundImg>
                    <ContainerPedidos>
                        <h1>Meus Pedidos</h1>
                        {isLoading ? (
                            <Spinner
                                thickness="4px"
                                speed="0.65s"
                                emptyColor="gray.200"
                                color="blue.500"
                                size="xl"
                                display="flex"
                                alignSelf="center"
                            />
                        ) : (
                            <>
                                {pedidos.length === 0 ? (
                                    <p>Você ainda não possui pedidos! :(</p>
                                ) : (
                                    <ListaPedidos>
                                        {pedidos?.map((pedido, index) => (
                                            <Item key={index}>
                                                <ItemImg
                                                    src={
                                                        pedido.imagem_referencia
                                                    }
                                                />
                                                <ItemDescription>
                                                    <h2>{pedido.categoria}</h2>
                                                    <ItemData>
                                                        <h3>Data:</h3>
                                                        <h4>{pedido.data}</h4>
                                                    </ItemData>
                                                    <h5>
                                                        {pedido.preco.toLocaleString(
                                                            "pt-br",
                                                            {
                                                                style: "currency",
                                                                currency: "BRL"
                                                            }
                                                        )}
                                                    </h5>
                                                    <Badge
                                                        height="25px"
                                                        borderRadius="lg"
                                                        px="2"
                                                        colorScheme="teal"
                                                        fontFamily="Nunito"
                                                        lineHeight="25px"
                                                        marginBottom=".5rem"
                                                    >
                                                        {pedido.stats}
                                                    </Badge>
                                                </ItemDescription>
                                            </Item>
                                        ))}
                                    </ListaPedidos>
                                )}
                            </>
                        )}
                    </ContainerPedidos>
                </ContainerMain>
            </motion.div>
        </UsuarioBG>
    )
}

export default PainelUsuario
