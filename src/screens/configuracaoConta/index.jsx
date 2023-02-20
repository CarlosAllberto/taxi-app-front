import { useState, useRef } from "react";
import { Box, Container, ButtonFull, TextButton, Input, Texto, InputCode } from "@components/globalStyles";
import { ImagePerfil } from "@components/globalComponents";
import { SafeAreaView } from "react-native";
import { StatusBar } from 'expo-status-bar';

export default function ConfiguracaoConta({navigation}) {

    const Navigate = (screen) => navigation.navigate(screen);

    const [contPage, setContPage] = useState(1);

    const [inputFocus, setInputFocus] = useState({
        input1: false,
        input2: false,
        input3: false,
        input4: false,
        input5: false,
        input6: false,

        inputCode1: false,
        inputCode2: false,
        inputCode3: false,
        inputCode4: false,
    });

    const { input1, input2, input3, input4, input5, input6, inputCode1, inputCode2, inputCode3, inputCode4 } = inputFocus;

    const [code, setCode] = useState({
        code1: "",
        code2: "",
        code3: "",
        code4: ""
    });

    const {code1, code2, code3, code4} = code;

    const ref_input1 = useRef();
    const ref_input2 = useRef();
    const ref_input3 = useRef();
    const ref_input4 = useRef();

    const [formDados, setFormDados] = useState({
        nome: "",
        apelido: "",
        data: "",
        email: "",
        numero: "",
        sexo: ""
    });

    const { nome, apelido, data, email, numero, sexo } = formDados;

    const page1 = (
        <>
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
                    <ButtonFull onPress={() => setContPage(2)}>
                        <TextButton>Continuar</TextButton>
                    </ButtonFull>
                </Box>
            </Box>
        </>
    );

    const page2 = (
        <>
            <Box mt="100px" mb="30px" flexDirection="row" justifyContent="center">
                <Texto>
                    Adicione um número PIN para tornar sua conta mais segura
                </Texto>
            </Box>
            <Box>

                <Box justifyContent="center" flexDirection="row">
                    <InputCode
                    onFocus={() => setInputFocus({...inputFocus, inputCode1: true})}
                    onBlur={() => setInputFocus({...inputFocus, inputCode1: false})}
                    focused={inputCode1}
                    ref={ref_input1}
                    autoFocus={true}
                    type="text"
                    placeholder="-"
                    maxLength={1}
                    secureTextEntry={true}
                    value={code1}
                    onChangeText={e => {
                        setCode({...code, code1: e});
                        if (code1.length === 0) {
                        ref_input2.current.focus()
                        } else {
                        //pass
                        }
                    }}
                    />
                    <InputCode
                    onFocus={() => setInputFocus({...inputFocus, inputCode2: true})}
                    onBlur={() => setInputFocus({...inputFocus, inputCode2: false})}
                    focused={inputCode2}
                    ref={ref_input2}
                    type="text"
                    placeholder="-"
                    maxLength={1}
                    secureTextEntry={true}
                    value={code2}
                    onChangeText={e => {
                        setCode({...code, code2: e});
                        if (code2.length === 0) {
                        ref_input3.current.focus()
                        } else {
                        ref_input1.current.focus()
                        }
                    }}
                    />
                    <InputCode
                    onFocus={() => setInputFocus({...inputFocus, inputCode3: true})}
                    onBlur={() => setInputFocus({...inputFocus, inputCode3: false})}
                    focused={inputCode3}
                    ref={ref_input3}
                    type="text"
                    placeholder="-"
                    maxLength={1}
                    secureTextEntry={true}
                    value={code3}
                    onChangeText={e => {
                        setCode({...code, code3: e});
                        if (code3.length === 0) {
                        ref_input4.current.focus()
                        } else {
                        ref_input2.current.focus()
                        }
                    }}
                    />
                    <InputCode
                    onFocus={() => setInputFocus({...inputFocus, inputCode4: true})}
                    onBlur={() => setInputFocus({...inputFocus, inputCode4: false})}
                    focused={inputCode4}
                    ref={ref_input4}
                    type="text"
                    placeholder="-"
                    maxLength={1}
                    secureTextEntry={true}
                    value={code4}
                    onChangeText={e => {
                        setCode({...code, code4: e});
                        if (code4.length === 0) {
                        //pass
                        } else {
                        ref_input3.current.focus()
                        }
                    }}
                    />
                </Box>
                
            </Box>
            <Box mt="30px">
                <ButtonFull onPress={() => Navigate("Home")}>
                    <TextButton>Continuar</TextButton>
                </ButtonFull>
            </Box>
        </>
    );

    return(
        <SafeAreaView flex={1} backgroundColor="#f9f9f9">
            <StatusBar style="auto" />
            <Container>
                {(() => {
                    switch(contPage) {
                    case 1:
                        return(<>{page1}</>);
                    case 2: 
                        return(<>{page2}</>);
                    }
                })()}
            </Container>
        </SafeAreaView>
    );
}