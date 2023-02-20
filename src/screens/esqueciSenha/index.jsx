import { useState, useRef } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Box, ButtonFull, Container, TextButton, Texto, Title, IMG, InputCode, Input } from "@components/globalStyles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "@helpers";
import { Card } from "./style";


export default function EsqueciSenha() {

    const [contPage, setContPage] = useState(1);

    const [cardFocus, setCardFocus] = useState(1);

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

    const [inputFocus, setInputFocus] = useState({
        input1: false,
        input2: false,
        input3: false,
        input4: false,
    });

    const { input1, input2, input3, input4 } = inputFocus;

    const [formDados, setFormDados] = useState({
        password: "",
        passwordConfirm: ""
    });

    const { password, passwordConfirm } = formDados;

    const page1 = (
        <>
            <Box flexDirection="row" justifyContent="center" mt="30px" mb="50px">
                <IMG w="50%" h="180px" source={require("@assets/padlock.png")}/>
            </Box>
            <Box>
                <Texto>
                    selecione quais detalhes de contato devemos usar para redefinir sua senha
                </Texto>
            </Box>
            <Box>
                <Box mt="5px" mb="5px">
                    <TouchableOpacity onPress={() => setCardFocus(1)}>
                        <Card focused={cardFocus === 1 ? true : false}>
                            <Box flexDirection="row" alignItems="center">
                                <Box mr="20px">
                                    <MaterialCommunityIcons name="message-outline" size={40} color={colors.cor1} />
                                </Box>
                                <Box>
                                    <Box>
                                        <Texto>via SMS</Texto>
                                    </Box>
                                    <Box>
                                        <Title>
                                            +55 9****-9999
                                        </Title>
                                    </Box>
                                </Box>
                            </Box>
                        </Card>
                    </TouchableOpacity>
                </Box>

                <Box mt="5px" mb="5px">
                    <TouchableOpacity onPress={() => setCardFocus(2)}>
                        <Card focused={cardFocus === 2 ? true : false}>
                            <Box flexDirection="row" alignItems="center">
                                <Box mr="20px">
                                    <MaterialCommunityIcons name="email-outline" size={40} color={colors.cor1} />
                                </Box>
                                <Box>
                                    <Box>
                                        <Texto>via Email</Texto>
                                    </Box>
                                    <Box>
                                        <Title>
                                            das***acarlosalberto344@g...
                                        </Title>
                                    </Box>
                                </Box>
                            </Box>
                        </Card>
                    </TouchableOpacity>
                </Box>
            </Box>
            <Box mt="30px">
                <ButtonFull onPress={() => setContPage(2)}>
                    <TextButton>Continuar</TextButton>
                </ButtonFull>
            </Box>
        </>
    );

    const page2 = (
        <>
            <Box mt="100px" mb="30px" flexDirection="row" justifyContent="center">
                <Texto>
                    o código foi enviado para +55 11 95997-3501
                </Texto>
            </Box>
            <Box>

                <Box justifyContent="center" flexDirection="row">
                    <InputCode
                    onFocus={() => setInputFocus({...inputFocus, input1: true})}
                    onBlur={() => setInputFocus({...inputFocus, input1: false})}
                    focused={input1}
                    ref={ref_input1}
                    autoFocus={true}
                    type="text"
                    placeholder="-"
                    maxLength={1}
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
                    onFocus={() => setInputFocus({...inputFocus, input2: true})}
                    onBlur={() => setInputFocus({...inputFocus, input2: false})}
                    focused={input2}
                    ref={ref_input2}
                    type="text"
                    placeholder="-"
                    maxLength={1}
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
                    onFocus={() => setInputFocus({...inputFocus, input3: true})}
                    onBlur={() => setInputFocus({...inputFocus, input3: false})}
                    focused={input3}
                    ref={ref_input3}
                    type="text"
                    placeholder="-"
                    maxLength={1}
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
                    onFocus={() => setInputFocus({...inputFocus, input4: true})}
                    onBlur={() => setInputFocus({...inputFocus, input4: false})}
                    focused={input4}
                    ref={ref_input4}
                    type="text"
                    placeholder="-"
                    maxLength={1}
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
            <Box mt="30px" flexDirection="row" justifyContent="center">
                <Texto>Reenviar codigo em 20 s</Texto>
            </Box>
            <Box mt="30px">
                <ButtonFull onPress={() => setContPage(3)}>
                    <TextButton>Verificar</TextButton>
                </ButtonFull>
            </Box>
        </>
    );

    const page3 = (
        <>
            <Box flexDirection="row" justifyContent="center" mt="30px" mb="50px">
                <IMG w="50%" h="180px" source={require("@assets/padlock.png")}/>
            </Box>
            <Box>
                <Texto>
                    Crie sua nova senha
                </Texto>
            </Box>
            <Box>
                <Box>
                    <Input 
                    onFocus={() => setInputFocus({...inputFocus, input1: true})}
                    onBlur={() => setInputFocus({...inputFocus, input1: false})}
                    focused={input1}
                    placeholder="Senha"
                    onChangeText={e => setFormDados({...formDados, password: e})}
                    value={password}
                    />
                </Box>
                <Box>
                    <Input 
                    onFocus={() => setInputFocus({...inputFocus, input2: true})}
                    onBlur={() => setInputFocus({...inputFocus, input2: false})}
                    focused={input2}
                    placeholder="Confirmar Senha"
                    onChangeText={e => setFormDados({...formDados, passwordConfirm: e})}
                    value={passwordConfirm}
                    />
                </Box>
            </Box>
            <Box mt="30px">
                <ButtonFull onPress={() => setContPage(3)}>
                    <TextButton>Continuar</TextButton>
                </ButtonFull>
            </Box>
        </>
    );

    return(
        <SafeAreaView flex={1} backgroundColor="#f9f9f9">
            <StatusBar style="auto"/>
            <Container>
                <Box>
                    {(() => {
                        switch(contPage) {
                        case 1:
                            return(<>{page1}</>);
                        case 2: 
                            return(<>{page2}</>);
                        case 3:
                            return(<>{page3}</>);
                        }
                    })()}
                </Box>
            </Container>
        </SafeAreaView>
    );
}