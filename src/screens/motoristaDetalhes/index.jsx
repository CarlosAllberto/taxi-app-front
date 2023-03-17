import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Box, Title, Texto, Paper, Container, IMG } from "@components/globalStyles";
import colors from "@helpers";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function MotoristaDetalhes({ navigation }) {
    const Navigate = (screen) => navigation.navigate(screen);

    return (
        <SafeAreaView flex={1}>
            <StatusBar style="auto" />
            <Container flex={1}>
                <Box mt="30px" flex={1}>
                    <Box mb="30px">
                        <Box>
                            <Box
                                mb="20px"
                                w="100%"
                                flexDirection="row"
                                justifyContent="center"
                            >
                                <IMG w="120px" radius="100px" h="120px" source={require("@assets/IMG_PERFIL.jpg")}/> 
                            </Box>
                            <Box>
                                <Title style={{ textAlign: "center" }}>
                                    Carlos Alberto
                                </Title>
                                <Texto style={{ textAlign: "center" }}>
                                    +55 11 95997-3501
                                </Texto>
                            </Box>
                        </Box>
                    </Box>
                    <Box mb="30px">
                        <Paper>
                            <Box flexDirection="row" justifyContent="center">
                                <Box>
                                    <TouchableOpacity style={styles.button}>
                                        <MaterialCommunityIcons
                                            name="star-half-full"
                                            size={30}
                                            color={colors.cor6}
                                        />
                                    </TouchableOpacity>
                                    <Box
                                        flexDirection="row"
                                        justifyContent="center"
                                    >
                                        <Title>4.8</Title>
                                    </Box>
                                    <Box
                                        flexDirection="row"
                                        justifyContent="center"
                                    >
                                        <Texto>Pontuação</Texto>
                                    </Box>
                                </Box>
                                <Box>
                                    <TouchableOpacity style={styles.button}>
                                        <MaterialCommunityIcons
                                            name="car-outline"
                                            size={30}
                                            color={colors.cor6}
                                        />
                                    </TouchableOpacity>
                                    <Box
                                        flexDirection="row"
                                        justifyContent="center"
                                    >
                                        <Title>273</Title>
                                    </Box>
                                    <Box
                                        flexDirection="row"
                                        justifyContent="center"
                                    >
                                        <Texto>Corridas</Texto>
                                    </Box>
                                </Box>
                                <Box>
                                    <TouchableOpacity style={styles.button}>
                                        <MaterialCommunityIcons
                                            name="clock-time-three-outline"
                                            size={30}
                                            color={colors.cor6}
                                        />
                                    </TouchableOpacity>
                                    <Box
                                        flexDirection="row"
                                        justifyContent="center"
                                    >
                                        <Title>3</Title>
                                    </Box>
                                    <Box
                                        flexDirection="row"
                                        justifyContent="center"
                                    >
                                        <Texto>Anos</Texto>
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                    <Box>
                        <Paper>
                            <Box>
                                <Box
                                    flexDirection="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Texto>Membro desde</Texto>
                                    <Title>July, 15, 2020</Title>
                                </Box>
                                <Box
                                    flexDirection="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Texto>Modelo Carro</Texto>
                                    <Title>Mercedes-Benz E-Class</Title>
                                </Box>
                                <Box
                                    flexDirection="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Texto>Placa</Texto>
                                    <Title>jks-8382</Title>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                    <Box position="absolute" bottom={0} w="100%">
                        <Box pt="20px" pb="20px">
                            <Box flexDirection="row" justifyContent="center">
                                <TouchableOpacity style={styles.button}>
                                    <MaterialCommunityIcons
                                        name="chat-processing"
                                        size={30}
                                        color={colors.cor6}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button}>
                                    <MaterialCommunityIcons
                                        name="phone"
                                        size={30}
                                        color={colors.cor6}
                                    />
                                </TouchableOpacity>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.cor1,
        padding: 20,
        margin: 10,
        borderRadius: 50,
    },
});
