/* eslint-disable react-hooks/exhaustive-deps */
import custommadewoman from "../../assets/Images/custommadewoman.png"

import { Link, useHistory } from "react-router-dom"
import { toast } from "react-toastify"
import { motion } from "framer-motion"
import Api from "../../Api"

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
    FormHelperText,
    Stack,
    Heading,
    Text,
    Flex,
    Box
} from "@chakra-ui/react"
import { useState, useEffect, useContext } from "react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import logo from "../../assets/Images/logo.svg"
import { DivContainerCadastro, ImgLogo } from "./style"
import { UserContext } from "../../providers/user"

export default function Cadastro() {
    const history = useHistory()

    const { pegarToken } = useContext(UserContext)

    useEffect(() => {
        !!pegarToken() && history.push("/login")
    }, [])

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
                "Formato de senha incorreto! São necessarios 8 caracteres, ter letras maiúsculas e minúsculas, números e ao menos um símbolo"
            ),
        passwordConfirm: yup
            .string()
            .required("Confirmação de senha é obrigatório!")
            .oneOf([yup.ref("password")], "Senhas diferentes"),
        checkbox: yup
            .boolean()
            .oneOf([true], "Por favor, aceite os termos de serviço!")
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

    const [isLoading, setIsLoading] = useState(false)

    const formErrorStyle = {
        color: "var(--Red)",
        fontWeight: "bold",
        fontSize: "12px",
        margin: "2px 16px"
    }

    const formErrorLabelStyle = {
        margin: "2px 16px"
    }

    function registro(data) {
        setIsLoading(true)

        Api.post("/register", data)

            .then(() => {
                toast.success("Cadastro realizado com sucesso!")
                history.push("/login")
            })
            .catch(() => {
                toast.error("Ops, erro ao criar a conta. Tente novamente.")
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        !!errors?.checkbox && toast.warn(errors.checkbox.message)
    }, [errors])

    return (
        <>
            {!pegarToken() && (
                <DivContainerCadastro>
                    <Stack
                        direction="row"
                        width="100%"
                        bg={
                            "linear-gradient(to bottom, #FFEAEF 0%, #FFFFFF 65%, #FFFFFF 100%)"
                        }
                    >
                        <motion.div
                            initial={{ x: -100, y: -100 }}
                            animate={{ x: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Box
                                display={{ base: "none", lg: "block" }}
                                w="50vw"
                            >
                                <img
                                    src={custommadewoman}
                                    alt="custommadewoman"
                                    style={{
                                        height: "100vh",
                                        position: "absolute",
                                        top: 0,
                                        left: -30,
                                        objectFit: "cover",
                                        zIndex: 1
                                    }}
                                />
                            </Box>
                        </motion.div>

                        <Flex
                            flexDirection="column"
                            alignItems={{ base: "center", lg: "center" }}
                            justifyContent={{
                                base: "center",
                                lg: "flex-start"
                            }}
                            style={{
                                margin: "0"
                            }}
                            width={{ base: "100%", lg: "60%" }}
                        >
                            <ImgLogo
                                src={logo}
                                alt="Na Medida Ateliê"
                                title="Página Inicial"
                                alignSelf={{ base: "center", lg: "flex-end" }}
                                onClick={() => history.push("/")}
                            />
                            <motion.div
                                initial={{ y: -500 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Stack
                                    as="form"
                                    w={{ base: "95%", md: "100%", lg: "400px" }}
                                    transition="0.3s"
                                    maxH={"100vh"}
                                    onSubmit={handleSubmit(registro)}
                                    sx={{
                                        background:
                                            "var(--BackgroundColor-Main)",
                                        border: "2px solid var(--Black)",
                                        boxShadow:
                                            "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                        borderRadius: "17px",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignSelf: "center",
                                        p: ".5rem 2rem",
                                        m: "0 auto"
                                    }}
                                >
                                    <Heading textAlign="center">
                                        Cadastro
                                    </Heading>
                                    <FormControl>
                                        <FormLabel
                                            htmlFor="name"
                                            sx={formErrorLabelStyle}
                                        >
                                            Nome
                                        </FormLabel>
                                        <Input
                                            id="name"
                                            placeholder="Nome completo"
                                            borderColor="var(--Grey-4)"
                                            isInvalid={errors.name}
                                            errorBorderColor="red.500"
                                            {...register("name")}
                                        />

                                        {errors.name && (
                                            <FormHelperText sx={formErrorStyle}>
                                                {errors?.name.message}
                                            </FormHelperText>
                                        )}
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel
                                            sx={formErrorLabelStyle}
                                            htmlFor="email"
                                        >
                                            Email
                                        </FormLabel>
                                        <Input
                                            id="email"
                                            placeholder="email@email.com"
                                            borderColor="var(--Grey-4)"
                                            isInvalid={errors.email}
                                            errorBorderColor="red.500"
                                            {...register("email")}
                                        />

                                        {errors.email && (
                                            <FormHelperText sx={formErrorStyle}>
                                                {errors?.email.message}
                                            </FormHelperText>
                                        )}
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel
                                            sx={formErrorLabelStyle}
                                            htmlFor="password"
                                        >
                                            Senha
                                        </FormLabel>
                                        <InputGroup>
                                            <InputRightElement>
                                                <IconButton
                                                    bg="transparent"
                                                    sx={{
                                                        color: "var(--BackgroundColor-Black)"
                                                    }}
                                                    _hover={false}
                                                    _active={false}
                                                    onClick={handleClick}
                                                    icon={
                                                        show ? (
                                                            <ViewIcon />
                                                        ) : (
                                                            <ViewOffIcon />
                                                        )
                                                    }
                                                />
                                            </InputRightElement>
                                            <Input
                                                id="password"
                                                type={
                                                    show ? "text" : "password"
                                                }
                                                placeholder="•••••••••••••••••••••"
                                                borderColor="var(--Grey-4)"
                                                isInvalid={errors.password}
                                                errorBorderColor="red.500"
                                                {...register("password")}
                                            />
                                        </InputGroup>

                                        {errors.password && (
                                            <FormHelperText sx={formErrorStyle}>
                                                {errors?.password.message}
                                            </FormHelperText>
                                        )}
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel
                                            sx={formErrorLabelStyle}
                                            htmlFor="passwordConfirm"
                                        >
                                            Confirmar senha
                                        </FormLabel>
                                        <InputGroup>
                                            <InputRightElement>
                                                <IconButton
                                                    bg="transparent"
                                                    sx={{
                                                        color: "var(--BackgroundColor-Black)"
                                                    }}
                                                    _hover={false}
                                                    _active={false}
                                                    onClick={handleClickb}
                                                    icon={
                                                        showb ? (
                                                            <ViewIcon />
                                                        ) : (
                                                            <ViewOffIcon />
                                                        )
                                                    }
                                                />
                                            </InputRightElement>
                                            <Input
                                                id="passwordConfirm"
                                                type={
                                                    showb ? "text" : "password"
                                                }
                                                placeholder="•••••••••••••••••••••"
                                                borderColor="var(--Grey-4)"
                                                isInvalid={
                                                    errors.passwordConfirm
                                                }
                                                errorBorderColor="red.500"
                                                {...register("passwordConfirm")}
                                            />
                                        </InputGroup>

                                        {errors.passwordConfirm && (
                                            <FormHelperText sx={formErrorStyle}>
                                                {
                                                    errors?.passwordConfirm
                                                        .message
                                                }
                                            </FormHelperText>
                                        )}
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel
                                            sx={formErrorLabelStyle}
                                            htmlFor="avatar"
                                        >
                                            Avatar
                                        </FormLabel>
                                        <Input
                                            id="avatar"
                                            placeholder="Url da imagem"
                                            borderColor="var(--Grey-4)"
                                            errorBorderColor="red.500"
                                            {...register("avatar")}
                                        />
                                    </FormControl>

                                    <Stack spacing={2} direction="row">
                                        <Checkbox
                                            size="sm"
                                            sx={{
                                                fontSize: "12px"
                                            }}
                                            colorScheme="green"
                                            {...register("checkbox")}
                                        >
                                            Li e concordo com os termos de uso e
                                            privacidade
                                        </Checkbox>
                                    </Stack>

                                    <Button
                                        isLoading={isLoading}
                                        type="submit"
                                        _active={false}
                                        borderRadius={"10px"}
                                        _hover={{
                                            bg: "var(--Color-Primary-Dark)"
                                        }}
                                        backgroundColor="var(--Color-Primary-Main)"
                                        sx={{
                                            color: "var(--White)",
                                            fontSize: "20px",
                                            alignSelf: "center",
                                            p: "0 4rem"
                                        }}
                                    >
                                        Cadastrar
                                    </Button>
                                    <Text
                                        paddingY={2}
                                        textAlign="center"
                                        fontSize="12px"
                                        fontWeight="bold"
                                    >
                                        Já possui conta? Faça o
                                        <Link
                                            className="botaoLogin"
                                            title="Página de Login"
                                            to="/login"
                                            style={{
                                                color: "var(--Color-Primary-Main)"
                                            }}
                                        >
                                            {" "}
                                            login!
                                        </Link>
                                    </Text>
                                </Stack>
                            </motion.div>
                        </Flex>
                    </Stack>
                </DivContainerCadastro>
            )}
        </>
    )
}
