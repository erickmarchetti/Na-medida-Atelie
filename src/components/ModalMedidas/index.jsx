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
    Textarea,
    Select,
    Stack
} from "@chakra-ui/react"
import { MdArrowDropDown } from "react-icons/md"

function ModalMedidas({ isOpen, onClose }) {
    return (
        <>
            <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                    padding={5}
                    w={{ base: "80%", lg: "600px" }}
                    h={{ base: "90vh", lg: "670px" }}
                >
                    <ModalHeader
                        textAlign="center"
                        fontSize={{ base: "20px", md: "25", lg: "30px" }}
                    >
                        Dados do pedido n°
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody p={0} display="flex">
                        <Stack direction="column" spacing={2}>
                            <Text>Nome do cliente: Ronaldo</Text>
                            <Text>Data do pedido: 11/07/2022</Text>
                            <Text>Modelagem: Masculina</Text>
                            <Text>Tipo de peça: Camisa</Text>
                            <Text>
                                URL modelo Referência:
                                https://urldaimagem.com/photopic...
                            </Text>
                            <Text>
                                Medidas: Ombro: 12cm, Torax: 100cm, Comp. 65cm,
                                LB: 35cm
                            </Text>
                            <label>Detalhes: </label>
                            <Textarea width="80%" />

                            <Text>Status atual: Em analise </Text>

                            {/* <label>Atualizar Status:</label> */}
                            <Select
                                icon={<MdArrowDropDown />}
                                placeholder="Atualizar status"
                            >
                                <option value="em analise">Em analise</option>
                                <option value="em confecção">
                                    Em confecção
                                </option>
                                <option value="encaminhado">Encaminhado</option>
                                <option value="entregue">Entregue</option>
                            </Select>
                        </Stack>
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
