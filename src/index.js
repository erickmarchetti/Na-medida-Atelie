import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import Providers from "./providers"
import "./index.css"

import { BrowserRouter } from "react-router-dom"
import GlobalStyle from "./styles/GlobalStyle"

import { ChakraProvider } from "@chakra-ui/react"
import theme from "./styles/themes"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Providers>
            <ChakraProvider theme={theme}>
                <BrowserRouter>
                    <GlobalStyle />
                    <App />
                </BrowserRouter>
            </ChakraProvider>
        </Providers>
    </React.StrictMode>
)
