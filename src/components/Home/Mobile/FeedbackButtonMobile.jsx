import { Button } from "@chakra-ui/react"

export function FeedbackButtonMobile(props) {
    return (
        <Button
            border="2px"
            borderColor="var(--Color-Primary-Main)"
            padding="20px 0px"
            fontSize="18px"
            fontWeight="700"
            _active={false}
            bgColor="var(--Color-Primary-Main)"
            color="var(--White)"
            onClick={() => props.push("/avaliacoes")}
            w="100%"
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
