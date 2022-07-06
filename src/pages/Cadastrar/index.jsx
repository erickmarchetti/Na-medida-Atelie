import custommadewoman from "../../Images/custommadewoman.png"

import {
    Button,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Checkbox
} from "@chakra-ui/react"
import { useState } from "react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import Header from "../../components/HeaderCadastro"
import { Formulario, Principal } from "./styled"

export default function Cadastro() {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return (
        <>
            <Header />
            <Principal>
                <div className="divImg">
                    <img src={custommadewoman} alt="custommadewoman" />
                </div>
                <Formulario>
                    <FormControl
                        className="formControl"
                        w={"458px"}
                        h={"592"}
                        border={"2px solid black"}
                        padding={"5px"}
                    >
                        <div className="tituloCadastro">
                            <h1>Cadastro</h1>
                        </div>
                        <FormLabel htmlFor="name">Nome</FormLabel>
                        <Input
                            id="name"
                            type="name"
                            placeholder="Nome completo"
                        />

                        <FormLabel htmlFor="name">Email</FormLabel>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Email@email.com"
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

                        <FormLabel htmlFor="senha">Confirmar senha</FormLabel>
                        <InputGroup>
                            <InputRightElement>
                                <IconButton
                                    bg="transparent"
                                    onClick={handleClick}
                                    icon={show ? <ViewOffIcon /> : <ViewIcon />}
                                />
                            </InputRightElement>
                            <Input
                                id="passwordconfirm"
                                type={show ? "text" : "password"}
                                placeholder="**********"
                            />
                        </InputGroup>

                        <FormLabel htmlFor="name">Endereço</FormLabel>
                        <Input
                            id="name"
                            type="name"
                            placeholder="Av.Copacabana Nº 1040"
                        />

                        <FormLabel htmlFor="name">Avatar</FormLabel>
                        <Input
                            id="avatar"
                            type="avatar"
                            placeholder="Url da imagem"
                        />
                        <p>
                            <Checkbox defaultChecked>
                                Li e Concodo com os
                                <a href="#"> termos de uso</a> e
                                <a href="#"> privacidade</a>.
                            </Checkbox>
                        </p>
                        <Button
                            w={"297px"}
                            h={"65px"}
                            borderRadius={"10px"}
                            backgroundColor="#DA4167"
                        >
                            Cadastrar
                        </Button>
                    </FormControl>
                    <p>
                        Já possui conta? Faça o <a href="/login">login!</a>
                    </p>
                </Formulario>
            </Principal>
        </>
    )
}
