import styled from "styled-components"

export const StyledHeader = styled.header`
    width: 100%;
    height: 76px;

    background-color: var(--Grey-1);
    box-shadow: 0px 4px 4px 0px #00000040;

    display: flex;
    justify-content: center;
    align-items: center;

    span {
        font-size: 23px;
        font-weight: 800;
        font-family: "Nunito", sans-serif;

        color: var(--Title-Header);
        text-shadow: 0px 4px 4px #00000040;
    }

    transition: 0.3s;

    @media (max-width: 450px) {
        height: 70px;

        span {
            font-size: 15px;
        }

        .restoNome {
            display: none;
        }
    }
`
