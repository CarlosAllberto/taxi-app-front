import { useState } from "react";
import { Box, IMG, Container, TitleGG, ButtonFull, TextButton, Input, Texto, TextLink, ButtonSocial } from "@components/globalStyles";
import { SafeAreaView, KeyboardAvoidingView, Platform } from "react-native";
import { StatusBar } from 'expo-status-bar';

export default function Login({navigation}) {

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

    const { email, password } = formDados;

    return(
        <SafeAreaView flex={1}>
            <StatusBar style="auto" />
            <Container flex={1}>
                <Box mt="100px" mb="50px" flexDirection="row" justifyContent="center">
                    <TitleGG>Login</TitleGG>
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
                <Box flex={1}>
                    <KeyboardAvoidingView
                    flex={1}
                    behavior="padding"
                    >
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
                        <Input
                        onFocus={() => setInputFocus({...inputFocus, input2: true})}
                        onBlur={() => setInputFocus({...inputFocus, input2: false})}
                        focused={input2}
                        placeholder="Senha"
                        onChangeText={e => setFormDados({...formDados, password: e})}
                        value={password}
                        />
                    </Box>
                    <Box flexDirection="row" justifyContent="flex-end">
                        <TextLink onPress={() => Navigate("Esqueci a Senha")}>Esqueci a Senha</TextLink>
                    </Box>
                    <Box flexDirection="row" justifyContent="center"
                    mt="25px" alignItems="center">
                        <Box>
                            <Texto pt="0px" pb="0px">Não possui uma conta ainda? </Texto>
                            <TextLink style={{textAlign: "center"}} onPress={() => Navigate("Cadastro")}>Criar conta</TextLink>    
                        </Box>                    
                    </Box>
                    <Box mt="25px">
                        <ButtonFull onPress={() => Navigate("Home")}>
                            <TextButton>Login</TextButton>
                        </ButtonFull>
                    </Box>
                    </KeyboardAvoidingView>
                </Box>
            </Container>
        </SafeAreaView>
    );
}