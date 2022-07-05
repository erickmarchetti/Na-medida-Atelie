import { Button } from "@chakra-ui/react"
import {
    BackgroundImage,
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
                    border="2px"
                    borderColor="#6B6B6B"
                    color="#6B6B6B"
                    w="135px"
                    boxShadow="dark-lg"
                    fontWeight="bold"
                    _hover={{
                        bgColor: "#DA4167",
                        color: "#FAFAFA",
                        borderColor: "#FAFAFA"
                    }}
                >
                    Login
                </Button>
                <Button
                    border="2px"
                    borderColor="#FAFAFA"
                    bgColor="#DA4167"
                    color="#FAFAFA"
                    w="135px"
                    boxShadow="dark-lg"
                    fontWeight="bold"
                    _hover={{
                        bgColor: "#FAFAFA",
                        color: "#DA4167",
                        borderColor: "#DA4167"
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
                    <h1>O seu site de roupas sob medidas</h1>
                    <h2>De forma simples e prática.</h2>
                </HomeContainer>
                <BackgroundImage />
            </HomeMain>
        </HomeBG>
    )
}

export default Home
