import ModalMedidas from "../../components/ModalMedidas"
import ThemeHeader from "../../components/ThemeHeader"
import {
    Text,
    Image,
    Badge,
    Box,
    Button,
    useDisclosure,
    Stack,
    IconButton
} from "@chakra-ui/react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Api from "../../Api"

function PainelAdmin() {
    const [pedidos, setPedidos] = useState(null)

    const [pagina, setPagina] = useState(1)

    const [pedidoAtual, setPedidoAtual] = useState(null)

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
            <ThemeHeader admin />
            <ModalMedidas
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                pedidoAtual={pedidoAtual}
            />

            <motion.div
                initial={{ x: 500 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3 }}
            >
                <Stack maxW="1280px" margin="auto">
                    <Text
                        fontSize={{ base: "1.5rem", lg: "4xl" }}
                        color="var(--Black)"
                        textAlign={{ base: "center", lg: "start" }}
                        fontWeight="bold"
                        padding="50px 20px 0"
                        fontFamily="Nunito"
                    >
                        Area da costureira - Pedidos
                    </Text>
                </Stack>

                <Box
                    display="flex"
                    flexWrap={{ base: "nowrap", lg: "wrap" }}
                    overflow="auto"
                    justifyContent={{ base: "flex-start", lg: "center" }}
                    margin="auto"
                    maxW={{ lg: "1280px" }}
                    w="95%"
                >
                    {pedidos?.map((item, index) => (
                        <Box
                            onClick={(e) => {
                                onOpen(e)
                                setPedidoAtual(item)
                            }}
                            cursor="pointer"
                            key={index}
                            height={{ base: "auto", lg: "178px" }}
                            maxWidth={{ lg: "375px" }}
                            minWidth={{ base: "240px", lg: "350px" }}
                            background="var(--BackgroundColor-Main)"
                            border="2px solid var(--Black)"
                            borderRadius="25px"
                            overflow="hidden"
                            display="flex"
                            alignItems="center"
                            margin={{ base: "15px", lg: "25px" }}
                            flexDirection={{ base: "column", lg: "row" }}
                        >
                            <Image
                                w={{ base: "100%", lg: "50%" }}
                                h="100%"
                                src={item.imagem_referencia}
                                alt={item.imagem_referencia}
                            />

                            <Box
                                display="flex"
                                maxW="50%"
                                gap="5px"
                                flexDirection="column"
                                paddingLeft={{ base: 0, lg: "35px" }}
                                alignItems="center"
                                textAlign="center"
                            >
                                <Text
                                    mt="1"
                                    fontWeight="bold"
                                    as="h4"
                                    lineHeight="tight"
                                    noOfLines={1}
                                    fontSize="30px"
                                    color="var(--Black)"
                                    fontFamily="Nunito"
                                >
                                    {item.categoria}
                                </Text>
                                <Text
                                    color="var(--Black)"
                                    fontWeight="bold"
                                    fontSize="18px"
                                    marginLeft="5px"
                                    fontFamily="Nunito"
                                >
                                    Data:
                                </Text>

                                <Text
                                    color="var(--Grey-3)"
                                    fontWeight="bold"
                                    fontSize="18px"
                                    marginLeft="5px"
                                    fontFamily="Nunito"
                                >
                                    {item.data}
                                </Text>

                                <Text
                                    color="var(--Green)"
                                    fontWeight="bold"
                                    fontSize="18px"
                                    fontFamily="Nunito"
                                >
                                    {item.preco.toLocaleString("pt-br", {
                                        style: "currency",
                                        currency: "BRL"
                                    })}
                                </Text>
                                {item.stats === "Em Análise" ? (
                                    <Button
                                        color="var(--White)"
                                        bg="var(--Color-Primary-Main)"
                                        w="110px"
                                        h="25px"
                                        borderRadius="lg"
                                        fontFamily="Nunito"
                                        lineHeight="25px"
                                        marginBottom=".5rem"
                                    >
                                        Aceitar
                                    </Button>
                                ) : (
                                    <Badge
                                        height="25px"
                                        borderRadius="lg"
                                        px="2"
                                        colorScheme="teal"
                                        fontFamily="Nunito"
                                        lineHeight="25px"
                                        marginBottom=".5rem"
                                    >
                                        {item.stats}
                                    </Badge>
                                )}
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Stack
                    display={{ base: "none", lg: "flex" }}
                    maxWidth="1280px"
                    margin="auto"
                    direction="row"
                    spacing={7}
                    paddingX={12}
                    justifyContent="flex-end"
                >
                    <IconButton
                        icon={<FaArrowLeft />}
                        size="lg"
                        fontSize="25px"
                        className="proximo"
                        aria-label="seta para esquerda"
                        onClick={() => setPagina(pagina - 1 > 0 && pagina - 1)}
                    />
                    <IconButton
                        icon={<FaArrowRight />}
                        size="lg"
                        fontSize="25px"
                        className="proximo"
                        aria-label="seta para direita"
                        onClick={() => setPagina(pagina + 1)}
                    />
                </Stack>
            </motion.div>
        </>
    )
}

export default PainelAdmin
