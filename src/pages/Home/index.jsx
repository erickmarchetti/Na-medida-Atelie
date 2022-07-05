import { Button } from "@chakra-ui/react"
import {
    BackgroundImage,
    ContainerText,
    HomeBG,
    HomeContainer,
    HomeHeader,
    HomeMain,
    ImgContainer
} from "./style"
import logo from "./img/logo.png"

function Home() {
    return (
        <HomeBG>
            <HomeHeader>
                <Button
                    variant="outline"
                    borderColor="#181818"
                    color="#181818"
                    w="135px"
                    h="40px"
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
                    w="135px"
                    h="40px"
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
            </HomeHeader>
            <HomeMain>
                <HomeContainer>
                    <ImgContainer>
                        <img src={logo} alt="Logo" />
                    </ImgContainer>
                    <ContainerText>
                        <h1>O seu site de roupas sob medidas</h1>
                        <h2>De forma simples e prática.</h2>
                    </ContainerText>
                    <Button
                        border="2px"
                        borderColor="#DA4167"
                        fontSize="20px"
                        fontWeight="700"
                        bgColor="#DA4167"
                        color="#FAFAFA"
                        w="350px"
                        h="60px"
                        boxShadow="dark-lg"
                        _hover={{
                            bgColor: "#A6324F",
                            borderColor: "#A6324F"
                        }}
                    >
                        Veja o que nossos clientes dizem
                    </Button>
                </HomeContainer>
                <BackgroundImage></BackgroundImage>
            </HomeMain>
        </HomeBG>
    )
}

export default Home
