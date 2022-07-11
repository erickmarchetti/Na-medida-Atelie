import styled from "styled-components"

export const PedidosBG = styled.div`
    font-family: "Nunito";
`

export const PedidosMain = styled.main`
    padding: 17px 25px;
    display: flex;
    flex-direction: column;
    gap: 28px;

    h1 {
        font-weight: 700;
        font-size: 40px;
        text-align: center;
    }
`

export const PedidosContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const PedidosCard = styled.div`
    border: 2px solid #181818;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 30%;
    border-radius: 10px;
    justify-content: space-between;
    height: 65vh;
    gap: 23px;

    h2 {
        font-weight: 700;
        font-size: 25px;
        text-align: center;
    }
`

export const FormSection = styled.div`
    display: flex;
    flex-direction: ${(props) =>
        props.direction === "column" ? "column" : "row"};
    width: 100%;
    justify-content: space-between;
    flex: ${(props) => props.flex || "unset"};
    select,
    input {
        border: 1px solid #181818;
        width: ${(props) => (props.direction === "column" ? "100%" : "50%")};
        height: ${(props) => props.direction && "100%"};
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`
