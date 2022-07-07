import styled from "styled-components"

export const Principal = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: 100vw;

    .divImg img {
        height: 100vh;
    }

    @media (max-width: 1170px) {
        .divImg {
            display: none;
        }
        justify-content: center;
    }
`
export const Formulario = styled.div`
    margin-top: 100px;
    margin-right: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1170px) {
        margin-top: 90px;
        margin-right: 0;
    }
    .formControl {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 30px;
        margin: 10px;
        background: #fafafa;
        border: 3px solid #000000;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 17px;

        .tituloCadastro {
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }
    a {
        color: #0c8ce9;
    }
    label {
        width: 100%;
        margin: 0px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 500;

        color: #000000;
    }
    input {
        border: 2px solid #000000;
    }
    .botaoLog {
        font-family: "Nunito";
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 34px;
        color: #ffffff;
    }
    h1 {
        font-family: "Nunito";
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 55px;
        color: #181818;
    }
`

export const HeaderPaginaCadastro = styled.header`
    padding: 0 1rem 0 0;
    max-width: 100vw;
    display: flex;
    justify-content: flex-end;
    background-color: transparent;
    z-index: 2000;
    img {
        height: 77px;

        margin-right: 60px;
        transform: scale(2);
    }
`
