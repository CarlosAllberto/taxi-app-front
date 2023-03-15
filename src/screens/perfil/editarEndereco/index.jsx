import { useState, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Box, Input, IMG, TitleGG, Line, Title, ButtonFull, TextButton } from "@components/globalStyles";
import colors from "@helpers";
import Ionicons from "@expo/vector-icons/Ionicons";
import mapStyle from "@helpers/mapStyle";
import * as Location from "expo-location";
import { useColorScheme } from 'react-native';
import { useTheme } from "styled-components";


export default function EditarEndereco({navigation}) {

    const Navigate = (screen) => navigation.navigate(screen);

    const deviceTheme = useColorScheme();
    const mapTheme = mapStyle[deviceTheme] || mapStyle.light;

    const theme = useTheme();
    const themeBar = theme.tabBar;

    const [formDados, setFormDados] = useState({
      nome: "Apartamento",
      endereco: "rua da quitanga, 239"
    })

    const [inputFocus, setInputFocus] = useState({
        input1: false,
        input2: false
    });

    const { input1, input2 } = inputFocus;

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
      (async () => {
        let status = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }

        let location = await Location.getCurrentPositionAsync();
        setLocation(location);
      })()
    }, []);

    return(
        <SafeAreaView flex={1}>
            <StatusBar style="auto"/>
            <Box flex={1}>
              <MapView 
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
                }}
                provider={PROVIDER_GOOGLE}
                customMapStyle={mapTheme}
                style={styles.map}
              >
                <Marker 
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324
                    }}
                >
                  <IMG w="80px" h="80px" radius="100px" style={styles.imageMarker} source={require("@assets/IMG_PERFIL.jpg")} />
                </Marker>
              </MapView>
              <Box position="absolute" bottom={0} w="100%">
                <Box style={styles.inputBox(themeBar)}>
                  <Box>
                    <TitleGG>Detalhes</TitleGG>
                  </Box>
                  <Box pt="10px" pb="10px">
                    <Line />
                  </Box>
                  <Box pt="10px" pb="10px">
                    <Box>
                      <Title>Nome do Endereço</Title>
                    </Box>
                    <Input
                      onFocus={() => setInputFocus({...inputFocus, input1: true})}
                      onBlur={() => setInputFocus({...inputFocus, input1: false})}
                      focused={input1}
                      placeholder="Apartamento"
                      value={formDados.nome}
                      onChange={e => setFormDados({...formDados, nome: e})}
                    />
                  </Box>
                  <Box pt="10px" pb="10px">
                    <Box>
                      <Title>Detalhes do Endereço</Title>
                    </Box>
                    <Box flexDirection="row" alignItems="center">
                      <Input
                        onFocus={() => setInputFocus({...inputFocus, input2: true})}
                        onBlur={() => setInputFocus({...inputFocus, input2: false})}
                        focused={input2} 
                        pl="40px" 
                        placeholder="Rua tal, 190"
                        value={formDados.endereco}
                        onChange={e => setFormDados({...formDados, endereco: e})}
                      />
                      <Box pl="5px" position="absolute">
                        <Ionicons name="location" size={30} color="gray"/>
                      </Box>
                    </Box>
                  </Box>
                  <Box mt="10px">
                    <ButtonFull onPress={() => Navigate("Home")}>
                        <TextButton>Adicionar Endereço</TextButton>
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
    height: "60%"
  },
  inputBox: themeBar => ({
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
});