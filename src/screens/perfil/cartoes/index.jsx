import { SafeAreaView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
    Box,
    TextButton,
    Container,
    Title,
    ButtonFull,
    IMG,
    Texto,
    Paper,
} from "@components/globalStyles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "@helpers";

export default function Cartoes({ navigation }) {
    const Navigate = (screen) => navigation.navigate(screen);

    const cartoesLista = [
        { bandeira: "visa", numero: "2933.3902.0393.2099" },
        { bandeira: "visa", numero: "8938.0299.3029.9933" },
        { bandeira: "visa", numero: "2933.3902.0393.2099" },
        { bandeira: "visa", numero: "8938.0299.3029.9933" },
        { bandeira: "visa", numero: "2933.3902.0393.2099" },
    ];

    return (
        <SafeAreaView flex={1}>
            <StatusBar style="auto" />
            <Container flex={1}>
                <Box mt="30px">
                    <Title>Meus Cartões</Title>
                </Box>
                <Box mt="30px">
                    {cartoesLista.map((text, index) => {
                        return (
                            <Box key={index} pt="5px" pb="5px">
                                <Paper>
                                    <Box flexDirection="row">
                                        <Box
                                            flexDirection="row"
                                            alignItems="center"
                                            mr="20px"
                                        >
                                            <IMG
                                                w="60px"
                                                h="60px"
                                                source={require(`@assets/visa.png`)}
                                            />
                                        </Box>
                                        <Box
                                            flex={1}
                                            flexDirection="row"
                                            alignItems="center"
                                            justifyContent="space-between"
                                        >
                                            <Box>
                                                <Title>{text.bandeira}</Title>
                                                <Texto>{text.numero}</Texto>
                                            </Box>
                                            <Box>
                                                <TouchableOpacity>
                                                    <MaterialCommunityIcons
                                                        name="trash-can"
                                                        size={30}
                                                        color={colors.cor10}
                                                    />
                                                </TouchableOpacity>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Box>
                        );
                    })}
                </Box>
            </Container>
            <Box position="absolute" bottom={30} w="100%">
                <Container>
                    <ButtonFull onPress={() => Navigate("Adicionar Cartão")}>
                        <TextButton>Novo Cartão</TextButton>
                    </ButtonFull>
                </Container>
            </Box>
        </SafeAreaView>
    );
}
