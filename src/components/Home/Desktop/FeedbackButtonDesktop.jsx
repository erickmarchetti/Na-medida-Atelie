import { Button } from "@chakra-ui/react"

export function FeedbackButtonDesktop(props) {
    return (
        <Button
            border="2px"
            borderColor="#DA4167"
            fontSize="20px"
            fontWeight="700"
            bgColor="#DA4167"
            color="#FAFAFA"
            _active={false}
            onClick={() => props.push("/avaliacoes")}
            w="350px"
            minH="60px"
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
