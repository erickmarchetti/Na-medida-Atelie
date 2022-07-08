import { Button, useMediaQuery } from "@chakra-ui/react"
import {
    BackgroundImage,
    ButtonContainer,
    ContainerText,
    HomeBG,
    HomeContainer,
    HomeMain,
    ImgContainer
} from "./style"
import logo from "./img/logo.svg"
import logoMobile from "./img/logo_mobile.svg"

function Home() {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)")

    return (
        <HomeBG>
            {isLargerThan768 && (
                <ButtonContainer>
                    <Button
                        variant="outline"
                        borderColor="#181818"
                        color="#181818"
                        p="5px 25px"
                        boxShadow="dark-lg"
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
                        boxShadow="dark-lg"
                        fontWeight="700"
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
                        borderColor="#DA4167"
                        bgColor="#DA4167"
                        color="#FAFAFA"
                        p="5px 20px"
                        boxShadow="dark-lg"
                        fontWeight="700"
                        fontSize="22px"
                        _hover={{
                            bgColor: "#A6324F",
                            borderColor: "#A6324F"
                        }}
                    >
                        Sobre nós ♥
                    </Button>
                </ButtonContainer>
            )}
            <HomeMain>
                <HomeContainer>
                    <ContainerText>
                        <ImgContainer>
                            <img src={logoMobile} alt="Logo" />
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
                    {!isLargerThan768 && (
                        <ButtonContainer>
                            <Button
                                variant="outline"
                                borderColor="#181818"
                                color="#181818"
                                padding="20px 35px"
                                fontSize="20px"
                                w="40vw"
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
                                padding="20px 35px"
                                fontSize="20px"
                                w="40vw"
                                boxShadow="dark-lg"
                                fontWeight="700"
                                _hover={{
                                    bgColor: "#A6324F",
                                    borderColor: "#A6324F"
                                }}
                            >
                                Cadastro
                            </Button>
                        </ButtonContainer>
                    )}
                    {!isLargerThan768 && (
                        <>
                            <Button
                                border="2px"
                                borderColor="#DA4167"
                                padding="20px 0px"
                                fontSize="18px"
                                fontWeight="700"
                                bgColor="#DA4167"
                                color="#FAFAFA"
                                w="100%"
                                boxShadow="dark-lg"
                                _hover={{
                                    bgColor: "#A6324F",
                                    borderColor: "#A6324F"
                                }}
                            >
                                Veja o que nossos clientes dizem
                            </Button>
                            <Button
                                border="2px"
                                borderColor="#DA4167"
                                padding="20px 35px"
                                fontSize="20px"
                                fontWeight="700"
                                bgColor="#DA4167"
                                color="#FAFAFA"
                                w="100%"
                                boxShadow="dark-lg"
                                _hover={{
                                    bgColor: "#A6324F",
                                    borderColor: "#A6324F"
                                }}
                            >
                                Sobre nós ♥
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
