import { useState } from "react";
import { Box, IMG, Container, TitleGG, ButtonFull, TextButton, Input, Texto, TextLink, ButtonSocial } from "@components/globalStyles";
import { SafeAreaView, StatusBar } from "react-native";
import colors from "@helpers";

export default function Cadastro({navigation}) {

    const Navigate = (screen) => navigation.navigate(screen);

    const [formDados, setFormDados] = useState({
        nome: "",
        email: "",
        password: ""
    });

    const { nome, email, password } = formDados;

    return(
        <SafeAreaView flex={1}>
            <StatusBar />
            <Container>
                <Box mt="50px" mb="20px" flexDirection="row" justifyContent="center">
                    <TitleGG color={colors.black}>Criar sua conta</TitleGG>
                </Box>
                <Box mt="10px" mb="10px" flexDirection="row" justifyContent="center">
                    <Texto color={colors.black}>Acesso rápido:</Texto>
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
                    <Box pr="10px" pl="10px">
                        <ButtonSocial>
                            <IMG w="40px" h="40px" source={require("../../../assets/apple.png")}/>
                        </ButtonSocial>
                    </Box>
                </Box>
                <Box mt="30px" mb="30px" flexDirection="row" justifyContent="center">
                    <Texto color={colors.black}>ou</Texto>
                </Box>
                <Box>
                    <Box>
                        <Input 
                        placeholder="Nome"
                        onChangeText={e => setFormDados({...formDados, nome: e})}
                        value={nome}
                        />
                    </Box>
                    <Box>
                        <Input 
                        placeholder="Email"
                        onChangeText={e => setFormDados({...formDados, email: e})}
                        value={email}
                        />
                    </Box>
                    <Box>
                        <Input
                        placeholder="Senha"
                        onChangeText={e => setFormDados({...formDados, password: e})}
                        value={password}
                        />
                    </Box>
                    <Box flexDirection="row" justifyContent="center"
                    mt="25px" alignItems="center">
                        <Texto color={colors.black}>Já possui uma conta? </Texto>
                        <TextLink onPress={() => Navigate("Login")}>Login</TextLink>                        
                    </Box>
                    <Box mt="50px">
                        <ButtonFull>
                            <TextButton color={colors.black}>Sign up</TextButton>
                        </ButtonFull>
                    </Box>
                    <Box flexDirection="row" justifyContent="center">
                        <Texto color={colors.black}>Ao criar sua conta, você concorda com nossos <TextLink onPress={() => Navigate("PoliticaPrivacidade")}>termos de uso.</TextLink></Texto>
                    </Box>
                </Box>
            </Container>
        </SafeAreaView>
    );
}