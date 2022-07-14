/* eslint-disable react-hooks/exhaustive-deps */
import {
    Flex,
    Image,
    Popover,
    PopoverTrigger,
    Button,
    Portal,
    PopoverContent,
    PopoverArrow,
    PopoverBody,
    IconButton
} from "@chakra-ui/react"
import logo from "../../assets/Images/logo.svg"

import semImagem from "../../assets/Images/no-image.svg"

import { StyledHeader } from "./style.js"

import { useHistory } from "react-router-dom"

import { useContext } from "react"
import { UserContext } from "../../providers/user"
import { useEffect } from "react"
import { toast } from "react-toastify"

function ThemeHeader({ admin, usuarioLogado }) {
    const { pegarDadosUser, user, setUser } = useContext(UserContext)

    const history = useHistory()

    useEffect(() => {
        pegarDadosUser()
    }, [])

    const logout = () => {
        localStorage.clear()
        setUser(null)
        toast.info("Até logo! 👋", {
            autoClose: 700
        })
        history.push("/")
    }

    return (
        <StyledHeader>
            <Flex
                w="90%"
                maxW="1280px"
                h="full"
                flexFlow="row nowrap"
                justifyContent="space-between"
                alignItems="center"
            >
                <Image
                    src={logo}
                    alt="Na medida ateliê"
                    w={{ base: "78.55px", sm: "126.75px" }}
                    h={{ base: "38.88", sm: "52.08px" }}
                    sx={{
                        cursor: "pointer",
                        transition: "0.5s cubic-bezier(0.68, 0.09, 0.33, 1.01)",
                        "&:hover": {
                            transform: "scale(1.1)",
                            transition:
                                "0.5s cubic-bezier(0.68, 0.09, 0.33, 1.01)"
                        }
                    }}
                    onClick={() => history.push("/")}
                />

                {!!admin ? (
                    <Flex
                        h="full"
                        flexFlow="row nowrap"
                        alignItems="center"
                        gap="9px"
                    >
                        <span>Admin</span>

                        <Popover>
                            <PopoverTrigger>
                                <IconButton
                                    _hover={false}
                                    bg="transparent"
                                    _active={false}
                                >
                                    <Image
                                        src={semImagem}
                                        w={{ base: "30px", sm: "50px" }}
                                        h={{ base: "30px", sm: "50px" }}
                                        objectFit="cover"
                                        borderRadius="100%"
                                    />
                                </IconButton>
                            </PopoverTrigger>
                            <Portal>
                                <PopoverContent width="fit-content">
                                    <PopoverArrow />
                                    <PopoverBody>
                                        <Button
                                            _active={false}
                                            sx={{
                                                bg: "var(--Red)",
                                                color: "var(--White)",
                                                "&:hover": {
                                                    bg: "var(--Color-Primary-Dark)"
                                                }
                                            }}
                                            onClick={logout}
                                        >
                                            Sair
                                        </Button>
                                    </PopoverBody>
                                </PopoverContent>
                            </Portal>
                        </Popover>
                    </Flex>
                ) : (
                    !!user && (
                        <Flex
                            h="full"
                            flexFlow="row nowrap"
                            alignItems="center"
                            gap="9px"
                        >
                            <span>{user?.name?.split(" ")[0]}</span>

                            <span className="restoNome">
                                {user?.name?.split(" ")?.slice(1)?.join(" ")}
                            </span>
                            <Popover>
                                <PopoverTrigger>
                                    <IconButton
                                        _hover={false}
                                        bg="transparent"
                                        _active={false}
                                    >
                                        <Image
                                            src={
                                                user?.avatar !== ""
                                                    ? user.avatar
                                                    : semImagem
                                            }
                                            w={{ base: "30px", sm: "50px" }}
                                            h={{ base: "30px", sm: "50px" }}
                                            objectFit="cover"
                                            borderRadius="100%"
                                        />
                                    </IconButton>
                                </PopoverTrigger>
                                <Portal>
                                    <PopoverContent width="fit-content">
                                        <PopoverArrow />
                                        <PopoverBody>
                                            <Button
                                                _active={false}
                                                sx={{
                                                    bg: "var(--Red)",
                                                    color: "var(--White)",
                                                    "&:hover": {
                                                        bg: "var(--Color-Primary-Dark)"
                                                    }
                                                }}
                                                onClick={logout}
                                            >
                                                Sair
                                            </Button>
                                        </PopoverBody>
                                    </PopoverContent>
                                </Portal>
                            </Popover>
                        </Flex>
                    )
                )}
            </Flex>
        </StyledHeader>
    )
}

export default ThemeHeader
