import { Button } from "@chakra-ui/react"

export function CadastroButtonDesktop(props) {
    return (
        <Button
            variant="outline"
            borderColor="var(--Color-Primary-Main)"
            bgColor="var(--Color-Primary-Main)"
            color="var(--White)"
            p="5px 30px"
            onClick={() => props.push("/register")}
            boxShadow="dark-lg"
            fontWeight="700"
            _active={false}
            fontSize="22px"
            _hover={{
                bgColor: "var(--Color-Primary-Dark)",
                borderColor: "var(--Color-Primary-Dark)"
            }}
        >
            Cadastro
        </Button>
    )
}
