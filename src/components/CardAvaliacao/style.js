import styled from "styled-components"

export const StyledCard = styled.li`
    font-family: "Nunito", sans-serif;

    width: 84.6875vw;
    min-width: 271px;
    border-radius: 10px;
    padding: 0 18px 18px 18px;
    min-height: 100%;
    max-height: 280px;

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
        flex: 1;
        width: auto;
        overflow-y: auto;
    }

    @media (min-width: 768px) {
        min-width: 377px;
        max-width: 377px;

    }
`

export const RoundBorder = styled.div`
    border-radius: 100%;
    border: 2px solid #000000;
    position: absolute;

    transform: translatey(-50%);
    overflow: hidden;
    width: 80px;
    height: 80px;

    right: 7%;
    top: 0%;
    display: flex;
    justify-content: center;
    background-color: #000000;
    z-index: 1000;

    @media (min-width: 768px) {
        width: 100px;
        height: 100px;
    }
`
