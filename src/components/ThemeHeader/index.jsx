import { Flex, Image } from "@chakra-ui/react"
import logo from "../../Images/logo.svg"

import { StyledHeader } from "./style.js"

function ThemeHeader() {
    const nomeCompleto = "Icaro algo da algo"
    const primeiroNome = nomeCompleto.split(" ")[0]
    const restoNome = nomeCompleto.split(" ").slice(1).join(" ")

    return (
        <StyledHeader>
            <Flex
                w="90%"
                maxW="1280px"
                h="full"
                flexFlow="row nowrap"
                justifyContent="space-between"
                alignItems="center"
            >
                <Image
                    src={logo}
                    alt="Na medida ateliê"
                    w={{ base: "78.55px", sm: "126.75px" }}
                    h={{ base: "38.88", sm: "52.08px" }}
                    onClick={() => window.location.reload()}
                />

                {true && (
                    <Flex
                        h="full"
                        flexFlow="row nowrap"
                        alignItems="center"
                        gap="9px"
                    >
                        <span>{primeiroNome}</span>
                        {!!restoNome && (
                            <span className="restoNome">{restoNome}</span>
                        )}

                        <Image
                            src="https://images5.alphacoders.com/836/836289.jpg"
                            w={{ base: "30px", sm: "50px" }}
                            h={{ base: "30px", sm: "50px" }}
                            objectFit="cover"
                            borderRadius="100%"
                        />
                    </Flex>
                )}
            </Flex>
        </StyledHeader>
    )
}

export default ThemeHeader
