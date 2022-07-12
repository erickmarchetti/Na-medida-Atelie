import { Flex, Image } from "@chakra-ui/react"
import estrela from "../../assets/Images/estrela.svg"
import { StyledCard } from "./style"

function CardAvaliacao({ avaliacao }) {
    return (
        <StyledCard>
            <Image
                src="https://images5.alphacoders.com/836/836289.jpg"
                alt="vai ter um nome ainda"
                w="50px"
                h="50px"
                borderRadius="100%"
                border="2px solid #000000"
                position="absolute"
                right={{ base: "11px", lg: "16px" }}
                transform="translatey(-50%)"
            />

            <h2>Pedro</h2>

            <Flex gap="3px">
                <Image src={estrela} w="12px" h="12px" />
                <Image src={estrela} w="12px" h="12px" />
                <Image src={estrela} w="12px" h="12px" />
                <Image src={estrela} w="12px" h="12px" />
                <Image src={estrela} w="12px" h="12px" />
            </Flex>

            <p>
                Tenho um gosto considerado peculiar para me vestir e não
                encontrava nas lojas convencionais peças que me agradavam. Com o
                ateliê Na Medida esse problema acabou. Agora tenho sempre a peça
                do meu jeito, feita especialmente para mim.{" "}
            </p>
        </StyledCard>
    )
}

export default CardAvaliacao
