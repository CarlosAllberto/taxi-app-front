import { useState, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Box, Input, IMG, ButtonOutline, TextButton } from "@components/globalStyles";
import { SearchBar } from "@components/globalComponents";
import colors from "@helpers";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import mapStyle from "@helpers/mapStyle";
import { ThemeProvider } from 'styled-components';
import { useColorScheme } from 'react-native';
import { useTheme } from "styled-components";

import * as Location from "expo-location";

export default function Home({navigation}) {

    const deviceTheme = useColorScheme();
    const mapTheme = mapStyle[deviceTheme] || mapStyle.light; 

    const Navigate = (screen) => navigation.navigate(screen);

    const theme = useTheme();
    const themeBar = theme.tabBar;

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
                latitudeDelta: 0.003, //0.003
                longitudeDelta: 0.003, //0.003
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
              <Box mt="30px" mr="10px">
                <SearchBar/>
              </Box>
              <Box style={styles.searchBar}>
                <Box mr="10px" flexDirection="row" justifyContent="flex-end">
                    <TouchableOpacity style={styles.button}>
                        <MaterialCommunityIcons name="crosshairs-gps" size={30} color={colors.cor6}/>
                    </TouchableOpacity>
                </Box>
                <ScrollView horizontal={true}>                
                  <Box flexDirection="row">
                      <ButtonOutline>
                          <Box pr="5px">
                            <Ionicons name="location" size={20} color={colors.cor1} />
                          </Box>
                          <TextButton color={colors.cor1}>Casa</TextButton>
                      </ButtonOutline>
                      <ButtonOutline>
                          <Box pr="5px">
                            <Ionicons name="location" size={20} color={colors.cor1} />
                          </Box>
                          <TextButton color={colors.cor1}>Trabalho</TextButton>
                      </ButtonOutline>
                      <ButtonOutline>
                          <Box pr="5px">
                            <Ionicons name="location" size={20} color={colors.cor1} />
                          </Box>
                          <TextButton color={colors.cor1}>Apartamento</TextButton>
                      </ButtonOutline>
                      <ButtonOutline>
                          <Box pr="5px">
                            <Ionicons name="location" size={20} color={colors.cor1} />
                          </Box>
                          <TextButton color={colors.cor1}>Casa da Vó</TextButton>
                      </ButtonOutline>
                  </Box>
                </ScrollView>
                <Box style={styles.inputBox(themeBar)}>
                  <Box flexDirection="row" alignItems="center">
                    <Input pl="40px" placeholder="Para onde vamos?" onFocus={() => Navigate("Planeje sua próxima viagem")}/>
                    <Box pl="5px" position="absolute">
                      <Ionicons name="location" size={30} color="gray"/>
                    </Box>
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
    height: "100%"
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
  searchBar: {
    width: "100%",
    position: "absolute",
    bottom: 60,
  },
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
  }
});