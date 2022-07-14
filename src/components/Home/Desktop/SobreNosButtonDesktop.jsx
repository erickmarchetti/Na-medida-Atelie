import { Button } from "@chakra-ui/react"
import { AiFillHeart } from "react-icons/ai"

export function SobreNosButtonDesktop(props) {
    return (
        <Button
            variant="outline"
            borderColor={
                props.sobreNos
                    ? "var(--BackgroundColor-Black)"
                    : "var(--Color-Primary-Main)"
            }
            bgColor={
                props.sobreNos
                    ? "var(--BackgroundColor-Main)"
                    : "var(--Color-Primary-Main)"
            }
            color={
                props.sobreNos
                    ? "var(--BackgroundColor-Black)"
                    : "var(--BackgroundColor-Main)"
            }
            _hover={
                props.sobreNos
                    ? {
                          textDecoration: "underline"
                      }
                    : {
                          bgColor: "var(--Color-Primary-Dark)",
                          borderColor: "var(--Color-Primary-Dark)"
                      }
            }
            borderWidth={2}
            p="5px 20px"
            boxShadow="dark-lg"
            onClick={() => props.setSobreNos(!props.sobreNos)}
            fontWeight="700"
            fontSize="22px"
            _active={false}
        >
            {props.sobreNos ? "Voltar" : "Sobre nós"}

            <AiFillHeart
                fontSize="18px"
                color={
                    props.sobreNos
                        ? "var(--Color-Primary-Main)"
                        : "var(--BackgroundColor-Main)"
                }
            />
        </Button>
    )
}
