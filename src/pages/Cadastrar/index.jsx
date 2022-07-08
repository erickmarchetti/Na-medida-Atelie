import custommadewoman from "../../Images/custommadewoman.png"
// import { useHistory } from "react-router-dom"

import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import {
    Button,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Checkbox,
    FormHelperText
} from "@chakra-ui/react"
import { useState } from "react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import logo from "../../Images/logo.svg"
import { Formulario, Principal, HeaderPaginaCadastro } from "./style"

export default function Cadastro() {
    // const history = useHistory()
    const validacoesYup = yup.object().shape({
        name: yup.string().required("Preencher campo nome é obrigatório!"),
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
            ),
        passwordconfirm: yup
            .string()
            .required("confirmação de senha é obrigatório!")
            .oneOf([yup.ref("password")], "senha incorreta, tente novamente"),

        endereco: yup
            .string()
            .required("Preencher campo endereço é obrigatório!")
    })
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(validacoesYup) })

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const [showb, setShowb] = useState(false)
    const handleClickb = () => setShowb(!showb)

    function registro(data) {}
    return (
        <>
            <HeaderPaginaCadastro>
                <img src={logo} alt="Na Medida Ateliê" />
            </HeaderPaginaCadastro>

            <Principal>
                <div className="divImg">
                    <img src={custommadewoman} alt="custommadewoman" />
                </div>
                <Formulario>
                    <form onSubmit={handleSubmit(registro)}>
                        <FormControl
                            className="formControl"
                            w={"458px"}
                            border={"2px solid black"}
                            padding={"5px"}
                        >
                            <div className="tituloCadastro">
                                <h1>Cadastro</h1>
                            </div>
                            <FormLabel htmlFor="name">Nome</FormLabel>
                            <Input
                                id="name"
                                placeholder="Nome completo"
                                {...register("name")}
                            />
                            <div>
                                {errors.name && (
                                    <FormHelperText>
                                        {errors.name.message}
                                    </FormHelperText>
                                )}
                            </div>
                            <FormLabel htmlFor="name">Email</FormLabel>
                            <Input
                                id="email"
                                placeholder="Email@email.com"
                                {...register("email")}
                            />
                            <div>
                                {errors.email && (
                                    <FormHelperText>
                                        {errors.email.message}
                                    </FormHelperText>
                                )}
                            </div>
                            <FormLabel htmlFor="senha">Senha</FormLabel>
                            <InputGroup>
                                <InputRightElement>
                                    <IconButton
                                        bg="transparent"
                                        color="black"
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
                                {errors.password && (
                                    <FormHelperText>
                                        {errors.password.message}
                                    </FormHelperText>
                                )}
                            </div>
                            <FormLabel htmlFor="senha">
                                Confirmar senha
                            </FormLabel>
                            <InputGroup>
                                <InputRightElement>
                                    <IconButton
                                        bg="transparent"
                                        color="black"
                                        onClick={handleClickb}
                                        icon={
                                            showb ? (
                                                <ViewOffIcon />
                                            ) : (
                                                <ViewIcon />
                                            )
                                        }
                                    />
                                </InputRightElement>
                                <Input
                                    id="passwordconfirm"
                                    type={showb ? "text" : "password"}
                                    placeholder="**********"
                                    {...register("passwordconfirm")}
                                />
                            </InputGroup>
                            <div>
                                {errors.passwordconfirm && (
                                    <FormHelperText>
                                        {errors.passwordconfirm.message}
                                    </FormHelperText>
                                )}
                            </div>
                            <FormLabel htmlFor="name">Endereço</FormLabel>
                            <Input
                                id="endereco"
                                placeholder="Av.Copacabana Nº 1040"
                                {...register("endereco")}
                            />
                            <div>
                                {errors.endereco && (
                                    <FormHelperText>
                                        {errors.endereco.message}
                                    </FormHelperText>
                                )}
                            </div>
                            <FormLabel htmlFor="name">Avatar</FormLabel>
                            <Input
                                id="avatar"
                                placeholder="Url da imagem"
                                {...register("avatar")}
                            />

                            <Checkbox defaultChecked>
                                Li e Concodo com os
                                <a href="#"> termos de uso</a> e
                                <a href="#"> privacidade</a>.
                            </Checkbox>

                            <Button
                                className="botaoLog"
                                type="submit"
                                w={"297px"}
                                h={"65px"}
                                borderRadius={"10px"}
                                backgroundColor="#DA4167"
                                color="#fffff"
                            >
                                Cadastrar
                            </Button>
                        </FormControl>
                    </form>
                    <p>
                        Já possui conta? Faça o <a href="/login">login!</a>
                    </p>
                </Formulario>
            </Principal>
        </>
    )
}
