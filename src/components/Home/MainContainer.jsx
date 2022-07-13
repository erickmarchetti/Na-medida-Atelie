import { ContainerText, ImgContainer } from "../../pages/Home/style"
import logo from "../../assets/Images/logo_mobile.svg"
import { FeedbackButtonDesktop } from "../../components/Home/Desktop/FeedbackButtonDesktop"

export function MainContainer(props) {
    return (
        <ContainerText>
            <ImgContainer>
                <img src={logo} alt="Logo" />
            </ImgContainer>
            <h1>O seu site de roupas sob medidas</h1>
            <h2>De forma simples e prática.</h2>
            {props.isLargerThan768 && (
                <FeedbackButtonDesktop
                    push={props.push}
                ></FeedbackButtonDesktop>
            )}
        </ContainerText>
    )
}
