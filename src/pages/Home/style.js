import styled from "styled-components"
import homeBackground from "./img/layer.png"

export const HomeBG = styled.div`
    background-color: #fafafa;
    position: absolute;
    z-index: -2;
    width: 100vw;
    font-family: "Nunito", sans-serif;
`

export const ButtonContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: unset;
    width: 100%;

    @media (min-width: 768px) {
        justify-content: unset;
        height: 10vh;
        background-color: rgba(0, 0, 0, 0);
        gap: 40px;
        padding-left: 100px;
        width: 100vw;
    }
`

export const HomeMain = styled.main`
    padding: 25px;
    display: flex;

    @media (min-width: 768px) {
        height: 90vh;
        padding: 0;
        padding-left: 100px;
        justify-content: space-between;
    }
`

export const HomeContainer = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    gap: 20px;

    @media (min-width: 768px) {
        align-items: unset;
        min-width: 365px;
        height: 90vh;
        width: 40vw;
    }
`
export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    text-align: center;
    height: 100%;

    h1 {
        font-size: 2.2em;
        font-weight: 700;
        color: #da4167;
        font-family: "Roboto", sans-serif;
        text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    }
    h2 {
        font-weight: 700;
        font-size: 2rem;
        color: #6b6b6b;
        font-family: "Dancing Script", cursive;
        text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    }

    @media (min-width: 768px) {
        text-align: left;
        padding: 80px 0;
        justify-content: space-between;

        h1 {
            font-size: 50px;
        }

        h2 {
            font-size: 40px;
        }
    }
`
export const ContainerText1280 = styled.div``

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    img {
    }

    @media (min-width: 768px) {
        justify-content: unset;

        img {
            height: 250px;
        }
    }
`

export const BackgroundImage = styled.div`
    background-image: url(${homeBackground});
    background-size: cover;
    position: relative;
    right: 0;
    top: -10vh;
    width: 40vw;
    height: 100vh;
    z-index: -1;
    display: none;

    @media (min-width: 768px) {
        display: block;
    }
`
