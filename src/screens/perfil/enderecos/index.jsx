import { Box, Container, ButtonFull, TextButton, Title, Texto, Line } from "@components/globalStyles";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "@helpers";

export default function Enderecos({navigation}) {

    const Navigate = (screen) => navigation.navigate(screen);

    return(
        <SafeAreaView flex={1}>
            <StatusBar style="auto" />
            <Container flex={1}>
                <Box mt="30px">
                    <Box flexDirection="row" alignItems="center" mt="10px" mb="10px">
                        <Box mr="20px" flexDirection="row" alignItems="center">
                            <Box
                                w="50px"
                                h="50px" 
                                backgroundColor={colors.cor1} 
                                radius="50px" 
                                flexDirection="row" 
                                alignItems="center" 
                                justifyContent="center"
                            >
                                <Ionicons name="location" size={30} color={colors.cor6} />
                            </Box>
                        </Box>
                        <Box flexDirection="row" justifyContent="space-between" flex={1}>
                            <Box>
                                <Title>Casa</Title>
                                <Box flexDirection="row" alignItems="center">
                                    <Texto>rua 11 de março, 52, 55395-000</Texto>
                                </Box>
                            </Box>
                            <Box flexDirection="row" alignItems="center">
                                <TouchableOpacity onPress={() => Navigate("Editar Endereço")}>
                                    <MaterialCommunityIcons name="pencil" size={30} color={colors.cor1} />
                                </TouchableOpacity>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Line />
                    </Box>
                    <Box flexDirection="row" alignItems="center" mt="10px" mb="10px">
                        <Box mr="20px" flexDirection="row" alignItems="center">
                            <Box 
                                w="50px"
                                h="50px" 
                                backgroundColor={colors.cor1} 
                                radius="50px" 
                                flexDirection="row" 
                                alignItems="center" 
                                justifyContent="center"
                            >
                                <Ionicons name="location" size={30} color={colors.cor6} />
                            </Box>
                        </Box>
                        <Box flexDirection="row" justifyContent="space-between" flex={1}>
                            <Box>
                                <Title>Apartamento</Title>
                                <Box flexDirection="row" alignItems="center">
                                    <Texto>rua 11 de março, 52, 55395-000</Texto>
                                </Box>
                            </Box>
                            <Box flexDirection="row" alignItems="center">
                                <TouchableOpacity onPress={() => Navigate("Editar Endereço")}>
                                    <MaterialCommunityIcons name="pencil" size={30} color={colors.cor1} />
                                </TouchableOpacity>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Line />
                    </Box>
                    <Box flexDirection="row" alignItems="center" mt="10px" mb="10px">
                        <Box mr="20px" flexDirection="row" alignItems="center">
                            <Box
                                w="50px"
                                h="50px" 
                                backgroundColor={colors.cor1} 
                                radius="50px" 
                                flexDirection="row" 
                                alignItems="center" 
                                justifyContent="center"
                            >
                                <Ionicons name="location" size={30} color={colors.cor6} />
                            </Box>
                        </Box>
                        <Box flexDirection="row" justifyContent="space-between" flex={1}>
                            <Box>
                                <Title>Casa</Title>
                                <Box flexDirection="row" alignItems="center">
                                    <Texto>rua 11 de março, 52, 55395-000</Texto>
                                </Box>
                            </Box>
                            <Box flexDirection="row" alignItems="center">
                                <TouchableOpacity onPress={() => Navigate("Editar Endereço")}>
                                    <MaterialCommunityIcons name="pencil" size={30} color={colors.cor1} />
                                </TouchableOpacity>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Line />
                    </Box>
                    <Box flexDirection="row" alignItems="center" mt="10px" mb="10px">
                        <Box mr="20px" flexDirection="row" alignItems="center">
                            <Box
                                w="50px"
                                h="50px" 
                                backgroundColor={colors.cor1} 
                                radius="50px" 
                                flexDirection="row" 
                                alignItems="center" 
                                justifyContent="center"
                            >
                                <Ionicons name="location" size={30} color={colors.cor6} />
                            </Box>
                        </Box>
                        <Box flexDirection="row" justifyContent="space-between" flex={1}>
                            <Box>
                                <Title>Apartamento</Title>
                                <Box flexDirection="row" alignItems="center">
                                    <Texto>rua 11 de março, 52, 55395-000</Texto>
                                </Box>
                            </Box>
                            <Box flexDirection="row" alignItems="center">
                                <TouchableOpacity onPress={() => Navigate("Editar Endereço")}>
                                    <MaterialCommunityIcons name="pencil" size={30} color={colors.cor1} />
                                </TouchableOpacity>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Line />
                    </Box>
                </Box>
            </Container>
            <Box position="absolute" bottom={30} w="100%">
                <Container>
                    <ButtonFull onPress={() => Navigate("Adicionar Endereço")}>
                        <TextButton>Adicionar Novo Endereço</TextButton>
                    </ButtonFull>
                </Container>
            </Box>
        </SafeAreaView>
    );
}
