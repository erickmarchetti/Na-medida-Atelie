import { Button } from "@chakra-ui/react"

export function FeedbackButtonMobile(props) {
    return (
        <Button
            border="2px"
            borderColor="#DA4167"
            padding="20px 0px"
            fontSize="18px"
            fontWeight="700"
            _active={false}
            bgColor="#DA4167"
            color="#FAFAFA"
            onClick={() => props.push("/avaliacoes")}
            w="100%"
            boxShadow="dark-lg"
            _hover={{
                bgColor: "#A6324F",
                borderColor: "#A6324F"
            }}
        >
            Veja o que nossos clientes dizem
        </Button>
    )
}
