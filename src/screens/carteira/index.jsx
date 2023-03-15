import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Box, Container, TitleGG, IMG, Title, Texto } from "@components/globalStyles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "@helpers";

export default function Carteira() {

    const transacoes = [
        {
            nome: "Carlos Alberto",
            data: "Dec 19, 2023",
            hora: "14:00",
            valor: "R$ 14,00",
            tipo: "Pago"
        },
        {
            nome: "Carlos Alberto",
            data: "Dec 19, 2023",
            hora: "14:00",
            valor: "R$ 07,00",
            tipo: "Recebido"
        },
        {
            nome: "Carlos Alberto",
            data: "Dec 19, 2023",
            hora: "14:00",
            valor: "R$ 14,00",
            tipo: "Pago"
        },
        {
            nome: "Carlos Alberto",
            data: "Dec 19, 2023",
            hora: "14:00",
            valor: "R$ 07,00",
            tipo: "Recebido"
        },
    ]

    return(
        <SafeAreaView flex={1}>
            <StatusBar style="auto" />
            <Container flex={1}>
                <Box mt="30px" mb="30px">
                    <TitleGG>Transações</TitleGG>
                </Box>
                <Box>
                    {transacoes.map((text, index) => {

                        let iconName;
                        let iconColor;

                        if(text.tipo === "Pago") {
                            iconName = "arrow-up-bold-box";
                            iconColor = "red";
                        } else {
                            iconName = "arrow-down-bold-box";
                            iconColor = colors.cor4;
                        }

                        return(
                            <Box key={index} pt="15px" pb="15px">
                                <Box flexDirection="row" alignItems="center">
                                    <Box mr="20px">
                                        <IMG w="70px" h="70px" radius="50px" source={require("@assets/IMG_PERFIL.jpg")} />
                                    </Box>
                                    <Box>
                                        <Box flexDirection="row" alignItems="center" justifyContent="space-between" w="77%">
                                            <Title>{text.nome}</Title>
                                            <Title>{text.valor}</Title>
                                        </Box>
                                        <Box flexDirection="row" alignItems="center" justifyContent="space-between" w="77%">
                                            <Box>
                                                <Texto>{text.data} | {text.hora}</Texto>
                                            </Box>
                                            <Box flexDirection="row" alignItems="center">
                                                <Texto>{text.tipo}</Texto>
                                                <Box pl="5px">
                                                    <MaterialCommunityIcons name={iconName} size={20} color={iconColor} />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        );
                    })}
                </Box>
            </Container>
        </SafeAreaView>
    );
}