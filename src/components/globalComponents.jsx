import { SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Box, Texto, Title, Line, ButtonLarge, TextButton } from "@components/globalStyles";
import { ImagePerfil } from './styles';
import Icon from "react-native-vector-icons/Ionicons";
import colors from "@helpers";
import { withTheme } from 'styled-components';

/*export const MyComponent = ({navigation}) => {

    const Navigate = (screen) => navigation.navigate(screen);

    return (
        <SafeAreaView height="100%" backgroundColor="#000">
            <LinearGradient
            colors={["#010101", "#1E1E1E"]}
            flex={1}
            >
            <Box mt="30px" mb="30px">
                <Container>
                    <Box flexDirection="row" alignItems="center" mb="20px">
                        <Box pr="20px">
                            <TouchableOpacity onPress={() => Navigate("Meu Perfil")}>
                                <ImagePerfil source={require("../../../assets/user-circle-black.png")}/>
                            </TouchableOpacity>
                        </Box>
                        <Box>
                            <Texto>Meu perfil</Texto>
                            <Title>João LCSX</Title>
                        </Box>
                    </Box>
                </Container>
                <Line />
            </Box>
            <Box>
                <Container>
                    <TouchableOpacity onPress={() => Navigate("Home")}>
                    <Box pt="10px" pb="10px" flexDirection="row" alignItems="center">
                        <Box pr="20px">
                            <Icon name="home" size={30} color="#fff" />
                        </Box>
                        <Box>
                            <Texto>Home</Texto>
                        </Box>
                    </Box>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Navigate("Histórico de Solicitações")}>
                    <Box pt="10px" pb="10px" flexDirection="row" alignItems="center">
                        <Box pr="20px">
                            <Icon name="reader" size={30} color="#fff" />
                        </Box>
                        <Box>
                            <Texto>Histórico de Solicitações</Texto>
                        </Box>
                    </Box>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Navigate("Notificações")}>
                    <Box pt="10px" pb="10px" flexDirection="row" alignItems="center">
                        <Box pr="20px">
                            <Icon name="notifications" size={30} color="#fff" />
                        </Box>
                        <Box>
                            <Texto>Notificações</Texto>
                        </Box>
                    </Box>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Navigate("Nossos Termos")}>
                    <Box pt="10px" pb="10px" flexDirection="row" alignItems="center">
                        <Box pr="20px">
                            <Icon name="cog" size={30} color="#fff" />
                        </Box>
                        <Box>
                            <Texto>Permições do sistema</Texto>
                        </Box>
                    </Box>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Navigate("Fale Conosco")}>
                    <Box pt="10px" pb="10px" flexDirection="row" alignItems="center">
                        <Box pr="20px">
                            <Icon name="chatbubble" size={30} color="#fff" />
                        </Box>
                        <Box>
                            <Texto>Fale conosco</Texto>
                        </Box>
                    </Box>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Navigate("Suporte")}>
                    <Box pt="10px" pb="10px" flexDirection="row" alignItems="center">
                        <Box pr="20px">
                            <Icon name="headset" size={30} color="#fff" />
                        </Box>
                        <Box>
                            <Texto>Suporte quem calibra</Texto>
                        </Box>
                    </Box>
                    </TouchableOpacity>
                </Container>
            </Box>
            <Box w="100%" position="absolute" style={{bottom: 20}}>
                <Container>
                    <ButtonLarge>
                        <TextButton>Sair</TextButton>
                    </ButtonLarge>
                </Container>
            </Box>
            </LinearGradient>
        </SafeAreaView>
    );
}*/

export const SearchBar = () => {
    return(
        <Box flexDirection="row" justifyContent="flex-end">
            <TouchableOpacity style={styles.button}>
                <Icon name="search" size={20} color="white"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Icon name="notifications" size={20} color="white"/>
            </TouchableOpacity>
        </Box>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.yellow,
        padding: 15,
        margin: 10,
        borderRadius: 50
    }
});