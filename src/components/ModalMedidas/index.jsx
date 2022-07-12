import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Box,
    List
} from "@chakra-ui/react"
import { useState } from "react"
import Api from "../../Api"

function ModalMedidas({ isOpen, onClose, pedidoAtual }) {
    const [status, setStatus] = useState("Em Análise")
    console.log(status)

    const atualizarStatus = (e) => {
        const data = pedidoAtual

        pedidoAtual.stats = status

        Api.patch(`/pedidos/${pedidoAtual.id}`, data, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem(
                    "@user/token"
                )}`
            }
        }).then((response) => {
            onClose(e)
        })
    }

    return (
        <>
            {!!pedidoAtual && (
                <Modal
                    closeOnOverlayClick={false}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader textAlign="center">
                            Dados do pedido n° {pedidoAtual.id}
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody
                            pb={6}
                            display="flex"
                            flexDirection="column"
                            alignContent="space-around"
                        >
                            <Box>
                                <p>
                                    Nome do cliente:{" "}
                                    {pedidoAtual.user.name.toUpperCase()}
                                </p>
                                <p>
                                    Data do pedido:{" "}
                                    {pedidoAtual.data.toUpperCase()}
                                </p>
                                <p>
                                    Modelagem:{" "}
                                    {pedidoAtual.modelagem.toUpperCase()}{" "}
                                </p>
                                <p>
                                    Tipo de peça:{" "}
                                    {pedidoAtual.categoria.toUpperCase()}
                                </p>
                                <p>
                                    URL modelo Referência:{" "}
                                    <a
                                        cursor="pointer"
                                        fontWeight="bold"
                                        href={pedidoAtual.imagem_referencia}
                                        target="_blanck"
                                    >
                                        imagem referencia
                                    </a>
                                </p>
                                <label>Medidas: </label>
                                <List>
                                    {Object.keys(pedidoAtual.medidas).map(
                                        (chave, index) => (
                                            <>
                                                {pedidoAtual.medidas[chave] !==
                                                    "" && (
                                                    <li key={index}>
                                                        {chave}:{" "}
                                                        {
                                                            pedidoAtual.medidas[
                                                                chave
                                                            ]
                                                        }
                                                    </li>
                                                )}
                                            </>
                                        )
                                    )}
                                </List>
                                <label>Detalhes: </label>
                                <p>{pedidoAtual.observacoes.toUpperCase()}</p>
                            </Box>
                            <Box display="flex" flexDirection="column">
                                <p>
                                    Status atual:{" "}
                                    {pedidoAtual.stats.toUpperCase()}{" "}
                                </p>
                                <label>Atualizar Status:</label>
                                <select
                                    onChange={(e) => setStatus(e.target.value)}
                                    name="atualizarStatus"
                                    width="100%"
                                >
                                    <option value="Em Análise">
                                        Em Análise
                                    </option>
                                    <option value="Em Confecção">
                                        Em Confecção
                                    </option>
                                    <option value="Encaminhado">
                                        Encaminhado
                                    </option>
                                    <option value="Entregue">Entregue</option>
                                </select>
                            </Box>
                        </ModalBody>

                        <ModalFooter>
                            <Button
                                onClick={atualizarStatus}
                                color="#E7E7E7"
                                bg="#DA4167"
                                mr={3}
                            >
                                Atualizar
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            )}
        </>
    )
}
export default ModalMedidas
