import { SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Box, TitleGG, Container, Title, Texto, Line } from "@components/globalStyles";
import { ImagePerfil } from "@components/globalComponents";
import colors from "@helpers";
import Ionicons from "@expo/vector-icons/Ionicons";
import routes from "./routes";
import { useTheme } from "styled-components";


export default function Perfil({navigation}) {

    const Navigate = (screen) => navigation.navigate(screen);

    const theme = useTheme();

    return(
        <SafeAreaView flex={1}>
            <StatusBar style="auto" />
            <Container flex={1}>
                <Box mt="30px" flex={1}>
                    <Box>
                        <TitleGG>Perfil</TitleGG>
                    </Box>
                    <Box>
                        <Box>
                            <Box mb="20px" w="100%" flexDirection="row" justifyContent="center">
                                <ImagePerfil source={require("@assets/IMG_PERFIL.jpg")}/>
                            </Box>
                            <Box>
                                <Title style={{textAlign: "center"}}>Carlos Alberto</Title>
                                <Texto style={{textAlign: "center"}}>+55 11 95997-3501</Texto>
                            </Box>
                        </Box>
                    </Box>
                    <Box mt="20px">
                        <Line />
                    </Box>
                    <Box flex={1} mb="60px">
                        <ScrollView flex={1}>
                        {routes.map((text, index) => {
                            return(
                                <TouchableOpacity key={index} onPress={() => Navigate(text.rota)}>
                                    <Box flexDirection="row" alignItems="center" justifyContent="space-between" mt="5px" mb="5px">
                                        <Box flexDirection="row" alignItems="center">
                                            <Box mr="20px">
                                                <Ionicons name={text.icon} size={30} color={text.name !== "Sair" ? theme.icon : "red"} />
                                            </Box>
                                            <Texto color={text.name !== "Sair" ? theme.text : "red"}>{text.name}</Texto>
                                        </Box>
                                        <Box>
                                            <Ionicons name="chevron-forward-outline" size={30} color={theme.icon} />
                                        </Box>
                                    </Box>
                                </TouchableOpacity>
                            );
                        })}
                        </ScrollView>
                    </Box>
                </Box>
            </Container>
        </SafeAreaView>
    );
}