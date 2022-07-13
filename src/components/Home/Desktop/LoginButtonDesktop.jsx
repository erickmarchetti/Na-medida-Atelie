import { Button } from "@chakra-ui/react"

export function LoginButtonDesktop(props) {
    return (
        <Button
            variant="outline"
            borderColor="#181818"
            color="#181818"
            borderWidth={2}
            p="5px 25px"
            boxShadow="dark-lg"
            _active={false}
            onClick={() => props.push("/login")}
            fontWeight="700"
            fontSize="22px"
            _hover={{
                textDecoration: "underline"
            }}
        >
            Login
        </Button>
    )
}
