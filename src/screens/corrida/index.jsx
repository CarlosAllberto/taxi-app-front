import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Box, IMG, Line, Title, Texto, Button } from "@components/globalStyles";
import colors from "@helpers";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import mapStyle from "@helpers/mapStyle";
import { useColorScheme } from "react-native";
import { useTheme } from "styled-components";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Corrida({ navigation }) {
    const deviceTheme = useColorScheme();
    const mapTheme = mapStyle[deviceTheme] || mapStyle.light;

    const Navigate = (screen) => navigation.navigate(screen);

    const theme = useTheme();
    const themeBar = theme.tabBar;

    return (
        <SafeAreaView flex={1}>
            <StatusBar style="auto" />
            <Box flex={1}>
                <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.005, //0.003
                        longitudeDelta: 0.005, //0.003
                    }}
                    provider={PROVIDER_GOOGLE}
                    customMapStyle={mapTheme}
                    style={styles.map}
                >
                    <Marker
                        coordinate={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                        }}
                    >
                        <IMG
                            w="80px"
                            h="80px"
                            radius="100px"
                            style={styles.imageMarker}
                            source={require("@assets/IMG_PERFIL.jpg")}
                        />
                    </Marker>
                </MapView>
                <Box mt="30px" mr="10px">
                    <Box flexDirection="row" pl="16px" pr="16px">
                        <Button
                            width="auto"
                            backgroundColor={
                                deviceTheme === "dark"
                                    ? colors.cor6
                                    : colors.cor10
                            }
                            onPress={() => navigation.goBack()}
                        >
                            <Ionicons
                                name="chevron-back-outline"
                                size={40}
                                color={theme.icon}
                            />
                        </Button>
                    </Box>
                </Box>
                <Box position="absolute" bottom={0} w="100%">
                    <Box
                        mr="10px"
                        flexDirection="row"
                        justifyContent="flex-end"
                    >
                        <TouchableOpacity style={styles.button}>
                            <MaterialCommunityIcons
                                name="crosshairs-gps"
                                size={30}
                                color={colors.cor6}
                            />
                        </TouchableOpacity>
                    </Box>
                    <Box style={styles.inputBox(themeBar)}>
                        <Box>
                            <Box
                                flexDirection="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Title>Driver is Arriving...</Title>
                                <Texto>2 mins</Texto>
                            </Box>
                        </Box>
                        <Box mt="20px" mb="20px">
                            <Line />
                        </Box>
                        <Box mt="10px" mb="10px">
                            <Box flexDirection="row" alignItems="center">
                                <Box mr="20px">
                                    <TouchableOpacity onPress={() => Navigate("Motorista Detalhes")}>
                                        <IMG
                                            w="70px"
                                            h="70px"
                                            radius="50px"
                                            source={require("@assets/IMG_PERFIL.jpg")}
                                        />
                                    </TouchableOpacity>
                                </Box>
                                <Box flex={1}>
                                    <Box
                                        flexDirection="row"
                                        alignItems="center"
                                        justifyContent="space-between"
                                    >
                                        <Title>Daniel Austin</Title>
                                        <Box
                                            flexDirection="row"
                                            alignItems="center"
                                        >
                                            <MaterialCommunityIcons
                                                name="star-half-full"
                                                size={30}
                                                color={colors.cor1}
                                            />
                                            <Texto>4.8</Texto>
                                        </Box>
                                    </Box>
                                    <Box
                                        flexDirection="row"
                                        alignItems="center"
                                        justifyContent="space-between"
                                    >
                                        <Texto>Mercedes-Benz E-Class</Texto>
                                        <Title>HSW-4736</Title>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box flexDirection="row" justifyContent="center">
                            <TouchableOpacity onPress={() => Navigate("Cancelar Corrida")} style={styles.buttonClose}>
                                <MaterialCommunityIcons
                                    name="close"
                                    size={30}
                                    color={colors.cor6}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <MaterialCommunityIcons
                                    name="chat-processing"
                                    size={30}
                                    color={colors.cor6}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <MaterialCommunityIcons
                                    name="phone"
                                    size={30}
                                    color={colors.cor6}
                                />
                            </TouchableOpacity>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
        width: "100%",
        height: "100%",
    },
    inputBox: (themeBar) => ({
        backgroundColor: themeBar,
        width: "100%",
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 20,
        paddingLeft: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 1,
    }),
    imageMarker: {
        borderWidth: 2,
        borderColor: colors.cor1,
        resizeMode: "contain",
    },
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
