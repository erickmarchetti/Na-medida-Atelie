import custommadewoman from "../../Images/custommadewoman.png"
import { Link } from "react-router-dom"

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
import { useState } from "react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import logo from "../../Images/logo.svg"
import { ImgLogo } from "./style"

export default function Cadastro() {
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
        passwordconfirm: yup
            .string()
            .required("Confirmação de senha é obrigatório!")
            .oneOf([yup.ref("password")], "Senhas diferentes")
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
        console.log(data)
    }
    return (
        <>
            <Stack direction="row" width="100%">
                <Box display={{ base: "none", lg: "block" }}>
                    <img
                        src={custommadewoman}
                        alt="custommadewoman"
                        style={{ height: "100vh" }}
                    />
                </Box>

                <Flex
                    flexDirection="column"
                    alignitens={{ base: "center", lg: "flex-end" }}
                    justifyContent={{ base: "center", lg: "flex-start" }}
                    marginRight="4rem"
                    max-height="100vh"
                    gap="2.5rem"
                    width={{ base: "100%", lg: "60%" }}
                    paddingBottom={{ base: "10px", lg: "0" }}
                >
                    <ImgLogo src={logo} alt="Na Medida Ateliê" />
                    <Stack
                        as="form"
                        w={{ base: "90%", md: "50%", lg: "400px" }}
                        maxH={"100vh"}
                        onSubmit={handleSubmit(registro)}
                        sx={{
                            background: "var(--BackgroundColor-Main)",
                            border: "2px solid var(--Black)",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            borderRadius: "17px",
                            display: "flex",
                            flexDirection: "column",
                            alignSelf: "center",
                            p: ".2rem 2rem"
                        }}
                    >
                        <Heading textAlign="center">Cadastro</Heading>
                        <FormControl isInvalid>
                            <FormLabel htmlFor="name" sx={formErrorLabelStyle}>
                                Nome
                            </FormLabel>
                            <Input
                                id="name"
                                placeholder="Nome completo"
                                borderColor="var(--Grey-4)"
                                errorBorderColor="var(--Red)"
                                {...register("name")}
                            />

                            {errors.name && (
                                <FormHelperText sx={formErrorStyle}>
                                    {errors?.name.message}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl>
                            <FormLabel sx={formErrorLabelStyle} htmlFor="name">
                                Email
                            </FormLabel>
                            <Input
                                id="email"
                                placeholder="email@email.com"
                                borderColor="var(--Grey-4)"
                                errorBorderColor="#e53e3e"
                                {...register("email")}
                            />

                            {errors.email && (
                                <FormHelperText sx={formErrorStyle}>
                                    {errors?.email.message}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl>
                            <FormLabel sx={formErrorLabelStyle} htmlFor="senha">
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
                                    placeholder="•••••••••••••••••••••"
                                    errorBorderColor="#e53e3e"
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
                            <FormLabel sx={formErrorLabelStyle} htmlFor="senha">
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
                                    placeholder="•••••••••••••••••••••"
                                    border="1px solid var(--Grey-4)"
                                    errorBorderColor="#e53e3e"
                                    {...register("passwordconfirm")}
                                />
                            </InputGroup>

                            {errors.passwordconfirm && (
                                <FormHelperText sx={formErrorStyle}>
                                    {errors?.passwordconfirm.message}
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
                                border="1px solid var(--Grey-4)"
                                errorBorderColor="#e53e3e"
                                {...register("avatar")}
                            />
                        </FormControl>

                        {/* Termos de uso e privacidade dados como extra, remova esse comentario apos conclusao */}
                        <Stack spacing={2} direction="row">
                            <Checkbox
                                size="sm"
                                sx={{
                                    fontSize: "12px"
                                }}
                                colorScheme="green"
                                defaultChecked
                            >
                                Li e concordo com os termos de uso e privacidade
                            </Checkbox>
                        </Stack>

                        <Button
                            type="submit" // mt={5}
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
                        <Text textAlign="center" fontSize="12px">
                            Já possui conta? Faça o
                            <Link
                                to="/login"
                                style={{ color: "var(--Color-Primary-Main)" }}
                            >
                                {" "}
                                login!
                            </Link>
                        </Text>
                    </Stack>
                </Flex>
            </Stack>
        </>
    )
}
