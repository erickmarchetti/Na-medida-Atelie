import styled from "styled-components"

export const StyledAvaliacoes = styled.main`
    width: 100%;
    height: calc(100vh - 76px);
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;

    h1 {
        width: 100%;
        height: fit-content;
        font-size: 38px;

        text-align: center;
        font-weight: 600;

        color: var(--BackgroundColor-Main);
        text-shadow: 3px 3px 3px var(--Color-Primary-Dark);
    }

    @media (min-width: 768px) {
        h1 {
            font-size: 38px;
        }
    }
`
