/* eslint-disable react-hooks/exhaustive-deps */
import ThemeHeader from "../../components/ThemeHeader"
import { useMediaQuery } from "@chakra-ui/react"

import { motion } from "framer-motion"
import { PedidosBG, PedidosMain } from "./style"
import { toast } from "react-toastify"

import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import Api from "../../Api"

import { useContext, useEffect } from "react"
import { UserContext } from "../../providers/user"
import { useHistory } from "react-router-dom"
import { MainPedidos } from "../../components/Pedidos/MainPedidos"
import { ButtonFinalizarPedido } from "../../components/Pedidos/ButtonFinalizarPedido"
import { HeaderPedidos } from "../../components/Pedidos/HeaderPedidos"

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
                            <HeaderPedidos
                                isLargerThan768={isLargerThan768}
                            ></HeaderPedidos>
                            <MainPedidos register={register}></MainPedidos>
                            {!isLargerThan768 && <ButtonFinalizarPedido />}
                        </motion.div>
                    </PedidosMain>
                </PedidosBG>
            )}
        </>
    )
}

export default Pedidos
