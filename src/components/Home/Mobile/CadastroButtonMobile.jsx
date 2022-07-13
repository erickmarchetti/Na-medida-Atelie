import { Button } from "@chakra-ui/react"

export function CadastroButtonMobile(props) {
    return (
        <Button
            variant="outline"
            borderColor="#DA4167"
            bgColor="#DA4167"
            color="#FAFAFA"
            _hover={{
                bgColor: "#A6324F",
                borderColor: "#A6324F"
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
