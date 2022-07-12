import styled from "styled-components"

export const ImgLogo = styled.img`
    display: flex;
    width: 9rem;
    justify-self: flex-start;
    margin: 0.5rem 3rem;
    align-self: center;
    cursor: pointer;
    transition: 0.5s cubic-bezier(0.68, 0.09, 0.33, 1.01);
    :hover {
        transform: scale(1.1);
        transition: 0.5s cubic-bezier(0.68, 0.09, 0.33, 1.01);
    }

    @media (min-width: 1024px) {
        align-self: flex-start;
    }
`
export const DivContainerCadastro = styled.div`
    .botaoLogin {
        :hover {
            cursor: pointer;
        }
    }
`
