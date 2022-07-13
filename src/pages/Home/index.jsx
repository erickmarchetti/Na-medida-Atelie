import { useMediaQuery } from "@chakra-ui/react"
import {
    BackgroundImage,
    ButtonContainer,
    HomeBG,
    HomeContainer,
    HomeMain
} from "./style"
import { useHistory } from "react-router-dom"
import { useState, useContext } from "react"
import { LoginButtonDesktop } from "../../components/Home/Desktop/LoginButtonDesktop"
import { CadastroButtonDesktop } from "../../components/Home/Desktop/CadastroButtonDesktop"
import { SobreNosButtonDesktop } from "../../components/Home/Desktop/SobreNosButtonDesktop"
import { SobreNosContainer } from "../../components/Home/SobreNosContainer"
import { MainContainer } from "../../components/Home/MainContainer"
import { LoginButtonMobile } from "../../components/Home/Mobile/LoginButtonMobile"
import { CadastroButtonMobile } from "../../components/Home/Mobile/CadastroButtonMobile"
import { FeedbackButtonMobile } from "../../components/Home/Mobile/FeedbackButtonMobile"
import { SobreNosButtonMobile } from "../../components/Home/Mobile/SobreNosButtonMobile"
import { UserContext } from "../../providers/user"
import { useEffect } from "react"

function Home() {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
    const [sobreNos, setSobreNos] = useState(false)
    const history = useHistory()

    const { pegarToken } = useContext(UserContext)

    useEffect(() => {
        !!pegarToken() && history.push("/login")
    }, [])

    return (
        <>
            {!pegarToken() && (
                <HomeBG>
                    {isLargerThan768 && (
                        <ButtonContainer>
                            {!sobreNos && (
                                <LoginButtonDesktop
                                    push={history.push}
                                ></LoginButtonDesktop>
                            )}
                            {!sobreNos && (
                                <CadastroButtonDesktop
                                    push={history.push}
                                ></CadastroButtonDesktop>
                            )}
                            <SobreNosButtonDesktop
                                sobreNos={sobreNos}
                                setSobreNos={setSobreNos}
                            ></SobreNosButtonDesktop>
                        </ButtonContainer>
                    )}
                    <HomeMain>
                        <HomeContainer>
                            {sobreNos ? (
                                <SobreNosContainer />
                            ) : (
                                <MainContainer
                                    isLargerThan768={isLargerThan768}
                                    push={history.push}
                                ></MainContainer>
                            )}

                            {!isLargerThan768 && !sobreNos && (
                                <ButtonContainer>
                                    <LoginButtonMobile
                                        push={history.push}
                                    ></LoginButtonMobile>
                                    <CadastroButtonMobile
                                        push={history.push}
                                    ></CadastroButtonMobile>
                                </ButtonContainer>
                            )}
                            {!isLargerThan768 && (
                                <>
                                    {!sobreNos && (
                                        <FeedbackButtonMobile
                                            push={history.push}
                                        ></FeedbackButtonMobile>
                                    )}
                                    <SobreNosButtonMobile
                                        sobreNos={sobreNos}
                                        setSobreNos={setSobreNos}
                                    ></SobreNosButtonMobile>
                                </>
                            )}
                        </HomeContainer>
                        {isLargerThan768 && <BackgroundImage />}
                    </HomeMain>
                </HomeBG>
            )}
        </>
    )
}

export default Home
