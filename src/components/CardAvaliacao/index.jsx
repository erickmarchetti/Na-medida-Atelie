import { Flex, Image } from "@chakra-ui/react"
import estrela from "../../assets/Images/estrela.svg"
import { StyledCard } from "./style"

function CardAvaliacao({ avaliacao }) {
    return (
        <StyledCard>
            <Image
                src={avaliacao.user.avatar}
                alt="vai ter um nome ainda"
                w="50px"
                h="50px"
                borderRadius="100%"
                border="2px solid #000000"
                position="absolute"
                right={{ base: "11px", lg: "16px" }}
                transform="translatey(-50%)"
            />

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
