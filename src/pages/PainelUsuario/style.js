import styled from "styled-components"
import bgImg from "../../assets/Images/custommadework.svg"

export const UsuarioBG = styled.div`
    max-width: 100vw;
    font-family: "Nunito";

    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px black;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: #40e0d0;
        background: -webkit-linear-gradient(to top, #ff0080, #ff8c00, #40e0d0);
        background: linear-gradient(to top, #ff0080, #ff8c00, #40e0d0);
        border-radius: 10px;
        opacity: 0.1;
    }
`

export const ContainerMain = styled.div`
    height: calc(100vh - 76px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
`

export const BackgroundImg = styled.div`
    background-image: url(${bgImg});
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 50vh;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`

export const ContainerPedidos = styled.div`
    width: 90%;
    max-width: 1280px;
    min-height: calc(50vh - 98px);

    h1 {
        text-align: left;
        font-weight: 700;
        font-size: 30px;
    }
`

export const ListaPedidos = styled.div`
    height: 80%;
    display: flex;
    align-items: center;
    gap: 20px;
    overflow-x: scroll;
    width: 100%;
`

export const Item = styled.div`
    min-width: 380px;
    height: 190px;
    background-color: #fafafa;
    border: 2px solid #181818;
    border-radius: 25px;
    overflow: hidden;

    display: flex;
`

export const ItemImg = styled.img`
    width: 50%;
`

export const ItemDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    align-items: center;
    width: 50%;

    h2 {
        font-size: 30px;
        font-weight: 700;
        color: #181818;
    }

    h5 {
        font-weight: 700;
        color: #3cb371;
        font-size: 18px;
    }
`

export const ItemData = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 5px;
    h3 {
        font-size: 15px;
        font-weight: 700;
        color: #181818;
    }

    h4 {
        font-size: 15px;
        font-weight: 700;
        color: #ababab;
    }
`

export const ItemStatus = styled.div`
    background-color: #b2f5ea;
    font-size: 12px;
    width: 60%;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`
