import { Button } from "@chakra-ui/react"

export function CadastroButtonDesktop(props) {
    return (
        <Button
            variant="outline"
            borderColor="#DA4167"
            bgColor="#DA4167"
            color="#FAFAFA"
            p="5px 30px"
            onClick={() => props.push("/register")}
            boxShadow="dark-lg"
            fontWeight="700"
            _active={false}
            fontSize="22px"
            _hover={{
                bgColor: "#A6324F",
                borderColor: "#A6324F"
            }}
        >
            Cadastro
        </Button>
    )
}
