import { Button } from "@chakra-ui/react"

export function FeedbackButtonDesktop(props) {
    return (
        <Button
            border="2px"
            borderColor="var(--Color-Primary-Main)"
            fontSize="20px"
            fontWeight="700"
            bgColor="var(--Color-Primary-Main)"
            color="var(--White)"
            _active={false}
            onClick={() => props.push("/avaliacoes")}
            w="350px"
            minH="60px"
            boxShadow="dark-lg"
            _hover={{
                bgColor: "var(--Color-Primary-Dark)",
                borderColor: "var(--Color-Primary-Dark)"
            }}
        >
            Veja o que nossos clientes dizem
        </Button>
    )
}
