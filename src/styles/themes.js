import { extendTheme } from "@chakra-ui/react"

const customTheme = {
    styles: {
        global: {
            "html, body": {
                fontFamily: "Nunito"
            }
        }
    }
}

const breakpoints = {
    sm: "20em",
    md: "48em",
    lg: "64em",
    xl: "80em",
    "2xl": "96em"
}

const theme = extendTheme({ customTheme, breakpoints })

export default theme
