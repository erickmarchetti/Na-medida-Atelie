import { Avatar, Flex, Stack, Text } from "@chakra-ui/react"
import { AiFillHeart } from "react-icons/ai"
import Erick from "../../assets/AvatarImages/Erick.png"
import Izamara from "../../assets/AvatarImages/Izamara.jpg"
import Hitalo from "../../assets/AvatarImages/Hitalo.png"
import Raquel from "../../assets/AvatarImages/Raquel.jpeg"
import Andryws from "../../assets/AvatarImages/Andryws.jfif"
import Fidel from "../../assets/AvatarImages/Fidel.jpg"

export function SobreNosContainer() {
    return (
        <>
            <Text
                marginTop="auto"
                maxW="90%"
                textAlign="justify"
                fontSize="lg"
                fontWeight="bold"
            >
                Lacus interdum lacus at mattis vestibulum cursus platea sit.
                Dui, phasellus id risus maecenas scelerisque tristique lectus
                massa. Libero, eleifend mauris, eget nunc sed leo in ut faucibus
            </Text>
            <Stack alignItems="flex-start" marginTop="auto">
                <Stack alignItems="center" direction="row">
                    <Text fontSize="2xl" fontFamily="Dancing Script">
                        Desenvolvido com{" "}
                    </Text>
                    <AiFillHeart color="#E53E3E" />
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
                            border="2px solid #181818"
                            size="lg"
                            name="Raquel Carvalho"
                            src={Raquel}
                        />
                        <Text fontFamily="Dancing Script">Raquel Carvalho</Text>
                    </Flex>
                    <Flex direction="column" alignItems="center">
                        <Avatar
                            border="2px solid #181818"
                            size="lg"
                            name="Erick Marchetti"
                            src={Erick}
                        />
                        <Text fontFamily="Dancing Script">Erick Marchetti</Text>
                    </Flex>
                    <Flex direction="column" alignItems="center">
                        <Avatar
                            border="2px solid #181818"
                            size="lg"
                            name="Hitalo Santos"
                            src={Hitalo}
                        />
                        <Text fontFamily="Dancing Script">Hitalo Santos</Text>
                    </Flex>
                    <Flex direction="column" alignItems="center">
                        <Avatar
                            border="2px solid #181818"
                            size="lg"
                            name="Izamara Ágata"
                            src={Izamara}
                        />
                        <Text fontFamily="Dancing Script">Izamara Ágata</Text>
                    </Flex>
                    <Flex direction="column" alignItems="center">
                        <Avatar
                            border="2px solid #181818"
                            size="lg"
                            name="Fidel Marques"
                            src={Fidel}
                        />
                        <Text fontFamily="Dancing Script">Fidel Marques</Text>
                    </Flex>
                    <Flex direction="column" alignItems="center">
                        <Avatar
                            border="2px solid #181818"
                            size="lg"
                            name="Andryws Görtz"
                            src={Andryws}
                        />
                        <Text fontFamily="Dancing Script">Andryws Görtz</Text>
                    </Flex>
                </Stack>
            </Stack>
        </>
    )
}
