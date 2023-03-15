import { useState } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
    Box,
    IMG,
    ButtonFull,
    TextButton,
    Texto,
    Title,
    Button,
} from "@components/globalStyles";
import colors from "@helpers";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import mapStyle from "@helpers/mapStyle";
import { useColorScheme } from "react-native";
import { useTheme } from "styled-components";
import { BoxCar } from "./style";

export default function EscolherCarro({ navigation }) {
    const Navigate = (screen) => navigation.navigate(screen);

    const deviceTheme = useColorScheme();
    const mapTheme = mapStyle[deviceTheme] || mapStyle.light;

    const theme = useTheme();
    const themeBar = theme.tabBar;

    const [corrida, setCorrida] = useState("TaxiX");

    return (
        <SafeAreaView flex={1}>
            <StatusBar style="auto" />
            <Box flex={1}>
                <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.01, //0.003
                        longitudeDelta: 0.01, //0.003
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
                            w="40px"
                            h="40px"
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
                    <Box style={styles.inputBox(themeBar)}>
                        <Box ml="16px" mr="16px">
                            <Texto flexDirection="row" justifyContent="center">
                                Escolha uma viagem ou deslize para cima para ver
                                mais
                            </Texto>
                        </Box>
                        <Box>
                            <TouchableOpacity
                                onPress={() => setCorrida("TaxiX")}
                            >
                                <BoxCar active={corrida === "TaxiX"}>
                                    <Box flexDirection="row">
                                        <Box
                                            flexDirection="row"
                                            alignItems="center"
                                            mr="20px"
                                        >
                                            <IMG
                                                w="60px"
                                                h="60px"
                                                source={require("@assets/carro.png")}
                                            />
                                        </Box>
                                        <Box>
                                            <Title>TaxiX</Title>
                                            <Texto>Viagens baratas</Texto>
                                        </Box>
                                    </Box>
                                </BoxCar>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setCorrida("Flash")}
                            >
                                <BoxCar active={corrida === "Flash"}>
                                    <Box flexDirection="row">
                                        <Box
                                            flexDirection="row"
                                            alignItems="center"
                                            mr="20px"
                                        >
                                            <IMG
                                                w="60px"
                                                h="60px"
                                                source={require("@assets/caixa.png")}
                                            />
                                        </Box>
                                        <Box>
                                            <Title>Taxi Flash</Title>
                                            <Texto>Envie ou receba itens</Texto>
                                        </Box>
                                    </Box>
                                </BoxCar>
                            </TouchableOpacity>
                        </Box>
                        <Box ml="16px" mr="16px">
                            <TouchableOpacity>
                                <Box
                                    flexDirection="row"
                                    justifyContent="space-between"
                                    mt="15px"
                                    mb="15px"
                                >
                                    <Box
                                        flexDirection="row"
                                        alignItems="center"
                                    >
                                        <Box mr="10px">
                                            <FontAwesome5
                                                name="money-bill"
                                                size={30}
                                                color={colors.cor1}
                                            />
                                        </Box>
                                        <Title>Dinheiro</Title>
                                    </Box>
                                    <Box>
                                        <Ionicons
                                            name="chevron-forward-outline"
                                            size={30}
                                            color={theme.icon}
                                        />
                                    </Box>
                                </Box>
                            </TouchableOpacity>
                        </Box>
                        <Box ml="16px" mr="16px">
                            <ButtonFull
                                onPress={() => Navigate("Procurando Motorista")}
                            >
                                <TextButton>Comfirmar TAXI</TextButton>
                            </ButtonFull>
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
        height: "60%",
    },
    inputBox: (themeBar) => ({
        backgroundColor: themeBar,
        width: "100%",
        paddingTop: 20,
        paddingBottom: 20,
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
