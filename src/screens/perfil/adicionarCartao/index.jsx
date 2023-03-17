import { useState } from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
    Box,
    Input,
    TextButton,
    Container,
    Title,
    ButtonFull,
} from "@components/globalStyles";
import { CardInfo } from "@components/globalComponents";

export default function AdicionarCartao() {
    const [inputFocus, setInputFocus] = useState({
        input1: false,
        input2: false,
        input3: false,
        input4: false,
    });

    const { input1, input2, input3, input4 } = inputFocus;

    const [formDados, setFormDados] = useState({
        nome: "",
        numero: "",
        vencimento: "",
        cvv: "",
    });

    const { nome, numero, vencimento, cvv } = formDados;

    return (
        <SafeAreaView flex={1}>
            <StatusBar style="auto" />
            <Container flex={1}>
                <Box mt="30px">
                    <CardInfo
                        nome={nome}
                        numero={numero}
                        vencimento={vencimento}
                        cvv={cvv}
                    />
                </Box>
                <Box mt="50px">
                    <Box pt="10px" pb="10px">
                        <Box>
                            <Title>Nome do Titular</Title>
                        </Box>
                        <Input
                            maxLength={50}
                            value={nome}
                            onChangeText={(e) =>
                                setFormDados({ ...formDados, nome: e })
                            }
                            onFocus={() =>
                                setInputFocus({ ...inputFocus, input1: true })
                            }
                            onBlur={() =>
                                setInputFocus({ ...inputFocus, input1: false })
                            }
                            focused={input1}
                        />
                    </Box>
                    <Box pt="10px" pb="10px">
                        <Box>
                            <Title>Numero do Cartão</Title>
                        </Box>
                        <Input
                            maxLength={16}
                            value={numero}
                            onChangeText={(e) =>
                                setFormDados({ ...formDados, numero: e })
                            }
                            onFocus={() =>
                                setInputFocus({ ...inputFocus, input2: true })
                            }
                            onBlur={() =>
                                setInputFocus({ ...inputFocus, input2: false })
                            }
                            focused={input2}
                        />
                    </Box>
                    <Box pt="10px" pb="10px">
                        <Box flexDirection="row" justifyContent="space-between">
                            <Box w="48%">
                                <Box>
                                    <Title>Vencimento</Title>
                                </Box>
                                <Input
                                    maxLength={4}
                                    value={vencimento}
                                    onChangeText={(e) =>
                                        setFormDados({
                                            ...formDados,
                                            vencimento: e,
                                        })
                                    }
                                    onFocus={() =>
                                        setInputFocus({
                                            ...inputFocus,
                                            input3: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setInputFocus({
                                            ...inputFocus,
                                            input3: false,
                                        })
                                    }
                                    focused={input3}
                                />
                            </Box>
                            <Box w="48%">
                                <Box>
                                    <Title>CVV</Title>
                                </Box>
                                <Input
                                    maxLength={3}
                                    value={cvv}
                                    onChangeText={(e) =>
                                        setFormDados({ ...formDados, cvv: e })
                                    }
                                    onFocus={() =>
                                        setInputFocus({
                                            ...inputFocus,
                                            input4: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setInputFocus({
                                            ...inputFocus,
                                            input4: false,
                                        })
                                    }
                                    focused={input4}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
            <Box position="absolute" bottom={30} w="100%">
                <Container>
                    <ButtonFull onPress={() => Navigate("Home")}>
                        <TextButton>Adicionar Cartão</TextButton>
                    </ButtonFull>
                </Container>
            </Box>
        </SafeAreaView>
    );
}
