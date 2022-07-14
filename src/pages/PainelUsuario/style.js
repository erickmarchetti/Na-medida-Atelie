import styled from "styled-components"
import bgImg from "../../assets/Images/custommadework.svg"

export const UsuarioBG = styled.div`
    max-width: 100vw;
    font-family: "Nunito";
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
    justify-content: center;
    gap: 5rem;
`

export const ContainerPedidos = styled.div`
    width: 90%;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 0 auto 1rem;
    h1 {
        text-align: left;
        font-weight: 700;
        font-size: 30px;
    }

    p {
        text-align: center;
        font-size: 55px;
        color: var(--Grey-3);
        max-width: 570px;
        margin: auto;
    }
`

export const ListaPedidos = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    overflow-x: scroll;
    width: 100%;
    padding: 0.2rem 0;
    ::-webkit-scrollbar {
        height: 7px;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px var(--Grey-3);
        border-radius: 10px;
        margin: 0.5rem;
    }
    ::-webkit-scrollbar-thumb {
        background: var(--Grey-3);
        border-radius: 10px;
        opacity: 0.1;
    }
`

export const Item = styled.div`
    min-width: 380px;
    height: 190px;
    background-color: var(--BackgroundColor-Main);
    border: 2px solid var(--BackgroundColor-Black);
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
        color: var(--BackgroundColor-Black);
        text-transform: capitalize;
    }

    h5 {
        font-weight: 700;
        color: var(--Green);
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
        color: var(--Black);
    }

    h4 {
        font-size: 15px;
        font-weight: 700;
        color: var(--Grey-3);
    }
`

export const ItemStatus = styled.div`
    background-color: var(--BlueLigth);
    font-size: 12px;
    width: 60%;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`
