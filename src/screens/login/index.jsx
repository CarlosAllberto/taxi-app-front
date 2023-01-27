import { useState } from "react";
import { Box, IMG, Container, TitleGG, ButtonFull, TextButton, Input, Texto, TextLink, ButtonSocial } from "@components/globalStyles";
import { SafeAreaView, StatusBar } from "react-native";
import colors from "@helpers";

export default function Login({navigation}) {

    const Navigate = (screen) => navigation.navigate(screen);

    const [formDados, setFormDados] = useState({
        email: "",
        password: ""
    });

    const { email, password } = formDados;

    return(
        <SafeAreaView flex={1}>
            <StatusBar />
            <Container>
                <Box mt="100px" mb="50px" flexDirection="row" justifyContent="center">
                    <TitleGG color={colors.black}>Login</TitleGG>
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
                        <Texto color={colors.black}>Não possui uma conta ainda? </Texto>
                        <TextLink onPress={() => Navigate("Cadastro")}>Criar conta</TextLink>                        
                    </Box>
                    <Box mt="25px">
                        <ButtonFull onPress={() => Navigate("Home")}>
                            <TextButton color={colors.black}>Login</TextButton>
                        </ButtonFull>
                    </Box>
                </Box>
            </Container>
        </SafeAreaView>
    );
}