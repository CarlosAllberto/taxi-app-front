import { useState } from "react";
import { Box, IMG, Container, TitleGG, ButtonFull, TextButton, Input, Texto, TextLink, ButtonSocial } from "@components/globalStyles";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Cadastro({navigation}) {

    const Navigate = (screen) => navigation.navigate(screen);

    const [inputFocus, setInputFocus] = useState({
        input1: false,
        input2: false
    });

    const { input1, input2 } = inputFocus;
    
    const [formDados, setFormDados] = useState({
        email: "",
        password: ""
    });

    const { nome, email, password } = formDados;

    const [showPassword, setShowPassword] = useState(false);

    return(
        <SafeAreaView flex={1}>
            <StatusBar style="auto" />
            <Container flex={1}>
                <Box mt="50px" mb="20px" flexDirection="row" justifyContent="center">
                    <TitleGG>Criar sua conta</TitleGG>
                </Box>
                <Box mt="10px" mb="10px" flexDirection="row" justifyContent="center">
                    <Texto>Acesso rápido:</Texto>
                </Box>
                <Box flexDirection="row" justifyContent="center">
                    <Box pr="10px" pl="10px">
                        <ButtonSocial>
                            <IMG w="40px" h="40px" source={require("../../../assets/google.png")}/>
                        </ButtonSocial>
                    </Box>
                    <Box pr="10px" pl="10px">
                        <ButtonSocial>
                            <IMG w="40px" h="40px" source={require("../../../assets/facebook.png")}/>
                        </ButtonSocial>
                    </Box>
                </Box>
                <Box mt="30px" mb="30px" flexDirection="row" justifyContent="center">
                    <Texto>ou</Texto>
                </Box>
                <Box>
                    <Box>
                        <Input 
                        onFocus={() => setInputFocus({...inputFocus, input1: true})}
                        onBlur={() => setInputFocus({...inputFocus, input1: false})}
                        focused={input1}
                        placeholder="Email"
                        onChangeText={e => setFormDados({...formDados, email: e})}
                        value={email}
                        />
                    </Box>
                    <Box>
                        <Box flexDirection="row" alignItems="center" justifyContent="flex-end">
                            <Input
                            onFocus={() => setInputFocus({...inputFocus, input2: true})}
                            onBlur={() => setInputFocus({...inputFocus, input2: false})}
                            focused={input2}
                            placeholder="Senha"
                            onChangeText={e => setFormDados({...formDados, password: e})}
                            value={password}
                            secureTextEntry={!showPassword}
                            />
                            <Box pr="10px" position="absolute">
                                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                    <Ionicons name={showPassword ? "eye-off" : "eye"} size={30} color="gray"/>
                                </TouchableOpacity>
                            </Box>
                        </Box>
                    </Box>
                    <Box flexDirection="row" justifyContent="center"
                    mt="25px" alignItems="center">
                        <Box>
                            <Texto pt="0px" pb="0px">Já possui uma conta? </Texto>
                            <TextLink style={{textAlign: "center"}} onPress={() => Navigate("Login")}>Login</TextLink>
                        </Box>                        
                    </Box>
                </Box>
            </Container>
            <Box position="absolute" bottom={30} w="100%">
                <Container>
                    <Box>
                        <ButtonFull onPress={() => Navigate("Configuração da conta")}>
                            <TextButton>Cadastrar</TextButton>
                        </ButtonFull>
                    </Box>
                    <Box flexDirection="row" justifyContent="center">
                        <Texto>Ao criar sua conta, você concorda com nossos <TextLink onPress={() => Navigate("Politica de Privacidade")}>termos de uso.</TextLink></Texto>
                    </Box>
                </Container>
            </Box>
        </SafeAreaView>
    );
}