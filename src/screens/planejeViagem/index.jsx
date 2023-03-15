import { useState } from "react";
import { SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Container, Box, Input, Line, IMG, Title, Texto, ButtonOutline, TextButton } from "@components/globalStyles";
import colors from "@helpers";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";


export default function PlanejeViagem({navigation}) {

    const Navigate = (screen) => navigation.navigate(screen);

    const [inputFocus, setInputFocus] = useState({
        input1: false,
        input2: false
    });

    const { input1, input2 } = inputFocus;

    const [formDados, setFormDados] = useState({
        partida: "rua das quintangueiras inventadas, 279",
        local: ""
    });

    const { partida, local } = formDados;

    return(
        <SafeAreaView flex={1}>
            <StatusBar style="auto"/>
            <Container flex={1}>
                <Box>
                    <Box>
                        <Box flexDirection="row" alignItems="center">
                            <Input 
                            pl="40px" 
                            placeholder="Insira o local de partida"
                            onFocus={() => setInputFocus({...inputFocus, input1: true})}
                            onBlur={() => setInputFocus({...inputFocus, input1: false})}
                            focused={input1}
                            onChangeText={e => setFormDados({...formDados, partida: e})}
                            value={partida}
                            />
                            <Box pl="5px" position="absolute">
                            <Ionicons name="locate" size={30} color="gray"/>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Box flexDirection="row" alignItems="center">
                            <Input
                            pl="40px"
                            placeholder="Para onde vamos?"
                            autoFocus={true}
                            onFocus={() => setInputFocus({...inputFocus, input2: true})}
                            onBlur={() => setInputFocus({...inputFocus, input2: false})}
                            focused={input2}
                            onChangeText={e => setFormDados({...formDados, local: e})}
                            value={local}
                            />
                            <Box pl="5px" position="absolute">
                            <Ionicons name="location" size={30} color="gray"/>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <ScrollView horizontal={true}>                
                    <Box flexDirection="row">
                        <ButtonOutline>
                            <Box pr="5px">
                                <Ionicons name="location" size={20} color={colors.cor1} />
                            </Box>
                            <TextButton color={colors.cor1}>Casa</TextButton>
                        </ButtonOutline>
                        <ButtonOutline>
                            <Box pr="5px">
                                <Ionicons name="location" size={20} color={colors.cor1} />
                            </Box>
                            <TextButton color={colors.cor1}>Trabalho</TextButton>
                        </ButtonOutline>
                        <ButtonOutline>
                            <Box pr="5px">
                                <Ionicons name="location" size={20} color={colors.cor1} />
                            </Box>
                            <TextButton color={colors.cor1}>Apartamento</TextButton>
                        </ButtonOutline>
                        <ButtonOutline>
                            <Box pr="5px">
                                <Ionicons name="location" size={20} color={colors.cor1} />
                            </Box>
                            <TextButton color={colors.cor1}>Casa da Vó</TextButton>
                        </ButtonOutline>
                    </Box>
                    </ScrollView>
                </Box>
                <Box mt="15px" mb="15px">
                    <Line />
                </Box>
                <Box>
                    <Box mt="5px" mb="5px">
                        <TouchableOpacity onPress={() => Navigate("Escolher Carro")}>
                            <Box flexDirection="row" alignItems="center">
                                <Box mr="20px">
                                    <Ionicons name="time-outline" size={30} color="gray"/>
                                </Box>
                                <Box flexDirection="row" justifyContent="space-between" style={{width: "85%"}}>
                                    <Box>
                                        <Title>Eleonora Hotel</Title>
                                        <Box flexDirection="row" alignItems="center">
                                            <Texto>6 Glandale St. Worcester</Texto>
                                        </Box>
                                    </Box>
                                    <Box flexDirection="row" alignItems="center">
                                        <Title>2.9 km</Title>
                                    </Box>
                                </Box>
                            </Box>
                        </TouchableOpacity>
                    </Box>
                    <Box mt="5px" mb="5px">
                        <TouchableOpacity onPress={() => Navigate("Escolher Carro")}>
                            <Box flexDirection="row" alignItems="center">
                                <Box mr="20px">
                                    <Ionicons name="time-outline" size={30} color="gray"/>
                                </Box>
                                <Box flexDirection="row" justifyContent="space-between" style={{width: "85%"}}>
                                    <Box>
                                        <Title>Eleonora Hotel</Title>
                                        <Box flexDirection="row" alignItems="center">
                                            <Texto>6 Glandale St. Worcester</Texto>
                                        </Box>
                                    </Box>
                                    <Box flexDirection="row" alignItems="center">
                                        <Title>2.9 km</Title>
                                    </Box>
                                </Box>
                            </Box>
                        </TouchableOpacity>
                    </Box>
                    <Box mt="5px" mb="5px">
                        <TouchableOpacity onPress={() => Navigate("Escolher Carro")}>
                            <Box flexDirection="row" alignItems="center">
                                <Box mr="20px">
                                    <Ionicons name="time-outline" size={30} color="gray"/>
                                </Box>
                                <Box flexDirection="row" justifyContent="space-between" style={{width: "85%"}}>
                                    <Box>
                                        <Title>Eleonora Hotel</Title>
                                        <Box flexDirection="row" alignItems="center">
                                            <Texto>6 Glandale St. Worcester</Texto>
                                        </Box>
                                    </Box>
                                    <Box flexDirection="row" alignItems="center">
                                        <Title>2.9 km</Title>
                                    </Box>
                                </Box>
                            </Box>
                        </TouchableOpacity>
                    </Box>
                    <Box mt="5px" mb="5px">
                        <TouchableOpacity onPress={() => Navigate("Escolher Carro")}>
                            <Box flexDirection="row" alignItems="center">
                                <Box mr="20px">
                                    <Ionicons name="time-outline" size={30} color="gray"/>
                                </Box>
                                <Box flexDirection="row" justifyContent="space-between" style={{width: "85%"}}>
                                    <Box>
                                        <Title>Eleonora Hotel</Title>
                                        <Box flexDirection="row" alignItems="center">
                                            <Texto>6 Glandale St. Worcester</Texto>
                                        </Box>
                                    </Box>
                                    <Box flexDirection="row" alignItems="center">
                                        <Title>2.9 km</Title>
                                    </Box>
                                </Box>
                            </Box>
                        </TouchableOpacity>
                    </Box>
                </Box>
            </Container>
        </SafeAreaView>
    );
}