import { Flex, List } from "@chakra-ui/react"
import { motion } from "framer-motion"
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
                <motion.div
                    initial={{ x: -500 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Flex
                        backgroundImage={bg}
                        backgroundSize="cover"
                        backgroundPosition="center"
                        w="100%"
                        h="45vh"
                        objectFit="fill"
                        justifyContent="center"
                        display="flex"
                        alignItems="center"
                    >
                        <h1>Opiniões dos nossos clientes</h1>
                    </Flex>

                    <Flex h="432px" justifyContent="center" alignItems="center">
                        <List
                            p="50px 5vw 20px 5vw"
                            minW="100vw"
                            maxW="1280px"
                            h="100%"
                            display="flex"
                            justifyContent={{
                                base: "flex-start",
                                lg: "center"
                            }}
                            flexFlow="row"
                            overflowX="scroll"
                            gap="20px"
                        >
                            {avaliacoesExemplo.map((avaliacao, index) => (
                                <CardAvaliacao
                                    avaliacao={avaliacao}
                                    key={index}
                                />
                            ))}
                        </List>
                    </Flex>
                </motion.div>
            </StyledAvaliacoes>
        </>
    )
}

export default Avaliacoes
