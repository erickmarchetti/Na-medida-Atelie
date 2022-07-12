import ThemeHeader from "../../components/ThemeHeader"
import { Button } from "@chakra-ui/react"

import {
    BackgroundImg,
    ContainerButton,
    ContainerMain,
    ContainerPedidos,
    Item,
    ItemData,
    ItemDescription,
    ItemImg,
    ItemStatus,
    ListaPedidos,
    UsuarioBG,
    UsuarioMain
} from "./style"
import bgImg from "../../assets/Images/custommadework.svg"
import teste from "../../assets/Images/custommadewoman.png"

function PainelUsuario() {
    return (
        <UsuarioBG>
            <ThemeHeader />
            <ContainerMain>
                <BackgroundImg>
                    <ContainerButton>
                        <Button
                            variant="outline"
                            borderColor="#DA4167"
                            color="#E7E7E7"
                            bg="#DA4167"
                            boxShadow="dark-lg"
                            fontSize="30px"
                            w="320px"
                            h="80px"
                            fontWeight="700"
                            _active={false}
                            _hover={{
                                bgColor: "#A6324F",
                                borderColor: "#A6324F"
                            }}
                        >
                            Fazer pedido
                        </Button>
                        <Button
                            variant="outline"
                            borderColor="#181818"
                            color="#181818"
                            bg="#FAFAFA"
                            boxShadow="dark-lg"
                            fontSize="30px"
                            w="320px"
                            h="80px"
                            fontWeight="700"
                            _active={false}
                            _hover={{
                                textDecoration: "underline"
                            }}
                        >
                            Feedback
                        </Button>
                    </ContainerButton>
                </BackgroundImg>
                <ContainerPedidos>
                    <h1>Meus Pedidos</h1>
                    <ListaPedidos>
                        <Item>
                            <ItemImg src={teste} />
                            <ItemDescription>
                                <h2>Calça</h2>
                                <ItemData>
                                    <h3>Data:</h3>
                                    <h4>05/07/2022</h4>
                                </ItemData>
                                <h5>R$ 149,99</h5>
                                <ItemStatus>Encaminhado</ItemStatus>
                            </ItemDescription>
                        </Item>
                        <Item>
                            <ItemImg src={teste} />
                            <ItemDescription>
                                <h2>Calça</h2>
                                <ItemData>
                                    <h3>Data:</h3>
                                    <h4>05/07/2022</h4>
                                </ItemData>
                                <h5>R$ 149,99</h5>
                                <ItemStatus>Encaminhado</ItemStatus>
                            </ItemDescription>
                        </Item>
                        <Item>
                            <ItemImg src={teste} />
                            <ItemDescription>
                                <h2>Calça</h2>
                                <ItemData>
                                    <h3>Data:</h3>
                                    <h4>05/07/2022</h4>
                                </ItemData>
                                <h5>R$ 149,99</h5>
                                <ItemStatus>Encaminhado</ItemStatus>
                            </ItemDescription>
                        </Item>
                        <Item>
                            <ItemImg src={teste} />
                            <ItemDescription>
                                <h2>Calça</h2>
                                <ItemData>
                                    <h3>Data:</h3>
                                    <h4>05/07/2022</h4>
                                </ItemData>
                                <h5>R$ 149,99</h5>
                                <ItemStatus>Encaminhado</ItemStatus>
                            </ItemDescription>
                        </Item>
                        <Item>
                            <ItemImg src={teste} />
                            <ItemDescription>
                                <h2>Calça</h2>
                                <ItemData>
                                    <h3>Data:</h3>
                                    <h4>05/07/2022</h4>
                                </ItemData>
                                <h5>R$ 149,99</h5>
                                <ItemStatus>Encaminhado</ItemStatus>
                            </ItemDescription>
                        </Item>
                        <Item>
                            <ItemImg src={teste} />
                            <ItemDescription>
                                <h2>Calça</h2>
                                <ItemData>
                                    <h3>Data:</h3>
                                    <h4>05/07/2022</h4>
                                </ItemData>
                                <h5>R$ 149,99</h5>
                                <ItemStatus>Encaminhado</ItemStatus>
                            </ItemDescription>
                        </Item>
                    </ListaPedidos>
                </ContainerPedidos>
            </ContainerMain>
        </UsuarioBG>
    )
}

export default PainelUsuario
