import {
    Avatar,
    Button,
    Flex,
    Stack,
    Text,
    useMediaQuery
} from "@chakra-ui/react"
import {
    BackgroundImage,
    ButtonContainer,
    ContainerText,
    HomeBG,
    HomeContainer,
    HomeMain,
    ImgContainer
} from "./style"
import { AiFillHeart } from "react-icons/ai"
import logo from "../../assets/Images/logo_mobile.svg"
import { useHistory } from "react-router-dom"
import { useState } from "react"
import Erick from "../../assets/AvatarImages/Erick.png"
import Izamara from "../../assets/AvatarImages/Izamara.jpg"
import Hitalo from "../../assets/AvatarImages/Hitalo.png"
import Raquel from "../../assets/AvatarImages/Raquel.jpeg"

function Home() {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
    const [sobreNos, setSobreNos] = useState(false)
    const history = useHistory()

    return (
        <HomeBG>
            {isLargerThan768 && (
                <ButtonContainer>
                    <Button
                        variant="outline"
                        borderColor="#181818"
                        color="#181818"
                        borderWidth={2}
                        p="5px 25px"
                        boxShadow="dark-lg"
                        _active={false}
                        onClick={() => history.push("/login")}
                        fontWeight="700"
                        fontSize="22px"
                        _hover={{
                            textDecoration: "underline"
                        }}
                    >
                        Login
                    </Button>
                    <Button
                        variant="outline"
                        borderColor="#DA4167"
                        bgColor="#DA4167"
                        color="#FAFAFA"
                        p="5px 30px"
                        onClick={() => history.push("/register")}
                        boxShadow="dark-lg"
                        fontWeight="700"
                        _active={false}
                        fontSize="22px"
                        _hover={{
                            bgColor: "#A6324F",
                            borderColor: "#A6324F"
                        }}
                    >
                        Cadastro
                    </Button>
                    <Button
                        variant="outline"
                        borderColor={sobreNos ? "#181818" : "#DA4167"}
                        bgColor={sobreNos ? "#FAFAFA" : "#DA4167"}
                        color={sobreNos ? "#181818" : "#FAFAFA"}
                        _hover={
                            sobreNos
                                ? { textDecoration: "underline" }
                                : { bgColor: "#A6324F", borderColor: "#A6324F" }
                        }
                        borderWidth={2}
                        p="5px 20px"
                        boxShadow="dark-lg"
                        onClick={() => setSobreNos(!sobreNos)}
                        fontWeight="700"
                        fontSize="22px"
                        _active={false}
                    >
                        Sobre nós{" "}
                        <AiFillHeart
                            fontSize="18px"
                            color={sobreNos ? "#DA4167" : "#FAFAFA"}
                        />
                    </Button>
                </ButtonContainer>
            )}
            <HomeMain>
                <HomeContainer>
                    {sobreNos ? (
                        <>
                            <Text
                                marginTop="auto"
                                maxW="90%"
                                textAlign="justify"
                                fontSize="lg"
                                fontWeight="bold"
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Pellentesque a elementum
                                volutpat et accumsan felis. Pretium, amet
                                adipiscing quis convallis integer faucibus
                                faucibus. Ipsum accumsan egestas a sed orci,
                                consequat molestie. Fames donec elementum cras
                                et laoreet in orci, vitae viverra. Orci nulla
                                eget id amet, mi, turpis amet at morbi. Lacus
                                interdum lacus at mattis vestibulum cursus
                                platea sit. Dui, phasellus id risus maecenas
                                scelerisque tristique lectus massa. Libero,
                                eleifend mauris, eget nunc sed leo in ut
                                faucibus
                            </Text>
                            <Stack alignItems="flex-start" marginTop="auto">
                                <Stack alignItems="center" direction="row">
                                    <Text
                                        fontSize="2xl"
                                        fontFamily="Dancing Script"
                                    >
                                        Desenvolvido com{" "}
                                    </Text>
                                    <AiFillHeart color="#E53E3E" />
                                    <Text
                                        fontSize="2xl"
                                        fontFamily="Dancing Script"
                                    >
                                        {" "}
                                        por:
                                    </Text>
                                </Stack>
                                <Stack
                                    direction="row"
                                    justifyContent="center"
                                    flexWrap="wrap"
                                    gap={4}
                                >
                                    <Flex
                                        direction="column"
                                        alignItems="center"
                                    >
                                        <Avatar
                                            border="2px solid #181818"
                                            size="lg"
                                            name="Raquel Carvalho"
                                            src={Raquel}
                                        />
                                        <Text fontFamily="Dancing Script">
                                            Raquel Carvalho
                                        </Text>
                                    </Flex>
                                    <Flex
                                        direction="column"
                                        alignItems="center"
                                    >
                                        <Avatar
                                            border="2px solid #181818"
                                            size="lg"
                                            name="Erick Marchetti"
                                            src={Erick}
                                        />
                                        <Text fontFamily="Dancing Script">
                                            Erick Marchetti
                                        </Text>
                                    </Flex>
                                    <Flex
                                        direction="column"
                                        alignItems="center"
                                    >
                                        <Avatar
                                            border="2px solid #181818"
                                            size="lg"
                                            name="Hitalo Santos"
                                            src={Hitalo}
                                        />
                                        <Text fontFamily="Dancing Script">
                                            Hitalo Santos
                                        </Text>
                                    </Flex>
                                    <Flex
                                        direction="column"
                                        alignItems="center"
                                    >
                                        <Avatar
                                            border="2px solid #181818"
                                            size="lg"
                                            name="Izamara Ágata"
                                            src={Izamara}
                                        />
                                        <Text fontFamily="Dancing Script">
                                            Izamara Ágata
                                        </Text>
                                    </Flex>
                                    <Flex
                                        direction="column"
                                        alignItems="center"
                                    >
                                        <Avatar
                                            border="2px solid #181818"
                                            size="lg"
                                            name="Fidel Marques"
                                            src={Erick}
                                        />
                                        <Text fontFamily="Dancing Script">
                                            Fidel Marques
                                        </Text>
                                    </Flex>
                                    <Flex
                                        direction="column"
                                        alignItems="center"
                                    >
                                        <Avatar
                                            border="2px solid #181818"
                                            size="lg"
                                            name="Andryws Görtz"
                                            src={Erick}
                                        />
                                        <Text fontFamily="Dancing Script">
                                            Andryws Görtz
                                        </Text>
                                    </Flex>
                                </Stack>
                            </Stack>
                        </>
                    ) : (
                        <ContainerText>
                            <ImgContainer>
                                <img src={logo} alt="Logo" />
                            </ImgContainer>
                            <h1>O seu site de roupas sob medidas</h1>
                            <h2>De forma simples e prática.</h2>
                            {isLargerThan768 && (
                                <Button
                                    border="2px"
                                    borderColor="#DA4167"
                                    fontSize="20px"
                                    fontWeight="700"
                                    bgColor="#DA4167"
                                    color="#FAFAFA"
                                    _active={false}
                                    onClick={() => history.push("/avaliacoes")}
                                    w="350px"
                                    minH="60px"
                                    boxShadow="dark-lg"
                                    _hover={{
                                        bgColor: "#A6324F",
                                        borderColor: "#A6324F"
                                    }}
                                >
                                    Veja o que nossos clientes dizem
                                </Button>
                            )}
                        </ContainerText>
                    )}

                    {!isLargerThan768 && (
                        <ButtonContainer>
                            <Button
                                variant="outline"
                                borderColor="#181818"
                                color="#181818"
                                padding="20px 35px"
                                fontSize="20px"
                                w="40vw"
                                onClick={() => history.push("/login")}
                                _active={false}
                                boxShadow="dark-lg"
                                fontWeight="700"
                                _hover={{
                                    textDecoration: "underline"
                                }}
                            >
                                Login
                            </Button>
                            <Button
                                variant="outline"
                                borderColor="#DA4167"
                                bgColor="#DA4167"
                                color="#FAFAFA"
                                _hover={{
                                    bgColor: "#A6324F",
                                    borderColor: "#A6324F"
                                }}
                                padding="20px 35px"
                                fontSize="20px"
                                onClick={() => history.push("/register")}
                                w="40vw"
                                _active={false}
                                boxShadow="dark-lg"
                                fontWeight="700"
                            >
                                Cadastro
                            </Button>
                        </ButtonContainer>
                    )}
                    {!isLargerThan768 && (
                        <>
                            {!sobreNos && (
                                <Button
                                    border="2px"
                                    borderColor="#DA4167"
                                    padding="20px 0px"
                                    fontSize="18px"
                                    fontWeight="700"
                                    _active={false}
                                    bgColor="#DA4167"
                                    color="#FAFAFA"
                                    onClick={() => history.push("/avaliacoes")}
                                    w="100%"
                                    boxShadow="dark-lg"
                                    _hover={{
                                        bgColor: "#A6324F",
                                        borderColor: "#A6324F"
                                    }}
                                >
                                    Veja o que nossos clientes dizem
                                </Button>
                            )}
                            <Button
                                border="2px"
                                borderColor={sobreNos ? "#181818" : "#DA4167"}
                                bgColor={sobreNos ? "#FAFAFA" : "#DA4167"}
                                color={sobreNos ? "#181818" : "#FAFAFA"}
                                _hover={
                                    sobreNos
                                        ? { textDecoration: "underline" }
                                        : {
                                              bgColor: "#A6324F",
                                              borderColor: "#A6324F"
                                          }
                                }
                                borderWidth={2}
                                padding="20px 35px"
                                fontSize="20px"
                                fontWeight="700"
                                onClick={() => setSobreNos(!sobreNos)}
                                w="100%"
                                _active={false}
                            >
                                Sobre nós{" "}
                                <AiFillHeart
                                    color={sobreNos ? "#DA4167" : "#FAFAFA"}
                                />
                            </Button>
                        </>
                    )}
                </HomeContainer>
                {isLargerThan768 && <BackgroundImage />}
            </HomeMain>
        </HomeBG>
    )
}

export default Home
