import { Button } from "@chakra-ui/react"

export function CadastroButtonMobile(props) {
    return (
        <Button
            variant="outline"
            borderColor="var(--Color-Primary-Main)"
            bgColor="var(--Color-Primary-Main)"
            color="var(--White)"
            _hover={{
                bgColor: "var(--Color-Primary-Dark)",
                borderColor: "var(--Color-Primary-Dark)"
            }}
            padding="20px 35px"
            fontSize="20px"
            onClick={() => props.push("/register")}
            w="40vw"
            _active={false}
            boxShadow="dark-lg"
            fontWeight="700"
        >
            Cadastro
        </Button>
    )
}
