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
    VStack
} from "@chakra-ui/react"
import { MdArrowDropDown } from "react-icons/md"

function ModalMedidas({ isOpen, onClose }) {
    const dados = {
        numeroPedido: 1,
        nomeCliente: "Ribamar",
        dataPedido: "11/07/22",
        modelagem: "Masculina",
        tipoPeca: "Camisa",
        url: "https://urldaimagem.com/photopic...",
        medidas: "Ombro: 12cm, Torax: 100px, Comp.: 65cm, Larg. Braço: 35cm",
        observacoes: "Camisa com bolso nas costas",
        status: "Em análise"
    }

    return (
        <>
            <Modal
                closeOnOverlayClick={true}
                isOpen={isOpen}
                onClose={onClose}
                isCentered
            >
                <ModalOverlay />
                <ModalContent
                    bg="var(--Grey-0)"
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
                        Dados do pedido n° {dados.numeroPedido}
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
                                        {dados.nomeCliente}
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
                                        {dados.dataPedido}
                                    </Text>
                                </Text>
                                <Text fontWeight="600">
                                    Modelagem -{" "}
                                    <Text
                                        as="span"
                                        fontWeight="normal"
                                        color="var(--Grey-4)"
                                    >
                                        {dados.modelagem}
                                    </Text>
                                </Text>
                                <Text fontWeight="600">
                                    Tipo de peça -{" "}
                                    <Text
                                        as="span"
                                        fontWeight="normal"
                                        color="var(--Grey-4)"
                                    >
                                        {dados.tipoPeca}
                                    </Text>
                                </Text>
                                <Text fontWeight="600">
                                    Medidas -
                                    <Text
                                        as="span"
                                        fontWeight="normal"
                                        color="var(--Grey-4)"
                                    >
                                        {" "}
                                        {dados.medidas}
                                    </Text>
                                </Text>
                                <Text fontWeight="600">
                                    Observações -
                                    <Text
                                        as="span"
                                        fontWeight="normal"
                                        color="var(--Grey-4)"
                                    >
                                        {" "}
                                        {dados.observacoes}
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
                                        {dados.status}
                                    </Text>
                                </Text>
                            </Stack>

                            <Stack w="100%">
                                <Select
                                    mt="10px"
                                    fontSize={{ base: "18px", lg: "22px" }}
                                    icon={<MdArrowDropDown />}
                                    placeholder="Atualizar status"
                                >
                                    <option value="em analise">
                                        Em analise
                                    </option>
                                    <option value="em confecção">
                                        Em confecção
                                    </option>
                                    <option value="encaminhado">
                                        Encaminhado
                                    </option>
                                    <option value="entregue">Entregue</option>
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
                        >
                            Atualizar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default ModalMedidas
