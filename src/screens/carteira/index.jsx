import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Box, Container, TitleGG, IMG, Title, Texto } from "@components/globalStyles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "@helpers";

export default function Carteira() {
    return(
        <SafeAreaView flex={1} backgroundColor="#f9f9f9">
            <StatusBar style="auto" />
            <Container>
                <Box mt="30px" mb="30px">
                    <TitleGG>Transações</TitleGG>
                </Box>
                <Box>
                    <Box pt="15px" pb="15px">
                        <Box flexDirection="row" alignItems="center">
                            <Box mr="20px">
                                <IMG w="70px" h="70px" radius="50px" source={require("@assets/IMG_PERFIL.jpg")} />
                            </Box>
                            <Box>
                                <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "77%"}}>
                                    <Title>Carlos Alberto</Title>
                                    <Title>R$ 14,00</Title>
                                </Box>
                                <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "77%"}}>
                                    <Box>
                                        <Texto>Dec 19, 2024 | 14:30</Texto>
                                    </Box>
                                    <Box flexDirection="row" alignItems="center">
                                        <Texto>Pago</Texto>
                                        <Box pl="5px">
                                            <MaterialCommunityIcons name="arrow-up-bold-box" size={20} color="red" />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box pt="15px" pb="15px">
                        <Box flexDirection="row" alignItems="center">
                            <Box mr="20px">
                                <IMG w="70px" h="70px" radius="50px" source={require("@assets/IMG_PERFIL.jpg")} />
                            </Box>
                            <Box>
                                <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "77%"}}>
                                    <Title>Carlos Alberto</Title>
                                    <Title>R$ 05,00</Title>
                                </Box>
                                <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "77%"}}>
                                    <Box>
                                        <Texto>Dec 19, 2024 | 14:30</Texto>
                                    </Box>
                                    <Box flexDirection="row" alignItems="center">
                                        <Texto>Recebido</Texto>
                                        <Box pl="5px">
                                            <MaterialCommunityIcons name="arrow-down-bold-box" size={20} color={colors.cor4} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </SafeAreaView>
    );
}