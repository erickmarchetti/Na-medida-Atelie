import styled from "styled-components"

export const StyledCard = styled.li`
    font-family: "Nunito", sans-serif;

    width: 84.6875vw;
    max-width: 377px;
    min-width: 271px;
    border-radius: 10px;
    padding: 0 18px 29px 18px;

    background-color: var(--Grey-1);
    color: #000000;
    border: 1.5px solid #000000;

    position: relative;

    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    gap: 16px;

    h2 {
        font-weight: 700;
        font-size: 25px;
        margin-top: 6px;
    }

    p {
        font-weight: 500;
        font-size: 12px;
        max-height: 102px;
        overflow-y: scroll;
    }
`
