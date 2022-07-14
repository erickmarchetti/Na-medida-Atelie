import styled, { keyframes } from "styled-components"
import homeBackground from "../../assets/Images/layer.png"

export const HomeBG = styled.div`
    background-color: var(--BackgroundColor-Main);
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
        height: 87vh;
        width: 60%;
    }
`
const InitialAnimation = keyframes`
  from {
    transform: translateX(-500px);
  }
  to {
    transform: translateX(0);
  }

`

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    height: 100%;

    h1 {
        font-size: 2.2em;
        font-weight: 700;
        color: var(--Color-Primary-Main);
        font-family: "Roboto", sans-serif;
        text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    }
    h2 {
        font-weight: 700;
        font-size: 2rem;
        color: var(--Grey-4);
        font-family: "Dancing Script", cursive;
        text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    }

    @media (min-width: 768px) {
        text-align: left;
        padding: 1.5rem 0;
        justify-content: space-between;
        max-height: 50rem;
        animation: ${InitialAnimation} 0.5s;
        h1 {
            font-size: 4vw;
        }

        h2 {
            font-size: 40px;
        }
    }
    @media (min-width: 1920px) {
        font-size: 5.5rem;
    }
`

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    img {
    }

    @media (min-width: 768px) {
        justify-content: unset;

        img {
            width: 27rem;
        }
    }
`

export const BackgroundImage = styled.div`
    background-image: url(${homeBackground});
    background-size: cover;
    position: relative;
    right: 0;
    top: -10vh;
    width: 40%;
    height: 100vh;
    z-index: -1;
    display: none;

    @media (min-width: 768px) {
        display: block;
    }
`
