import { Button } from "@chakra-ui/react"
import { ButtonContainer } from "../../pages/Pedidos/style"

export function HeaderPedidos(props) {
    return (
        <ButtonContainer>
            <h1>Novo pedido</h1>
            {props.isLargerThan768 && (
                <Button
                    w="280px"
                    h="70px"
                    bg="var(--Color-Primary-Main)"
                    color="var(--White)"
                    fontSize="25px"
                    fontWeight="700"
                    type="submit"
                    _hover={{
                        bgColor: "var(--Color-Primary-Dark)",
                        borderColor: "var(--Color-Primary-Dark)"
                    }}
                >
                    Finalizar Pedido
                </Button>
            )}
        </ButtonContainer>
    )
}
