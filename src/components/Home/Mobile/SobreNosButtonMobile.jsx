import { Button } from "@chakra-ui/react"
import { AiFillHeart } from "react-icons/ai"

export function SobreNosButtonMobile(props) {
    return (
        <Button
            border="2px"
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
            padding="20px 35px"
            fontSize="20px"
            fontWeight="700"
            onClick={() => props.setSobreNos(!props.sobreNos)}
            w="100%"
            _active={false}
        >
            {props.sobreNos ? "Voltar" : "Sobre nós"}

            <AiFillHeart color={props.sobreNos ? "#DA4167" : "#FAFAFA"} />
        </Button>
    )
}
