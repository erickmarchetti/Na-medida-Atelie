import { Avatar, Flex, Stack, Text } from "@chakra-ui/react"
import { AiFillHeart } from "react-icons/ai"
import { motion } from "framer-motion"
import Erick from "../../assets/AvatarImages/Erick.png"
import Izamara from "../../assets/AvatarImages/Izamara.jpg"
import Hitalo from "../../assets/AvatarImages/Hitalo.png"
import Raquel from "../../assets/AvatarImages/Raquel.jpeg"
import Andryws from "../../assets/AvatarImages/Andryws.jfif"
import Fidel from "../../assets/AvatarImages/Fidel.jpg"

export function SobreNosContainer() {
    return (
        <>
            <Stack marginTop="auto" marginRight={0} w="100%">
                <motion.div
                    initial={{ x: 500 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Text
                        marginTop="auto"
                        w="100%"
                        textAlign="justify"
                        fontSize="lg"
                        fontWeight="bold"
                        m="0"
                    >
                        <p>
                            Nós somos uma equipe de devs front-end que
                            identificamos uma deficiência no mercado de roupas
                            sob medida, e quem nunca teve um problema com uma
                            roupa "padrão" que ficou larga numa parte e curta em
                            outra?
                        </p>
                        <br></br>
                        <p>
                            Pensando nisso, nossa equipe desenvolveu este
                            maravilhoso site para suprir essa falta utilizando
                            nosso site como ferramenta que deixa aquela peça que
                            você tanto gostou e não ficou do jeito que mais
                            importa <em>do seu jeito único de ser</em> criando a
                            peça que você desejar especialmente para você.
                        </p>
                    </Text>
                </motion.div>
            </Stack>
            <Stack alignItems="flex-start" marginTop="auto">
                <motion.div
                    initial={{ x: -500 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Stack alignItems="center" direction="row">
                        <Text fontSize="2xl" fontFamily="Dancing Script">
                            Desenvolvido com{" "}
                        </Text>
                        <AiFillHeart color="var(--Red)" />
                        <Text fontSize="2xl" fontFamily="Dancing Script">
                            {" "}
                            por:
                        </Text>
                    </Stack>
                    <Stack
                        direction="row"
                        justifyContent="center"
                        flexWrap="wrap"
                        gap={4}
                    >
                        <Flex direction="column" alignItems="center">
                            <Avatar
                                border="2px solid var(--Black)"
                                size="lg"
                                name="Raquel Carvalho"
                                src={Raquel}
                            />
                            <Text fontFamily="Dancing Script">
                                Raquel Carvalho
                            </Text>
                        </Flex>
                        <Flex direction="column" alignItems="center">
                            <Avatar
                                border="2px solid var(--Black)"
                                size="lg"
                                name="Erick Marchetti"
                                src={Erick}
                            />
                            <Text fontFamily="Dancing Script">
                                Erick Marchetti
                            </Text>
                        </Flex>
                        <Flex direction="column" alignItems="center">
                            <Avatar
                                border="2px solid var(--Black)"
                                size="lg"
                                name="Hitalo Santos"
                                src={Hitalo}
                            />
                            <Text fontFamily="Dancing Script">
                                Hitalo Santos
                            </Text>
                        </Flex>
                        <Flex direction="column" alignItems="center">
                            <Avatar
                                border="2px solid var(--Black)"
                                size="lg"
                                name="Izamara Ágata"
                                src={Izamara}
                            />
                            <Text fontFamily="Dancing Script">
                                Izamara Ágata
                            </Text>
                        </Flex>
                        <Flex direction="column" alignItems="center">
                            <Avatar
                                border="2px solid var(--Black)"
                                size="lg"
                                name="Fidel Marques"
                                src={Fidel}
                            />
                            <Text fontFamily="Dancing Script">
                                Fidel Marques
                            </Text>
                        </Flex>
                        <Flex direction="column" alignItems="center">
                            <Avatar
                                border="2px solid var(--Black)"
                                size="lg"
                                name="Andryws Görtz"
                                src={Andryws}
                            />
                            <Text fontFamily="Dancing Script">
                                Andryws Görtz
                            </Text>
                        </Flex>
                    </Stack>
                </motion.div>
            </Stack>
        </>
    )
}
