import { TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Box, IMG ,Container, Texto } from "@components/globalStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "@helpers";


export const ImagePerfil = ({source}) => {
    return(
        <Box>
            <IMG w="120px" h="120px" radius="100px" source={source} />
            <Box flexDirection="row" justifyContent="flex-end" mt="-35px">
                <Box backgroundColor={colors.cor1} radius="8px">
                    <MaterialCommunityIcons name="pencil" size={25} color={colors.cor6} style={{padding: 3}} />
                </Box>
            </Box>
        </Box>
    );
}

export const SearchBar = ({Navigate}) => {

    return(
        <Box flexDirection="row" justifyContent="flex-end" backgroundColor="transparent">
            <TouchableOpacity style={styles.button} onPress={() => Navigate("Planeje sua próxima viagem")}>
                <Ionicons name="search-outline" size={30} color={colors.cor6}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => Navigate("ComunicacaoTab")}>
                <Ionicons name="notifications-outline" size={30} color={colors.cor6}/>
            </TouchableOpacity>
        </Box>
    );
}

export const CardInfo = ({bandeira, cvv, nome, numero, vencimento}) => {

    const defaultDados = {
        cvv: "CVV",
        nome: "NOME DO TITULAR",
        numero: "0000 0000 0000 0000",
        vencimento : "00/00"
    }

    return (
        <ImageBackground imageStyle={{borderRadius: 15}} style={styles.bgImage} source={require("@assets/BG-Card.png")}>
            <Box pl="20px" pr="20px">
                <Box mt="20px" mb="20px">
                    <Texto style={styles.cardText}>
                        {cvv ? cvv : defaultDados.cvv}
                    </Texto>
                </Box>
                <Box>
                    <Texto style={styles.cardText}>
                        {nome ? nome.toUpperCase() : defaultDados.nome }
                    </Texto>
                    <Box flexDirection="row" justifyContent="space-between">
                        <Texto style={styles.cardText}>
                            {numero ? numero : defaultDados.numero}
                        </Texto>
                        <Texto style={styles.cardText}>
                            {vencimento ? vencimento : defaultDados.vencimento}
                        </Texto>
                    </Box>
                </Box>
            </Box>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.cor1,
        padding: 10,
        margin: 10,
        borderRadius: 50,
        opacity: 0.5
    },
    bgImage: {
        width: "100%", height: 200,
    },
    cardText: {
        color: "#fff", fontSize: 16, fontWeight: "500"
    }
});