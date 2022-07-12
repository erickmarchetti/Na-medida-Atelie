import ModalMedidas from "../../components/ModalMedidas"
import ThemeHeader from "../../components/ThemeHeader"
import {
    Text,
    Image,
    Badge,
    Box,
    Button,
    useDisclosure
} from "@chakra-ui/react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import { useEffect, useState } from "react"
import Api from "../../Api"

function PainelAdmin() {
    const [pedidos, setPedidos] = useState(null)

    const [pagina, setPagina] = useState(1)

    const [pedidoAtual, setPedidoAtual] = useState(null)
    console.log("oi")
    useEffect(() => {
        Api.get(`/pedidos?_page=${pagina}&_limit=6&_expand=user`, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem(
                    "@user/token"
                )}`
            }
        }).then((response) => {
            setPedidos(response.data)
        })
    }, [pagina])

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <ThemeHeader />
            <ModalMedidas
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                pedidoAtual={pedidoAtual}
            />
            <>
                <>
                    <Text
                        fontSize="5xl"
                        color=" #181818"
                        align="center"
                        paddingTop="50px"
                    >
                        Área da costureira - Pedidos
                    </Text>
                </>
                <Box
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="space-around"
                >
                    {pedidos?.map((item, index) => (
                        <Box
                            onClick={(e) => {
                                onOpen(e)
                                setPedidoAtual(item)
                            }}
                            cursor="pointer"
                            key={index}
                            yardisplay="flex"
                            height="178px"
                            width="375px"
                            background="#FAFAFA"
                            border="2px solid #181818"
                            borderRadius="25px"
                            overflow="hidden"
                            display="flex"
                            alignItems="center"
                            margin="25px"
                        >
                            <Image
                                w="50%"
                                h="100%"
                                src={item.imagem_referencia}
                                alt={item.imagem_referencia}
                            />

                            <Box
                                display="flex"
                                maxW="50%"
                                flexDirection="column"
                                paddingLeft="35px"
                            >
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    flexDirection="column"
                                    textAlign="center"
                                >
                                    <Box
                                        mt="1"
                                        fontWeight="semibold"
                                        as="h4"
                                        lineHeight="tight"
                                        noOfLines={1}
                                        fontSize="30px"
                                        color="#181818"
                                    >
                                        {item.categoria}
                                    </Box>
                                    <Box display="flex">
                                        <Box
                                            color="#181818"
                                            fontWeight="bold"
                                            fontSize="18px"
                                            marginLeft="5px"
                                        >
                                            Data:
                                        </Box>
                                        <>
                                            <Box
                                                color="#ABABAB"
                                                fontWeight="bold"
                                                fontSize="18px"
                                                marginLeft="5px"
                                            >
                                                {item.data}
                                            </Box>
                                        </>
                                    </Box>
                                    <Box
                                        color="#3CB371"
                                        fontWeight="bold"
                                        fontSize="18px"
                                    >
                                        {item.preco.toLocaleString("pt-br", {
                                            style: "currency",
                                            currency: "BRL"
                                        })}
                                    </Box>
                                    <Badge
                                        margin="10px"
                                        borderRadius="full"
                                        px="2"
                                        colorScheme="teal"
                                    >
                                        status
                                    </Badge>
                                    {item.stats === "Em Análise" ? (
                                        <Button
                                            color="#E7E7E7"
                                            bg="#DA4167"
                                            w="110px"
                                            h="25px"
                                            borderRadios="10px"
                                        >
                                            Aceitar
                                        </Button>
                                    ) : (
                                        <Box
                                            color="gray.500"
                                            fontWeight="semibold"
                                            letterSpacing="wide"
                                            fontSize="xs"
                                            textTransform="uppercase"
                                            ml="2"
                                        >
                                            {item.stats}
                                        </Box>
                                    )}
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </>
            <Box display="flex" justifyContent="flex-end">
                <button
                    className="anterior"
                    onClick={() => setPagina(pagina - 1 > 0 && pagina - 1)}
                >
                    <AiOutlineArrowLeft font-size="30px" />
                </button>
                <button
                    className="proximo"
                    onClick={() => setPagina(pagina + 1)}
                >
                    <AiOutlineArrowRight font-size="30px" />
                </button>
            </Box>
        </>
    )
}

export default PainelAdmin
