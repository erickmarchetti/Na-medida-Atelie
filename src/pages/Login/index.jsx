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
import { DivContainerLogin } from "./styledLogin"
import HeaderLogin from "./headerLogin"
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
            <HeaderLogin />
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

/*
import * as React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button
} from "@chakra-ui/react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required()
});

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const { register, handleSubmit, errors } = useForm<LoginFormInputs>({
    mode: "onBlur",
    resolver: yupResolver(schema)
  });

  const onSubmit = (values: LoginFormInputs) => console.log(values);

  return (
    <form style={{ width: 350 }}>
      <FormControl
        isInvalid={!!errors?.email?.message}
        errortext={errors?.email?.message}
        p="4"
        isRequired
      >
        <FormLabel>Email</FormLabel>
        <Input type="email" name="email" placeholder="Email" ref={register} />
        <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
        <FormHelperText>
          We are obviously giving this straight to Facebook.
        </FormHelperText>
      </FormControl>
      <FormControl
        isInvalid={!!errors?.password?.message}
        errortext={errors?.password?.message}
        px="4"
        pb="4"
        isRequired
      >
        <FormLabel>Password</FormLabel>
        <Input
          ref={register}
          type="password"
          placeholder="Password"
          name="password"
        />
        <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
      </FormControl>
      <Button
        onClick={handleSubmit(onSubmit)}
        p="4"
        mx="4"
        mt="6"
        w="90%"
        colorScheme="blue"
        variant="solid"
        disabled={!!errors.email || !!errors.password}
      >
        Login
      </Button>
    </form>
  );
}
*/
