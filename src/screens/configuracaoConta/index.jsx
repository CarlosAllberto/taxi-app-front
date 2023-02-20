import { useState } from "react";
import { Box, Container, ButtonFull, TextButton, Input } from "@components/globalStyles";
import { ImagePerfil } from "@components/globalComponents";
import { SafeAreaView } from "react-native";
import { StatusBar } from 'expo-status-bar';

export default function ConfiguracaoConta({navigation}) {

    const Navigate = (screen) => navigation.navigate(screen);

    const [inputFocus, setInputFocus] = useState({
        input1: false,
        input2: false,
        input3: false,
        input4: false,
        input5: false,
        input6: false
    });

    const { input1, input2, input3, input4, input5, input6 } = inputFocus;

    const [formDados, setFormDados] = useState({
        nome: "",
        apelido: "",
        data: "",
        email: "",
        numero: "",
        sexo: ""
    });

    const { nome, apelido, data, email, numero, sexo } = formDados;

    return(
        <SafeAreaView flex={1} backgroundColor="#f9f9f9">
            <StatusBar style="auto" />
            <Container>
                <Box mt="30px" mb="50px" flexDirection="row" justifyContent="center">
                    <ImagePerfil source={require("@assets/IMG_PERFIL.jpg")}/>
                </Box>
                <Box>
                    <Box>
                        <Input
                        onFocus={() => setInputFocus({...inputFocus, input1: true})}
                        onBlur={() => setInputFocus({...inputFocus, input1: false})}
                        focused={input1}
                        placeholder="Nome completo"
                        onChangeText={e => setFormDados({...formDados, nome: e})}
                        value={nome}
                        />
                    </Box>
                    <Box>
                        <Input
                        onFocus={() => setInputFocus({...inputFocus, input2: true})}
                        onBlur={() => setInputFocus({...inputFocus, input2: false})}
                        focused={input2}
                        placeholder="Apelido"
                        onChangeText={e => setFormDados({...formDados, apelido: e})}
                        value={apelido}
                        />
                    </Box>
                    <Box>
                        <Input
                        onFocus={() => setInputFocus({...inputFocus, input3: true})}
                        onBlur={() => setInputFocus({...inputFocus, input3: false})}
                        focused={input3}
                        placeholder="Data de nascimento"
                        onChangeText={e => setFormDados({...formDados, data: e})}
                        value={data}
                        />
                    </Box>
                    <Box>
                        <Input
                        onFocus={() => setInputFocus({...inputFocus, input4: true})}
                        onBlur={() => setInputFocus({...inputFocus, input4: false})}
                        focused={input4}
                        placeholder="Email"
                        onChangeText={e => setFormDados({...formDados, email: e})}
                        value={email}
                        />
                    </Box>
                    <Box>
                        <Input
                        onFocus={() => setInputFocus({...inputFocus, input5: true})}
                        onBlur={() => setInputFocus({...inputFocus, input5: false})}
                        focused={input5}
                        placeholder="Numero"
                        onChangeText={e => setFormDados({...formDados, numero: e})}
                        value={numero}
                        />
                    </Box>
                    <Box>
                        <Input
                        onFocus={() => setInputFocus({...inputFocus, input6: true})}
                        onBlur={() => setInputFocus({...inputFocus, input6: false})}
                        focused={input6}
                        placeholder="Sexo"
                        onChangeText={e => setFormDados({...formDados, sexo: e})}
                        value={sexo}
                        />
                    </Box>
                    <Box mt="25px">
                        <ButtonFull onPress={() => Navigate("Home")}>
                            <TextButton>Continuar</TextButton>
                        </ButtonFull>
                    </Box>
                </Box>
            </Container>
        </SafeAreaView>
    );
}