import { Flex, Image } from "@chakra-ui/react"
import estrela from "../../assets/Images/estrela.svg"
import { RoundBorder, StyledCard } from "./style"

function CardAvaliacao({ avaliacao }) {
    return (
        <StyledCard>
            <RoundBorder>
                <Image
                    src={avaliacao.user.avatar}
                    backg
                    alt="vai ter um nome ainda"
                />
            </RoundBorder>

            <h2>{avaliacao.user.name}</h2>

            <Flex gap="3px">
                <Image src={estrela} w="12px" h="12px" />
                <Image src={estrela} w="12px" h="12px" />
                <Image src={estrela} w="12px" h="12px" />
                <Image src={estrela} w="12px" h="12px" />
                <Image src={estrela} w="12px" h="12px" />
            </Flex>

            <p>{avaliacao.comentario}</p>
        </StyledCard>
    )
}

export default CardAvaliacao
