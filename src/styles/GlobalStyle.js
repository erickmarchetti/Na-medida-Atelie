import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;

    }

    body {
        font-family: 'Nunito', sans-serif;
        background-color: var(--BackgroundColor-Main)
    }

    :root {
        --Color-Primary-Light: #DF869C;
        --Color-Primary-Main: #DA4167;
        --Color-Primary-Dark: #A6324F;
        --Color-Secondary-Light: #FC7C32;
        --Color-Secondary-Main: #E65F39;
        --Color-Secondary-Dark: #FC4132;

        --Black: #000000;
        --White: #FFFFFF;
        --Red: #e53e3e;

        --Contrast-Text: #F23062;

        --BackgroundColor-Main: #FAFAFA;
        --BackgroundColor-Black: #181818;
        --Paper: #465362;

        --Title-Header: #D70402;

        --Green: #3CB371;
        --BlueLight: #b2f5ea


        --Grey-0: #F7F7F7;
        --Grey-1: #EAEAEA;
        --Grey-2: #D1D1D1;
        --Grey-3: #ABABAB;
        --Grey-4: #6B6B6B;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    ul, ol, li {
        list-style: none;
    }
`

export default GlobalStyle
