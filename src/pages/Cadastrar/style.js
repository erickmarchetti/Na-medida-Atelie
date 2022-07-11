import styled from "styled-components"

export const ImgLogo = styled.img`
    display: flex;
    width: 9rem;
    justify-self: flex-start;
    margin: 0.5rem 3rem;
    align-self: center;
    cursor: pointer;
    :hover {
        border-bottom: dashed 2px coral;
    }
    :active {
        background-color: #d94167;
    }

    @media (min-width: 1024px) {
        align-self: flex-start;
    }
`
export const DivContainerCadastro = styled.div`
    .botaoLogin {
        :hover {
            cursor: pointer;
            border-bottom: dashed 2px coral;
        }
    }
`
