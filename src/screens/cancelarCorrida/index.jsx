import Checkbox from "expo-checkbox";
import { useState } from "react";
import {
    Box,
    Container,
    Texto,
    Title,
    Input,
    ButtonFull,
    TextButton,
} from "@components/globalStyles";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import colors from "@helpers";

export default function CancelarCorrida({ navigation }) {
    const Navigate = (screen) => navigation.navigate(screen);

    const [formDados, setFormDados] = useState({
        motivo1: false,
        motivo2: false,
        motivo3: false,
        motivo4: false,
        motivo5: false,
        motivo6: false,
        outroMotivo: "",
    });

    const {
        motivo1,
        motivo2,
        motivo3,
        motivo4,
        motivo5,
        motivo6,
        outroMotivo,
    } = formDados;

    const [inputFocus, setInputFocus] = useState(false);

    return (
        <SafeAreaView flex={1}>
            <StatusBar style="auto" />
            <Container flex={1}>
                <Box mt="30px" flex={1}>
                    <Box>
                        <Texto>Selecione o motivo do cancelamento:</Texto>
                    </Box>

                    <Box
                        flexDirection="row"
                        alignItems="center"
                        pt="5px"
                        pb="5px"
                    >
                        <Box mr="20px">
                            <Checkbox
                                value={motivo1}
                                color={motivo1 ? colors.cor1 : undefined}
                                onValueChange={() =>
                                    setFormDados({
                                        ...formDados,
                                        motivo1: !motivo1,
                                    })
                                }
                            />
                        </Box>
                        <Box>
                            <Texto>Esperando muito tempo</Texto>
                        </Box>
                    </Box>

                    <Box
                        flexDirection="row"
                        alignItems="center"
                        pt="5px"
                        pb="5px"
                    >
                        <Box mr="20px">
                            <Checkbox
                                value={motivo2}
                                color={motivo2 ? colors.cor1 : undefined}
                                onValueChange={() =>
                                    setFormDados({
                                        ...formDados,
                                        motivo2: !motivo2,
                                    })
                                }
                            />
                        </Box>
                        <Box>
                            <Texto>Não foi possível contatar o motorista</Texto>
                        </Box>
                    </Box>

                    <Box
                        flexDirection="row"
                        alignItems="center"
                        pt="5px"
                        pb="5px"
                    >
                        <Box mr="20px">
                            <Checkbox
                                value={motivo3}
                                color={motivo3 ? colors.cor1 : undefined}
                                onValueChange={() =>
                                    setFormDados({
                                        ...formDados,
                                        motivo3: !motivo3,
                                    })
                                }
                            />
                        </Box>
                        <Box>
                            <Texto>Motorista negado a ir ao destino</Texto>
                        </Box>
                    </Box>

                    <Box
                        flexDirection="row"
                        alignItems="center"
                        pt="5px"
                        pb="5px"
                    >
                        <Box mr="20px">
                            <Checkbox
                                value={motivo4}
                                color={motivo4 ? colors.cor1 : undefined}
                                onValueChange={() =>
                                    setFormDados({
                                        ...formDados,
                                        motivo4: !motivo4,
                                    })
                                }
                            />
                        </Box>
                        <Box>
                            <Texto>Motorista negado a vir para a coleta</Texto>
                        </Box>
                    </Box>

                    <Box
                        flexDirection="row"
                        alignItems="center"
                        pt="5px"
                        pb="5px"
                    >
                        <Box mr="20px">
                            <Checkbox
                                value={motivo5}
                                color={motivo5 ? colors.cor1 : undefined}
                                onValueChange={() =>
                                    setFormDados({
                                        ...formDados,
                                        motivo5: !motivo5,
                                    })
                                }
                            />
                        </Box>
                        <Box>
                            <Texto>Endereço incorreto mostrado</Texto>
                        </Box>
                    </Box>

                    <Box
                        flexDirection="row"
                        alignItems="center"
                        pt="5px"
                        pb="5px"
                    >
                        <Box mr="20px">
                            <Checkbox
                                value={motivo6}
                                color={motivo6 ? colors.cor1 : undefined}
                                onValueChange={() =>
                                    setFormDados({
                                        ...formDados,
                                        motivo6: !motivo6,
                                    })
                                }
                            />
                        </Box>
                        <Box>
                            <Texto>O preço está exagerado</Texto>
                        </Box>
                    </Box>

                    <Box mt="20px">
                        <Title>Outro</Title>
                        <Input
                            onFocus={() => setInputFocus(!inputFocus)}
                            onBlur={() => setInputFocus(!inputFocus)}
                            focused={inputFocus}
                            placeholder="outro motivo"
                            value={outroMotivo}
                            onChangeText={(e) =>
                                setFormDados({ ...formDados, outroMotivo: e })
                            }
                        />
                    </Box>

                    <Box position="absolute" bottom={30} w="100%">
                        <Container>
                            <ButtonFull onPress={() => Navigate("Home")}>
                                <TextButton>Enviar</TextButton>
                            </ButtonFull>
                        </Container>
                    </Box>
                </Box>
            </Container>
        </SafeAreaView>
    );
}
