import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
    Container,
    Box,
    Input,
    Texto,
    IMG,
    TitleGG,
    ButtonOutline,
    TextButton,
} from "@components/globalStyles";
import { SearchBar } from "@components/globalComponents";
import colors from "@helpers";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import mapStyle from "@helpers/mapStyle";
import { useColorScheme } from "react-native";
import { useTheme } from "styled-components";

export default function Ligacao() {
    return (
        <SafeAreaView flex={1}>
            <StatusBar style="auto" />
            <Container flex={1}>
                <Box flex={1}>
                    <Box flex={1} flexDirection="row" alignItems="center" justifyContent="center">
                        <Box>
                            <Box flexDirection="row" justifyContent="center">
                               <IMG w="220px" radius="150px" h="220px" source={require("@assets/IMG_PERFIL.jpg")}/> 
                            </Box>
                            <Box mt="100px">
                                <TitleGG>Daniel Austin</TitleGG>
                                <Box flexDirection="row" justifyContent="center">
                                    <Texto>01:50 minutos</Texto>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    
                    <Box position="absolute" bottom={0} w="100%">
                        <Box pt="20px" pb="20px">
                            <Box flexDirection="row" justifyContent="center">
                            <TouchableOpacity style={styles.buttonClose}>
                                    <MaterialCommunityIcons
                                        name="close"
                                        size={30}
                                        color={colors.cor6}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button}>
                                    <MaterialCommunityIcons
                                        name="video-off"
                                        size={30}
                                        color={colors.cor6}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button}>
                                    <MaterialCommunityIcons
                                        name="phone-in-talk"
                                        size={30}
                                        color={colors.cor6}
                                    />
                                </TouchableOpacity>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.cor1,
        padding: 20,
        margin: 10,
        borderRadius: 50,
    },
    buttonClose: {
        backgroundColor: colors.cor2,
        padding: 20,
        margin: 10,
        borderRadius: 50,
    },
});