import styled from "styled-components"

export const DivContainerLogin = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100vw;
    .imgHomem {
        img {
            height: 100vh;
        }
    }
    .divFormulario {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
        h1 {
            font-family: "Nunito";
            font-style: normal;
            font-weight: 700;
            font-size: 40px;
            line-height: 55px;
            margin-bottom: 50px;
            color: #181818;
        }
    }
    .form {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 458px;
        height: 460px;
        padding: 30px;
        border-radius: 6px;
        background: #fafafa;
        border: 3px solid #181818;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 17px;
        label {
            width: 100%;
            margin: 0;
            font-family: "Roboto";
            font-style: normal;
            font-weight: 500;
            color: #000000;
        }
        input {
            background: #eaeaea;
            border: 2px solid #6b6b6b;
            border-radius: 5px;
        }
        .butonLogin {
            width: 279px;
            height: 65px;
            background-color: #fafafa;
            border: 2px solid #181818;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
        }
        h2 {
            font-family: "Nunito";
            font-style: normal;
            font-weight: 700;
            font-size: 40px;
            line-height: 55px;
            color: #181818;
        }
        p {
            font-family: "Nunito";
            font-style: normal;
            font-weight: 700;
            line-height: 26px;
            color: #181818;
        }
        a {
            color: #d70402;
        }
    }
    .loginForm {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`

export const DivHeaderLogin = styled.header`
    padding: 0 1rem 0 0;
    max-width: 100vw;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    background-color: transparent;
    z-index: 2000;

    img {
        height: 77px;
        margin-left: 60px;
        transform: scale(2);
    }
`
