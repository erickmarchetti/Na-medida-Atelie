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

function PainelAdmin() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const property = [
        {
            imageUrl: "https://bit.ly/2Z4KKcF",
            imageAlt: "Rear view of modern home with pool",
            title: "vestido",
            data: "20/08/22",
            formattedPrice: "R$150,00",
            status: "Em andamento"
        },
        {
            imageUrl: "https://bit.ly/2Z4KKcF",
            imageAlt: "Rear view of modern home with pool",
            title: "vestido",
            data: "20/08/22",
            formattedPrice: "R$150,00",
            status: "Em andamento"
        },
        {
            imageUrl: "https://bit.ly/2Z4KKcF",
            imageAlt: "Rear view of modern home with pool",
            title: "vestido",
            data: "20/08/22",
            formattedPrice: "R$150,00",
            status: "Em andamento"
        },
        {
            imageUrl: "https://bit.ly/2Z4KKcF",
            imageAlt: "Rear view of modern home with pool",
            title: "vestido",
            data: "20/08/22",
            formattedPrice: "R$150,00",
            status: "Em andamento"
        },
        {
            imageUrl: "https://bit.ly/2Z4KKcF",
            imageAlt: "Rear view of modern home with pool",
            title: "vestido",
            data: "20/08/22",
            formattedPrice: "R$150,00",
            status: "Em andamento"
        },
        {
            imageUrl: "https://bit.ly/2Z4KKcF",
            imageAlt: "Rear view of modern home with pool",
            title: "vestido",
            data: "20/08/22",
            formattedPrice: "R$150,00",
            status: "novo"
        }
    ]
    return (
        <>
            <ThemeHeader />
            <ModalMedidas isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
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
                    {property.map((item, index) => (
                        <Box
                            onClick={onOpen}
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
                            margin="10px"
                        >
                            <Image
                                w="50%"
                                h="100%"
                                src={item.imageUrl}
                                alt={item.imageAlt}
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
                                        {item.title}
                                    </Box>
                                    <Box display="flex">
                                        <Box
                                            color="#181818"
                                            fontWeight="bold"
                                            fontSize="18px"
                                        >
                                            Data:
                                        </Box>
                                        <Box
                                            color="#ABABAB"
                                            fontWeight="bold"
                                            fontSize="18px"
                                        >
                                            {item.data}
                                        </Box>
                                    </Box>
                                    <Box
                                        color="#3CB371"
                                        fontWeight="bold"
                                        fontSize="18px"
                                    >
                                        {item.formattedPrice}
                                    </Box>
                                    <Badge
                                        borderRadius="full"
                                        px="2"
                                        colorScheme="teal"
                                    >
                                        status
                                    </Badge>
                                    {item.status === "novo" ? (
                                        <Button
                                            color="#E7E7E7"
                                            bg="#DA4167"
                                            w="131px"
                                            h="28px"
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
                                            {item.status}
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
                    className="proximo"
                    onClick={() => console.log("deu tambem")}
                >
                    <AiOutlineArrowLeft />
                </button>
                <button className="proximo" onClick={() => console.log("deu")}>
                    <AiOutlineArrowRight />
                </button>
            </Box>
        </>
    )
}

export default PainelAdmin
