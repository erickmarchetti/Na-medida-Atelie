import { Flex, List } from "@chakra-ui/react"
import ThemeHeader from "../../components/ThemeHeader"
import { StyledAvaliacoes } from "./style.js"

import bg from "../../assets/Images/bg-avaliacoes-desktop.svg"
import CardAvaliacao from "../../components/CardAvaliacao"

function Avaliacoes() {
    const avaliacoesExemplo = [
        {
            user: {
                name: "Pedro",
                avatar: "https://img.ibxk.com.br/2019/02/17/17124052466014.jpg?ims=704x"
            },
            estrelas: 5,
            comentario:
                "Tenho um gosto considerado peculiar para me vestir e não encontrava nas lojas convencionais peças que me agradavam. Com o ateliê Na Medida esse problema acabou. Agora tenho sempre a peça do meu jeito, feita especialmente para mim. "
        },
        {
            user: {
                name: "Raimunda",
                avatar: "https://www.desenhoonline.com/site/wp-content/uploads/Mais-bonita-da-Gr%C3%A3-Bretanha.jpg"
            },
            estrelas: 5,
            comentario:
                "Tinha dificuldade de comprar roupas que se ajustassem ao meu tipo de corpo. Com o ateliê Na Medida tenho as peças feitas nas minhas medidas, que adaptam ao meu corpo."
        },
        {
            user: {
                name: "Gertrudes",
                avatar: "https://jornadadafoto.com.br/wp-content/uploads/2020/12/abertura-do-diafragma-9-1-1024x683.webp"
            },
            estrelas: 5,
            comentario:
                "Precisava de uma roupa para festa temática gótica e o ateliê Na Medida fez exatamente o que eu pedi. Com certeza voltarei a comprar. "
        }
    ]

    return (
        <>
            <ThemeHeader />

            <StyledAvaliacoes>
                <Flex
                    backgroundImage={bg}
                    w="100%"
                    h="304px"
                    objectFit="fill"
                    justifyContent="center"
                    p="27px 0 0 0"
                >
                    <h1>Opiniões dos nossos clientes</h1>
                </Flex>

                <Flex h="392px" justifyContent="center" alignItems="center">
                    <List
                        p="50px 0 0 0"
                        w="84.6875vw"
                        h="fit-content"
                        display="flex"
                        flexFlow="row nowrap"
                        overflowX="scroll"
                        gap="20px"
                    >
                        {avaliacoesExemplo.map((avaliacao, index) => (
                            <CardAvaliacao avaliacao={avaliacao} key={index} />
                        ))}
                    </List>
                </Flex>
            </StyledAvaliacoes>
        </>
    )
}

export default Avaliacoes
