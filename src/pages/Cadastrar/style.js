import styled from "styled-components"

export const ImgLogo = styled.img`
    display: flex;
    width: 8rem;
    justify-self: flex-start;
    margin: 0 2.5rem 1rem 2.5rem;
    align-self: center;
    cursor: pointer;
    transition: 0.5s cubic-bezier(0.68, 0.09, 0.33, 1.01);
    :hover {
        transform: scale(1.1);
        transition: 0.5s cubic-bezier(0.68, 0.09, 0.33, 1.01);
    }

    @media (min-width: 1024px) {
        align-self: flex-end;
    }
`
export const DivContainerCadastro = styled.div`
    .botaoLogin {
        :hover {
            cursor: pointer;
        }
    }
`

export const BGImage = styled.div`
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: left;
    display: none;
    z-index: 9999;

    @media (min-width: 1024px) {
        display: block;
        position: sticky;
        height: 100vh;
        width: 680px;
        max-height: 937px;
        z-index: 1;
    }
`
