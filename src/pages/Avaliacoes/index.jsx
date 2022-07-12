import { Flex, List } from "@chakra-ui/react"
import ThemeHeader from "../../components/ThemeHeader"
import { StyledAvaliacoes } from "./style.js"

import bgMobile from "../../assets/Images/bg-avaliacoes-mobile.svg"
import CardAvaliacao from "../../components/CardAvaliacao"

function Avaliacoes() {
    return (
        <>
            <ThemeHeader />

            <StyledAvaliacoes>
                <Flex
                    backgroundImage={bgMobile}
                    w="100%"
                    h="304px"
                    objectFit="fill"
                    justifyContent="center"
                    p="27px 0 0 0"
                >
                    <h1>Opiniões dos nossos clientes</h1>
                </Flex>

                <Flex h="392px" justifyContent="center" alignItems="center">
                    <List h="fit-content">
                        <CardAvaliacao />
                    </List>
                </Flex>
            </StyledAvaliacoes>
        </>
    )
}

export default Avaliacoes
