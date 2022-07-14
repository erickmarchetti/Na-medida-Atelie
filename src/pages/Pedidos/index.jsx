/* eslint-disable react-hooks/exhaustive-deps */
import ThemeHeader from "../../components/ThemeHeader"
import {
    Button,
    Textarea,
    Input,
    InputGroup,
    Select,
    InputRightAddon,
    useMediaQuery
} from "@chakra-ui/react"

import { motion } from "framer-motion"
import {
    ButtonContainer,
    FormSection,
    PedidosBG,
    PedidosCard,
    PedidosContainer,
    PedidosMain
} from "./style"
import { toast } from "react-toastify"

import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import Api from "../../Api"

import { useContext, useEffect } from "react"
import { UserContext } from "../../providers/user"
import { useHistory } from "react-router-dom"

function Pedidos() {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)")

    const valoresYup = yup.object().shape({
        modelagem: yup.string(),
        categoria: yup.string(),
        medidas: yup.object().shape({
            torax_busto: yup.number().integer().positive(),
            cintura: yup.number().integer().positive(),
            quadril: yup.number().integer().positive(),
            biceps: yup.number().integer().positive(),
            punho: yup.number().integer().positive(),
            coxa: yup.number().integer().positive(),
            joelho: yup.number().integer().positive(),
            tornozelo: yup.number().integer().positive(),
            ombro: yup.number().integer().positive(),
            comprimento_total: yup.number().integer().positive(),
            comprimento_manga: yup.number().integer().positive()
        }),
        imagem_referencia: yup.string().url(),
        observacoes: yup.string(),
        observacoes_medidas: yup.string()
    })

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(valoresYup)
    })

    const data = new Date()
    const dia = data.getDate()
    const mes = data.getMonth()
    const ano = data.getFullYear()
    const dataAtual = `${dia}/${mes <= 9 ? `0${mes + 1}` : `${mes + 1}`}/${ano}`

    const precos = {
        Blusa: 90.0,
        Vestido: 500.0,
        Saia: 130.0,
        Bermuda: 70.0,
        Calça: 220.0,
        Camiseta: 40.0,
        Regata: 30.0,
        Short: 30.0,
        Moletom: 210.0,
        Agasalho: 90.0,
        Jaqueta: 310.0
    }

    const enviarValores = (data) => {
        const dados = {
            modelagem: data.modelagem,
            categoria: data.categoria,
            imagem_referencia: data.imagem_referencia,
            observacoes: data.observacoes,
            observacoes_medidas: data.observacoes_medidas,
            medidas: {
                torax_busto: data.torax_busto,
                cintura: data.cintura,
                quadril: data.quadril,
                biceps: data.biceps,
                punho: data.punho,
                coxa: data.coxa,
                joelho: data.joelho,
                tornozelo: data.tornozelo,
                ombro: data.ombro,
                comprimento_total: data.comprimento_total,
                comprimento_manga: data.comprimento_manga
            }
        }
        dados.userId = +localStorage.getItem("@user/id")
        dados.data = dataAtual
        dados.preco = precos[dados.categoria]
        dados.stats = "Em Análise"

        const response = Api.post("/pedidos", dados, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("@user/token")}`
            }
        })
            .then(() => {
                history.push("/painel")
                toast.success("Pedido registrado com sucesso!")
            })
            .catch(() => toast.error("Falha ao registrar pedido."))
        return response
    }

    const history = useHistory()

    const { pegarToken } = useContext(UserContext)

    useEffect(() => {
        !pegarToken() && history.push("/")
    }, [])

    return (
        <>
            {!!pegarToken() && (
                <PedidosBG>
                    <ThemeHeader />
                    <PedidosMain onSubmit={handleSubmit(enviarValores)}>
                        <motion.div
                            initial={{ y: 500 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* {!isLargerThan768 && ( */}
                            <ButtonContainer>
                                <h1>Novo pedido</h1>
                                <Button
                                    w="280px"
                                    h="70px"
                                    bg="var(--Color-Primary-Main)"
                                    color="var(--White)"
                                    fontSize="25px"
                                    fontWeight="700"
                                    type="submit"
                                    _hover={{
                                        bgColor: "var(--Color-Primary-Dark)",
                                        borderColor: "var(--Color-Primary-Dark)"
                                    }}
                                >
                                    Finalizar Pedido
                                </Button>
                            </ButtonContainer>
                            {/* )} */}

                            <PedidosContainer>
                                <PedidosCard>
                                    <h2>Peça</h2>
                                    <FormSection direction="column">
                                        <label>Modelagem</label>
                                        <Select
                                            minH="29px"
                                            h="5vh"
                                            bg="var(--Grey-1)"
                                            borderColor="var(--Grey-4)"
                                            borderWidth="2px"
                                            placeholder="Selecione uma opção"
                                            {...register("modelagem")}
                                        >
                                            <option value="feminina">
                                                Feminina
                                            </option>
                                            <option value="masculina">
                                                Masculina
                                            </option>
                                        </Select>
                                    </FormSection>
                                    <FormSection direction="column">
                                        <label>Tipo de peça</label>
                                        <Select
                                            minH="29px"
                                            h="5vh"
                                            bg="var(--Grey-1)"
                                            borderColor="var(--Grey-4)"
                                            borderWidth="2px"
                                            placeholder="Selecione uma opção"
                                            {...register("categoria")}
                                        >
                                            <option value="Blusa">Blusa</option>
                                            <option value="Vestido">
                                                Vestido
                                            </option>
                                            <option value="Saia">Saia</option>
                                            <option value="Bermuda">
                                                Bermuda
                                            </option>
                                            <option value="Calça">Calça</option>
                                            <option value="Camiseta">
                                                Camiseta
                                            </option>
                                            <option value="Regata">
                                                Regata
                                            </option>
                                            <option value="Short">Short</option>
                                            <option value="Moletom">
                                                Moletom
                                            </option>
                                            <option value="Jaqueta">
                                                Jaqueta
                                            </option>
                                            <option value="Agasalho">
                                                Agasalho
                                            </option>
                                        </Select>
                                    </FormSection>
                                    <FormSection direction="column">
                                        <label>Imagem de referência</label>
                                        <Input
                                            minH="29px"
                                            h="7vh"
                                            padding="0 16px"
                                            bg="var(--Grey-1)"
                                            borderColor="var(--Grey-4)"
                                            borderWidth="2px"
                                            placeholder="URL da imagem"
                                            {...register("imagem_referencia")}
                                        />
                                    </FormSection>
                                    <FormSection direction="column" flex="1">
                                        <label>
                                            Observações sobre o modelo
                                        </label>
                                        <Textarea
                                            h="5vh"
                                            placeholder="Insira detalhes adicionais que deseja no modelo escolhido..."
                                            resize="none"
                                            flex="1"
                                            bg="var(--Grey-1)"
                                            borderColor="var(--Grey-4)"
                                            borderWidth="2px"
                                            {...register("observacoes")}
                                        />
                                    </FormSection>
                                </PedidosCard>
                                <PedidosCard>
                                    <h2>Medidas - Circunferências</h2>
                                    <FormSection>
                                        <label>Busto / Tórax</label>
                                        <InputGroup
                                            d="flex"
                                            justifyContent="flex-end"
                                            w="50%"
                                            h="5vh"
                                            minH="29px"
                                        >
                                            <Input
                                                bg="var(--Grey-1)"
                                                borderColor="var(--Grey-4)"
                                                borderWidth="2px"
                                                textAlign="right"
                                                h="70%"
                                                alignSelf="center"
                                                p="4px"
                                                {...register("torax_busto")}
                                            />
                                            <InputRightAddon
                                                bg="var(--Grey-4)"
                                                borderWidth="2px"
                                                borderColor="var(--Grey-4)"
                                                color="var(--Grey-1)"
                                                children="cm"
                                                h="70%"
                                                alignSelf="center"
                                                p="4px"
                                                fontSize="14px"
                                            />
                                        </InputGroup>
                                    </FormSection>
                                    <FormSection>
                                        <label>Cintura</label>
                                        <InputGroup
                                            d="flex"
                                            justifyContent="flex-end"
                                            w="50%"
                                            h="5vh"
                                            minH="29px"
                                        >
                                            <Input
                                                bg="var(--Grey-1)"
                                                borderColor="var(--Grey-4)"
                                                borderWidth="2px"
                                                textAlign="right"
                                                h="70%"
                                                alignSelf="center"
                                                p="4px"
                                                {...register("cintura")}
                                            />
                                            <InputRightAddon
                                                bg="var(--Grey-4)"
                                                borderWidth="2px"
                                                borderColor="var(--Grey-4)"
                                                color="var(--Grey-1)"
                                                children="cm"
                                                h="70%"
                                                alignSelf="center"
                                                p="4px"
                                                fontSize="14px"
                                            />
                                        </InputGroup>
                                    </FormSection>
                                    <FormSection>
                                        <label>Quadril</label>
                                        <InputGroup
                                            d="flex"
                                            justifyContent="flex-end"
                                            w="50%"
                                            h="5vh"
                                            minH="29px"
                                        >
                                            <Input
                                                bg="var(--Grey-1)"
                                                borderColor="var(--Grey-4)"
                                                borderWidth="2px"
                                                textAlign="right"
                                                h="70%"
                                                alignSelf="center"
                                                p="4px"
                                                {...register("quadril")}
                                            />
                                            <InputRightAddon
                                                bg="var(--Grey-4)"
                                                borderWidth="2px"
                                                borderColor="var(--Grey-4)"
                                                color="var(--Grey-1)"
                                                children="cm"
                                                h="70%"
                                                alignSelf="center"
                                                p="4px"
                                                fontSize="14px"
                                            />
                                        </InputGroup>
                                    </FormSection>
                                    <FormSection>
                                        <label>Braço (Biceps)</label>
                                        <InputGroup
                                            d="flex"
                                            justifyContent="flex-end"
                                            w="50%"
                                            h="5vh"
                                            minH="29px"
                                        >
                                            <Input
                                                bg="var(--Grey-1)"
                                                borderColor="var(--Grey-4)"
                                                borderWidth="2px"
                                                textAlign="right"
                                                h="70%"
                                                alignSelf="center"
                                                p="4px"
                                                {...register("biceps")}
                                            />
                                            <InputRightAddon
                                                bg="var(--Grey-4)"
                                                borderWidth="2px"
                                                borderColor="var(--Grey-4)"
                                                color="var(--Grey-1)"
                                                children="cm"
                                                h="70%"
                                                alignSelf="center"
                                                p="4px"
                                                fontSize="14px"
                                            />
                                        </InputGroup>
                                    </FormSection>
                                    <FormSection>
                                        <label>Punho</label>
                                        <InputGroup
                                            d="flex"
                                            justifyContent="flex-end"
                                            w="50%"
                                            h="5vh"
                                            minH="29px"
                                        >
                                            <Input
                                                bg="var(--Grey-1)"
                                                borderColor="var(--Grey-4)"
                                                borderWidth="2px"
                                                textAlign="right"
                                                h="70%"
                                                alignSelf="center"
                                                p="4px"
                                                {...register("punho")}
                                            />
                                            <InputRightAddon
                                                bg="var(--Grey-4)"
                                                borderWidth="2px"
                                                borderColor="var(--Grey-4)"
                                                color="var(--Grey-1)"
                                                children="cm"
                                                h="70%"
                                                alignSelf="center"
                                                p="4px"
                                                fontSize="14px"
                                            />
                                        </InputGroup>
                                    </FormSection>
                                    <FormSection>
                                        <label>Coxa</label>
                                        <InputGroup
                                            d="flex"
                                            justifyContent="flex-end"
                                            w="50%"
                                            h="5vh"
                                            minH="29px"
                                        >
                                            <Input
                                                bg="var(--Grey-1)"
                                                borderColor="var(--Grey-4)"
                                                borderWidth="2px"
                                                textAlign="right"
                                                h="70%"
                                                alignSelf="center"
                                                p="4px"
                                                {...register("coxa")}
                                            />
                                            <InputRightAddon
                                                bg="var(--Grey-4)"
                                                borderWidth="2px"
                                                borderColor="var(--Grey-4)"
                                                color="var(--Grey-1)"
                                                children="cm"
                                                h="70%"
                                                alignSelf="center"
                                                p="4px"
                                                fontSize="14px"
                                            />
                                        </InputGroup>
                                    </FormSection>
                                    <FormSection>
                                        <label>Joelho</label>
                                        <InputGroup
                                            d="flex"
                                            justifyContent="flex-end"
                                            w="50%"
                                            h="5vh"
                                            minH="29px"
                                        >
                                            <Input
                                                bg="var(--Grey-1)"
                                                borderColor="var(--Grey-4)"
                                                borderWidth="2px"
                                                textAlign="right"
                                                h="70%"
                                                alignSelf="center"
                                                p="4px"
                                                {...register("joelho")}
                                            />
                                            <InputRightAddon
                                                bg="var(--Grey-4)"
                                                borderWidth="2px"
                                                borderColor="var(--Grey-4)"
                                                color="var(--Grey-1)"
                                                children="cm"
                                                h="70%"
                                                alignSelf="center"
                                                p="4px"
                                                fontSize="14px"
                                            />
                                        </InputGroup>
                                    </FormSection>
                                    <FormSection type="medidas">
                                        <label>Tornozelo</label>
                                        <InputGroup
                                            d="flex"
                                            justifyContent="flex-end"
                                            w="50%"
                                            h="5vh"
                                            minH="29px"
                                        >
                                            <Input
                                                bg="var(--Grey-1)"
                                                borderColor="var(--Grey-4)"
                                                borderWidth="2px"
                                                textAlign="right"
                                                h="70%"
                                                alignSelf="center"
                                                p="4px"
                                                {...register("tornozelo")}
                                            />
                                            <InputRightAddon
                                                bg="var(--Grey-4)"
                                                borderWidth="2px"
                                                borderColor="var(--Grey-4)"
                                                color="var(--Grey-1)"
                                                children="cm"
                                                h="70%"
                                                alignSelf="center"
                                                p="4px"
                                                fontSize="14px"
                                            />
                                        </InputGroup>
                                    </FormSection>
                                </PedidosCard>
                                <PedidosCard>
                                    <h2>Medidas Adicionais</h2>
                                    <FormSection>
                                        <label>Largura Ombro</label>
                                        <InputGroup
                                            d="flex"
                                            justifyContent="flex-end"
                                            w="50%"
                                            h="5vh"
                                            minH="29px"
                                        >
                                            <Input
                                                bg="var(--Grey-1)"
                                                borderColor="var(--Grey-4)"
                                                borderWidth="2px"
                                                textAlign="right"
                                                h="70%"
                                                alignSelf="center"
                                                p="4px"
                                                {...register("ombro")}
                                            />
                                            <InputRightAddon
                                                bg="var(--Grey-4)"
                                                borderWidth="2px"
                                                borderColor="var(--Grey-4)"
                                                color="var(--Grey-1)"
                                                children="cm"
                                                h="70%"
                                                alignSelf="center"
                                                p="4px"
                                                fontSize="14px"
                                            />
                                        </InputGroup>
                                    </FormSection>
                                    <FormSection>
                                        <label>Comp. Total</label>
                                        <InputGroup
                                            d="flex"
                                            justifyContent="flex-end"
                                            w="50%"
                                            h="5vh"
                                            minH="29px"
                                        >
                                            <Input
                                                bg="var(--Grey-1)"
                                                borderColor="var(--Grey-4)"
                                                borderWidth="2px"
                                                textAlign="right"
                                                h="70%"
                                                alignSelf="center"
                                                p="4px"
                                                {...register(
                                                    "comprimento_total"
                                                )}
                                            />
                                            <InputRightAddon
                                                bg="var(--Grey-4)"
                                                borderWidth="2px"
                                                borderColor="var(--Grey-4)"
                                                color="var(--Grey-1)"
                                                children="cm"
                                                h="70%"
                                                alignSelf="center"
                                                p="4px"
                                                fontSize="14px"
                                            />
                                        </InputGroup>
                                    </FormSection>
                                    <FormSection>
                                        <label>Comp. Manga</label>
                                        <InputGroup
                                            d="flex"
                                            justifyContent="flex-end"
                                            w="50%"
                                            h="5vh"
                                            minH="29px"
                                        >
                                            <Input
                                                bg="var(--Grey-1)"
                                                borderColor="var(--Grey-4)"
                                                borderWidth="2px"
                                                textAlign="right"
                                                h="70%"
                                                alignSelf="center"
                                                p="4px"
                                                {...register(
                                                    "comprimento_manga"
                                                )}
                                            />
                                            <InputRightAddon
                                                bg="var(--Grey-4)"
                                                borderWidth="2px"
                                                borderColor="var(--Grey-4)"
                                                color="var(--Grey-1)"
                                                children="cm"
                                                h="70%"
                                                alignSelf="center"
                                                p="4px"
                                                fontSize="14px"
                                            />
                                        </InputGroup>
                                    </FormSection>
                                    <FormSection direction="column" flex="1">
                                        <label>
                                            Outras medidas que julgar
                                            necessárias:
                                        </label>
                                        <Textarea
                                            resize="none"
                                            flex="1"
                                            bg="var(--Grey-1)"
                                            borderColor="var(--Grey-4)"
                                            borderWidth="2px"
                                            {...register("observacoes_medidas")}
                                        />
                                    </FormSection>
                                </PedidosCard>
                            </PedidosContainer>
                            {!isLargerThan768 && (
                                <ButtonContainer>
                                    <Button
                                        w="280px"
                                        h="70px"
                                        bg="var(--Color-Primary-Main)"
                                        color="var(--White)"
                                        fontSize="25px"
                                        fontWeight="700"
                                        _hover={{
                                            bgColor: "--Color-Primary-Dark",
                                            borderColor: "--Color-Primary-Dark"
                                        }}
                                        type="submit"
                                    >
                                        Finalizar Pedido
                                    </Button>
                                </ButtonContainer>
                            )}
                            {/* <ButtonContainer> */}
                            <h1>Novo pedido</h1>
                            {/* </ButtonContainer> */}
                        </motion.div>
                        <Button
                            w="280px"
                            h="70px"
                            bg="var(--Color-Primary-Main)"
                            color="var(--White)"
                            fontSize="25px"
                            fontWeight="700"
                            type="submit"
                            _hover={{
                                bgColor: "var(--Color-Primary-Dark)",
                                borderColor: "var(--Color-Primary-Dark)"
                            }}
                        >
                            Finalizar Pedido
                        </Button>
                    </PedidosMain>
                </PedidosBG>
            )}
        </>
    )
}

export default Pedidos
