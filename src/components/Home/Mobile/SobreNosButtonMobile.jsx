import { Button } from "@chakra-ui/react"
import { AiFillHeart } from "react-icons/ai"

export function SobreNosButtonMobile(props) {
    return (
        <Button
            border="2px"
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
            padding="20px 35px"
            fontSize="20px"
            fontWeight="700"
            onClick={() => props.setSobreNos(!props.sobreNos)}
            w="100%"
            _active={false}
        >
            {props.sobreNos ? "Voltar" : "Sobre nós"}

            <AiFillHeart
                color={
                    props.sobreNos
                        ? "var(--Color-Primary-Main)"
                        : "var(--BackgroundColor-Main)"
                }
            />
        </Button>
    )
}
