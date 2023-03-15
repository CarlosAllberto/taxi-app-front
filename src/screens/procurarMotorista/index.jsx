import { useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Container, Box, Title, Texto, IMG } from "@components/globalStyles";
import { StatusBar } from "expo-status-bar";
import mapStyle from "./mapStyle";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import colors from "@helpers";
import { useColorScheme } from "react-native";
import SlideButton from "rn-slide-button";

export default function ProcurarMotorista({ navigation }) {
    const Navigate = (screen) => navigation.navigate(screen);

    useEffect(() => {
        setTimeout(() => Navigate("Corrida"), 1000 * 6);
    }, []);

    const deviceTheme = useColorScheme();
    const mapTheme = mapStyle[deviceTheme] || mapStyle.light;

    return (
        <SafeAreaView flex={1}>
            <StatusBar style="auto" />
            <Box flex={1}>
                <Container>
                    <Box mt="90px" mb="30px">
                        <Box flexDirection="row" justifyContent="center">
                            <Title>Procurando Motorista</Title>
                        </Box>
                        <Box flexDirection="row" justifyContent="center">
                            <Texto>
                                Motorista sera encontrado em algums segundos,
                                seja paciente.
                            </Texto>
                        </Box>
                    </Box>
                </Container>
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
                </Box>
                <Box>
                    <Container>
                        <Box mt="30px" mb="30px">
                            <SlideButton
                                title="deslize para cancelar"
                                width={250}
                                thumbStyle={{ backgroundColor: colors.cor2 }}
                                containerStyle={{
                                    backgroundColor:
                                        deviceTheme === "dark"
                                            ? colors.cor9
                                            : colors.cor3,
                                }}
                                underlayStyle={{
                                    backgroundColor:
                                        deviceTheme === "dark"
                                            ? colors.cor8
                                            : colors.cor2,
                                }}
                                onSlideEnd={() => Navigate("Home")}
                                autoReset={true}
                            />
                        </Box>
                    </Container>
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
});
