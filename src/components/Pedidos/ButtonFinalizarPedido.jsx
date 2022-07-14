import { Button } from "@chakra-ui/react"
import { ButtonContainer } from "../../pages/Pedidos/style"

export function ButtonFinalizarPedido() {
    return (
        <ButtonContainer>
            <Button
                w="280px"
                h="70px"
                bg="var(--Color-Primary-Main)"
                color="var(--White)"
                fontSize="25px"
                fontWeight="700"
                _hover={{
                    bgColor: "--Color-Primary-Dark",
                    borderColor: "--Color-Primary-Dark"
                }}
                type="submit"
            >
                Finalizar Pedido
            </Button>
        </ButtonContainer>
    )
}
