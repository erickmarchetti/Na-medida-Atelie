import { Button } from "@chakra-ui/react"
import { AiFillHeart } from "react-icons/ai"

export function SobreNosButtonDesktop(props) {
    return (
        <Button
            variant="outline"
            borderColor={props.sobreNos ? "#181818" : "#DA4167"}
            bgColor={props.sobreNos ? "#FAFAFA" : "#DA4167"}
            color={props.sobreNos ? "#181818" : "#FAFAFA"}
            _hover={
                props.sobreNos
                    ? {
                          textDecoration: "underline"
                      }
                    : {
                          bgColor: "#A6324F",
                          borderColor: "#A6324F"
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
                color={props.sobreNos ? "#DA4167" : "#FAFAFA"}
            />
        </Button>
    )
}
