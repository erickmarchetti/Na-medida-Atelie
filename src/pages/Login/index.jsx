import {
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputRightElement
} from "@chakra-ui/react"
import { useState } from "react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import custom from "../../Images/custom.png"
import { DivContainerLogin } from "./styledLogin"
import HeaderLogin from "./headerLogin"
export default function Login() {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return (
        <>
            <HeaderLogin />
            <DivContainerLogin>
                <div className="imgHomem">
                    <img src={custom} alt="custom" />
                </div>

                <div className="divFormulario">
                    <div>
                        <h1>É um prazer ver você novamente</h1>
                    </div>

                    <FormControl className="form">
                        <div className="loginForm">
                            <h2>LOGIN</h2>
                        </div>

                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Insira seu Email"
                        />
                        <FormLabel htmlFor="senha">Senha</FormLabel>
                        <InputGroup>
                            <InputRightElement>
                                <IconButton
                                    bg="transparent"
                                    onClick={handleClick}
                                    icon={show ? <ViewOffIcon /> : <ViewIcon />}
                                />
                            </InputRightElement>
                            <Input
                                id="password"
                                type={show ? "text" : "password"}
                                placeholder="**********"
                            />
                        </InputGroup>

                        <Button className="butonLogin" type="submit">
                            Login
                        </Button>
                        <p>
                            Não possui uma conta?
                            <a href="/cadastro">Cadastre-se</a>
                        </p>
                    </FormControl>
                </div>
            </DivContainerLogin>
        </>
    )
}
