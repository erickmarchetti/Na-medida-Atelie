import {
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Select,
    Stack,
    VStack,
    List,
    ListItem
} from "@chakra-ui/react"
import { MdArrowDropDown } from "react-icons/md"
import { useState } from "react"
import Api from "../../Api"

function ModalMedidas({ isOpen, onClose, pedidoAtual }) {
    const [status, setStatus] = useState("Em Análise")

    const atualizarStatus = (e) => {
        const data = pedidoAtual

        pedidoAtual.stats = status

        Api.patch(`/pedidos/${pedidoAtual.id}`, data, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem(
                    "@user/token"
                )}`
            }
        }).then((_) => {
            onClose(e)
        })
    }

    return (
        <>
            {!!pedidoAtual && (
                <Modal
                    closeOnOverlayClick={true}
                    isOpen={isOpen}
                    onClose={onClose}
                    isCentered
                >
                    <ModalOverlay />
                    <ModalContent
                        bg="#F7F7F7"
                        margin="0"
                        padding={6}
                        maxW={{ base: "92vw", md: "650px" }}
                        maxH={{ base: "90vh", lg: "690px" }}
                        overflow="auto"
                    >
                        <ModalHeader
                            textAlign="center"
                            fontSize={{ base: "20px", md: "25", lg: "30px" }}
                        >
                            Dados do pedido n° {pedidoAtual.id}
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody p={2} display="flex" spacing={2} w="100%">
                            <VStack w="100%" alignItems="flex-start">
                                <Stack
                                    wordBreak="break-word"
                                    justifyContent="space-between"
                                    flex="1"
                                    fontSize={{ base: "18px", lg: "22px" }}
                                    gap="5px"
                                >
                                    <Text fontWeight="600">
                                        Nome do cliente -
                                        <Text
                                            as="span"
                                            fontWeight="normal"
                                            color="var(--Grey-4)"
                                        >
                                            {" "}
                                            {pedidoAtual.user.name.toUpperCase()}
                                        </Text>
                                    </Text>

                                    <Text fontWeight="600">
                                        Data do pedido -
                                        <Text
                                            as="span"
                                            fontWeight="normal"
                                            color="var(--Grey-4)"
                                        >
                                            {" "}
                                            {pedidoAtual.data.toUpperCase()}
                                        </Text>
                                    </Text>
                                    <Text fontWeight="600">
                                        Modelagem -{" "}
                                        <Text
                                            as="span"
                                            fontWeight="normal"
                                            color="var(--Grey-4)"
                                        >
                                            {pedidoAtual.modelagem.toUpperCase()}
                                        </Text>
                                    </Text>
                                    <Text fontWeight="600">
                                        Tipo de peça -{" "}
                                        <Text
                                            as="span"
                                            fontWeight="normal"
                                            color="var(--Grey-4)"
                                        >
                                            {pedidoAtual.categoria.toUpperCase()}
                                        </Text>
                                    </Text>
                                    <Text fontWeight="600">Medidas - </Text>
                                    <Stack
                                        fontWeight="normal"
                                        color="var(--Grey-4)"
                                    >
                                        {" "}
                                        <List>
                                            {Object.keys(
                                                pedidoAtual.medidas
                                            ).map((chave, index) => (
                                                <ListItem key={index}>
                                                    {pedidoAtual.medidas[
                                                        chave
                                                    ] !== "" && (
                                                        <Text>
                                                            {chave}:{" "}
                                                            {
                                                                pedidoAtual
                                                                    .medidas[
                                                                    chave
                                                                ]
                                                            }
                                                        </Text>
                                                    )}
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Stack>

                                    <Text fontWeight="600">
                                        Observações -
                                        <Text
                                            as="span"
                                            fontWeight="normal"
                                            color="var(--Grey-4)"
                                        >
                                            {" "}
                                            {pedidoAtual.observacoes.toUpperCase()}
                                        </Text>
                                    </Text>
                                    <Text fontWeight="600">
                                        Status atual -
                                        <Text
                                            as="span"
                                            fontWeight="normal"
                                            color="var(--Grey-4)"
                                        >
                                            {" "}
                                            {pedidoAtual.stats.toUpperCase()}
                                        </Text>
                                    </Text>
                                </Stack>

                                <Stack w="100%">
                                    <Select
                                        mt="10px"
                                        fontSize={{ base: "18px", lg: "22px" }}
                                        icon={<MdArrowDropDown />}
                                        placeholder="Atualizar status"
                                        onChange={(e) =>
                                            setStatus(e.target.value)
                                        }
                                    >
                                        <option value="Em Análise">
                                            Em analise
                                        </option>
                                        <option value="Em Confecção">
                                            Em confecção
                                        </option>
                                        <option value="Encaminhado">
                                            Encaminhado
                                        </option>
                                        <option value="Entregue">
                                            Entregue
                                        </option>
                                    </Select>
                                </Stack>
                            </VStack>
                        </ModalBody>

                        <ModalFooter p="8px">
                            <Button
                                color="var(--White)"
                                bg="var(--Color-Primary-Main)"
                                fontSize="20px"
                                _hover={{
                                    bgColor: "var(--Color-Primary-Dark)",
                                    borderColor: "var(--Color-Primary-Dark)"
                                }}
                                onClick={atualizarStatus}
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
