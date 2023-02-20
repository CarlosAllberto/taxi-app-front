import { useState } from "react";
import { Box, Container, Texto, ButtonFull, TextButton } from "@components/globalStyles";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';
import ToggleSwitch from "toggle-switch-react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "@helpers";

export default function Seguranca({navigation}) {

    const Navigate = (screen) => navigation.navigate(screen);

    const [formDados, setFormDados] = useState({
        lembrar: false,
        faceID: false,
        biometricID: false,
    });

    const Toggle = ({onToggle, isOn}) => {
        return(
        <ToggleSwitch
            isOn={isOn}
            onColor={colors.cor1}
            offColor={"#D9D9D9"}
            label=""
            labelStyle={{ color: "#ffffff", fontWeight: "900" }}
            style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10, marginBottom: 10}}
            onToggle={onToggle}
        />
        )
    }

    return(
        <SafeAreaView flex={1} backgroundColor="#f9f9f9">
            <StatusBar style="auto" />
            <Container>
                <Box mt="30px">
                    <Box flexDirection="row" justifyContent="space-between" pt="5px" pb="5px">
                        <Box>
                            <Texto>Lembre de mim</Texto>
                        </Box>
                        <Box>
                            <Toggle
                            isOn={formDados.lembrar}
                            onToggle={() => setFormDados({...formDados, lembrar: !formDados.lembrar})}
                            />
                        </Box>
                    </Box>

                    <Box flexDirection="row" justifyContent="space-between" pt="5px" pb="5px">
                        <Box>
                            <Texto>Face ID</Texto>
                        </Box>
                        <Box>
                            <Toggle
                            isOn={formDados.faceID}
                            onToggle={() => setFormDados({...formDados, faceID: !formDados.faceID})}
                            />
                        </Box>
                    </Box>

                    <Box flexDirection="row" justifyContent="space-between" pt="5px" pb="5px">
                        <Box>
                            <Texto>Biometric ID</Texto>
                        </Box>
                        <Box>
                            <Toggle
                            isOn={formDados.biometricID}
                            onToggle={() => setFormDados({...formDados, biometricID: !formDados.biometricID})}
                            />
                        </Box>
                    </Box>

                    <Box pt="5px" pb="5px">
                        <TouchableOpacity>
                            <Box flexDirection="row" justifyContent="space-between" alignItems="center">
                                <Box>
                                    <Texto>Google Authenticator</Texto>
                                </Box>
                                <Box>
                                    <Ionicons name="chevron-forward-outline" size={30} color={colors.cor1} />
                                </Box>
                            </Box>
                        </TouchableOpacity>
                    </Box>

                    <Box mt="25px">
                        <ButtonFull backgroundColor={colors.cor2}>
                            <TextButton>Mudar PIN</TextButton>
                        </ButtonFull>
                        <ButtonFull backgroundColor={colors.cor2}>
                            <TextButton>Mudar Senha</TextButton>
                        </ButtonFull>
                    </Box>

                </Box>
            </Container>
        </SafeAreaView>
    );
}
