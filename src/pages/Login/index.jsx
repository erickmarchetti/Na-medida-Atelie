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
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import custom from "../../Images/custom.png"
import { DivContainerLogin, DivHeaderLogin } from "./style"
import logo from "../../Images/logo.svg"

import { useContext } from "react"
import { UserContext } from "../../providers/user"

export default function Login() {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const validacoesYup = yup.object().shape({
        email: yup
            .string()
            .required(" Preencher campo Email é obrigatorio!")
            .email("Email inválido"),
        password: yup
            .string()
            .required("Preencher campo senha é obrigatório!")
            .matches(
                "^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$",
                "Formato de senha incorreto ! São necessarios 8 caracteres, ter letras maiúsculas e minúsculas, números e ao menos um símbolo"
            )
    })
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(validacoesYup) })

    function registro() {}

    return (
        <>
            <DivHeaderLogin>
                <img src={logo} alt="Na Medida Ateliê" />
            </DivHeaderLogin>

            <DivContainerLogin>
                <div className="imgHomem">
                    <img src={custom} alt="custom" />
                </div>

                <div className="divFormulario">
                    <div>
                        <h1>É um prazer ver você novamente</h1>
                    </div>
                    <form onSubmit={handleSubmit(registro)}>
                        <FormControl className="form">
                            <div className="loginForm">
                                <h2>LOGIN</h2>
                            </div>

                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Insira seu Email"
                                {...register("email")}
                            />
                            <div>
                                {errors.name && (
                                    <FormHelperText>
                                        {errors.name.message}
                                    </FormHelperText>
                                )}
                            </div>

                            <FormLabel htmlFor="senha">Senha</FormLabel>
                            <InputGroup>
                                <InputRightElement>
                                    <IconButton
                                        bg="transparent"
                                        onClick={handleClick}
                                        icon={
                                            show ? (
                                                <ViewOffIcon />
                                            ) : (
                                                <ViewIcon />
                                            )
                                        }
                                    />
                                </InputRightElement>
                                <Input
                                    id="password"
                                    type={show ? "text" : "password"}
                                    placeholder="**********"
                                    {...register("password")}
                                />
                            </InputGroup>
                            <div>
                                {errors.name && (
                                    <FormHelperText>
                                        {errors.name.message}
                                    </FormHelperText>
                                )}
                            </div>

                            <Button className="butonLogin" type="submit">
                                Login
                            </Button>
                            <p>
                                Não possui uma conta?
                                <a href="/cadastro">Cadastre-se</a>
                            </p>
                        </FormControl>
                    </form>
                </div>
            </DivContainerLogin>
        </>
    )
}
