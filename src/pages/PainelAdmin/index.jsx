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

function PainelAdmin() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const property = [
        {
            imageUrl: "https://bit.ly/2Z4KKcF",
            imageAlt: "Rear view of modern home with pool",
            title: "Vestido",
            data: "20/08/22",
            formattedPrice: "R$150,00",
            status: "Em andamento"
        },
        {
            imageUrl: "https://bit.ly/2Z4KKcF",
            imageAlt: "Rear view of modern home with pool",
            title: "Vestido",
            data: "20/08/22",
            formattedPrice: "R$150,00",
            status: "Em andamento"
        },
        {
            imageUrl: "https://bit.ly/2Z4KKcF",
            imageAlt: "Rear view of modern home with pool",
            title: "Vestido",
            data: "20/08/22",
            formattedPrice: "R$150,00",
            status: "Em andamento"
        },
        {
            imageUrl: "https://bit.ly/2Z4KKcF",
            imageAlt: "Rear view of modern home with pool",
            title: "Vestido",
            data: "20/08/22",
            formattedPrice: "R$150,00",
            status: "Em andamento"
        },
        {
            imageUrl: "https://bit.ly/2Z4KKcF",
            imageAlt: "Rear view of modern home with pool",
            title: "Vestido",
            data: "20/08/22",
            formattedPrice: "R$150,00",
            status: "Em andamento"
        },
        {
            imageUrl: "https://bit.ly/2Z4KKcF",
            imageAlt: "Rear view of modern home with pool",
            title: "Vestido",
            data: "20/08/22",
            formattedPrice: "R$150,00",
            status: "novo"
        }
    ]
    return (
        <>
            <ThemeHeader admin />
            <ModalMedidas isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            <>
                <>
                    <Stack maxW="1280px" margin="auto">
                        <Text
                            fontSize={{ base: "1.5rem", lg: "4xl" }}
                            color=" #181818"
                            textAlign={{ base: "center", lg: "start" }}
                            fontWeight="bold"
                            padding="50px 20px 0"
                            fontFamily="Nunito"
                        >
                            Area da costureira - Pedidos
                        </Text>
                    </Stack>
                </>
                <Box
                    display="flex"
                    flexWrap={{ base: "nowrap", lg: "wrap" }}
                    overflow="auto"
                    justifyContent={{ base: "flex-start", lg: "center" }}
                    margin="auto"
                    maxW={{ lg: "1280px" }}
                    w={{ base: "84%", lg: "95%" }}
                >
                    {property.map((item, index) => (
                        <Box
                            onClick={onOpen}
                            cursor="pointer"
                            key={index}
                            height={{ base: "auto", lg: "178px" }}
                            maxWidth={{ lg: "375px" }}
                            minWidth={{ base: "240px", lg: "350px" }}
                            background="#FAFAFA"
                            border="2px solid #181818"
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
                                src={item.imageUrl}
                                alt={item.imageAlt}
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
                                    color="#181818"
                                    fontFamily="Nunito"
                                >
                                    {item.title}
                                </Text>
                                <Text
                                    color="#181818"
                                    fontWeight="bold"
                                    fontSize="18px"
                                    marginLeft="5px"
                                    fontFamily="Nunito"
                                >
                                    Data:
                                </Text>

                                <Text
                                    color="#ABABAB"
                                    fontWeight="bold"
                                    fontSize="18px"
                                    marginLeft="5px"
                                    fontFamily="Nunito"
                                >
                                    {item.data}
                                </Text>

                                <Text
                                    color="#3CB371"
                                    fontWeight="bold"
                                    fontSize="18px"
                                    fontFamily="Nunito"
                                >
                                    {item.formattedPrice}
                                </Text>
                                {item.status === "novo" ? (
                                    <Button
                                        color="#E7E7E7"
                                        bg="#DA4167"
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
                                        {item.status}
                                    </Badge>
                                )}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </>
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
                    onClick={() => console.log("deu tambem")}
                    aria-label="seta para esquerda"
                />
                <IconButton
                    icon={<FaArrowRight />}
                    size="lg"
                    fontSize="25px"
                    className="proximo"
                    aria-label="seta para direita"
                />
            </Stack>
        </>
    )
}

export default PainelAdmin
