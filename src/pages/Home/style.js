import styled from "styled-components"
import homeBackground from "./img/layer.png"

export const HomeBG = styled.div`
    background-color: #fafafa;
    position: absolute;
    z-index: -2;
    width: 100vw;
`

export const HomeHeader = styled.header`
    background-color: rgba(0, 0, 0, 0);
    height: 10vh;
    display: flex;
    align-items: center;
    gap: 80px;
    font-family: "Nunito", sans-serif;
    width: 100vw;
    padding-left: 100px;
`
export const HomeMain = styled.main`
    height: 90vh;
    display: flex;
    justify-content: space-between;
    font-family: "Nunito", sans-serif;
`

export const HomeContainer = styled.div`
    margin-left: 100px;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40vw;
`
export const ContainerText = styled.div`
    h1 {
        font-size: 70px;
        min-width: 638px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-weight: 700;
        color: #da4167;
        font-family: "Roboto", sans-serif;
        text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    }
    h2 {
        font-weight: 700;
        font-size: 50px;
        color: #6b6b6b;
        font-family: "Dancing Script", cursive;
        text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
        max-width: fit-content;
    }
`

export const ImgContainer = styled.div`
    display: flex;
    align-items: flex-end;

    img {
        height: 80%;
    }
`

export const BackgroundImage = styled.div`
    background-image: url(${homeBackground});
    background-size: cover;
    position: relative;
    right: 0;
    top: -10vh;
    width: 50vw;
    height: 100vh;
    z-index: -1;
`
