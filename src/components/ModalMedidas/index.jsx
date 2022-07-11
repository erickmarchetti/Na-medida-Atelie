import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Textarea,
    Box
} from "@chakra-ui/react"

function ModalMedidas({ isOpen, onClose }) {
    return (
        <>
            <Modal
                closeOnOverlayClick={false}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Dados do pedido n°</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6} display="flex">
                        <Box>
                            <p>Nome do cliente: </p>
                            <p>Data do pedido: </p>
                            <p>Modelagem: </p>
                            <p>Tipo de peça: </p>
                            <p>URL modelo Referência: </p>
                            <p>Medidas: </p>
                            <label>Detalhes: </label>
                            <Textarea width="80%" />
                        </Box>
                        <Box>
                            <p>Status atual: </p>
                            <label>Atualizar Status:</label>
                            <select name="atualizarStatus">
                                <option value="emAnalise">Em Análise</option>
                                <option value="emConfecao">Em Confecção</option>
                                <option value="encaminhado">Encaminhado</option>
                                <option value="entregue">Entregue</option>
                            </select>
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="#E7E7E7" bg="#DA4167" mr={3}>
                            Atualizar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default ModalMedidas
