import styled from "styled-components"

export const HomeBG = styled.div`
    background-color: #fafafa;
    position: absolute;
    z-index: -2;
`

export const HomeHeader = styled.header`
    background-color: rgba(0, 0, 0, 0);
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    font-family: "Nunito", sans-serif;
`
export const HomeMain = styled.main`
    height: 90vh;
    display: flex;
    justify-content: center;
    font-family: "Nunito", sans-serif;
`

export const HomeContainer = styled.div`
    margin-left: 100px;
    flex: 1;
    font-family: "Nunito", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-size: 70px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-weight: 700;
        color: #da4167;
    }

    h2 {
        font-weight: 700;
        font-size: 35px;
        color: #6b6b6b;
        flex: 1;
    }
`

export const ImgContainer = styled.div`
    display: flex;
    align-items: flex-end;
    flex: 1;

    img {
        width: 60%;
    }
`

export const BackgroundImage = styled.div`
    background-image: url("https://cdn-icons-png.flaticon.com/512/5110/5110429.png");
    flex: 1;
    position: relative;
    right: 0;
    top: -10vh;
    height: 100vh;
    width: 50vw;
    z-index: -1;
`
