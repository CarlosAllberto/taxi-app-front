import { TouchableOpacity, StyleSheet } from 'react-native';
import { Box, IMG } from "@components/globalStyles";
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

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.cor1,
        padding: 10,
        margin: 10,
        borderRadius: 50,
        opacity: 0.5
    }
});