import { useState, useRef } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Box, ButtonFull, Container, TextButton, Texto, Title, IMG, InputCode, Input } from "@components/globalStyles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "@helpers";
import { Card } from "./style";
import Ionicons from "@expo/vector-icons/Ionicons";


export default function EsqueciSenha({navigation}) {

    const Navigate = (screen) => navigation.navigate(screen);

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
        inputCode1: false,
        inputCode2: false,
        inputCode3: false,
        inputCode4: false,

        input1: false,
        input2: false
    });

    const { inputCode1, inputCode2, inputCode3, inputCode4, input1, input2 } = inputFocus;

    const [formDados, setFormDados] = useState({
        password: "",
        passwordConfirm: ""
    });

    const { password, passwordConfirm } = formDados;

    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const page1 = (
        <>
            <Container flex={1}>
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
            </Container>
            <Box position="absolute" bottom={30} w="100%">
                <Container>
                    <ButtonFull onPress={() => setContPage(2)}>
                        <TextButton>Continuar</TextButton>
                    </ButtonFull>
                </Container>
            </Box>
        </>
    );

    const page2 = (
        <>
            <Container flex={1}>
                <Box mt="100px" mb="30px" flexDirection="row" justifyContent="center">
                    <Texto>
                        o código foi enviado para +55 11 95997-3501
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
            </Container>
            <Box position="absolute" bottom={30} w="100%">
                <Container>
                    <ButtonFull onPress={() => setContPage(3)}>
                        <TextButton>Verificar</TextButton>
                    </ButtonFull>
                </Container>
            </Box>
        </>
    );

    const page3 = (
        <>
            <Container flex={1}>
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
                        <Box flexDirection="row" alignItems="center" justifyContent="flex-end">
                            <Input 
                            onFocus={() => setInputFocus({...inputFocus, input1: true})}
                            onBlur={() => setInputFocus({...inputFocus, input1: false})}
                            focused={input1}
                            placeholder="Senha"
                            onChangeText={e => setFormDados({...formDados, password: e})}
                            value={password}
                            secureTextEntry={!showPassword1}
                            />
                            <Box pr="10px" position="absolute">
                                <TouchableOpacity onPress={() => setShowPassword1(!showPassword1)}>
                                    <Ionicons name={showPassword1 ? "eye-off" : "eye"} size={30} color="gray"/>
                                </TouchableOpacity>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Box flexDirection="row" alignItems="center" justifyContent="flex-end">
                            <Input 
                            onFocus={() => setInputFocus({...inputFocus, input2: true})}
                            onBlur={() => setInputFocus({...inputFocus, input2: false})}
                            focused={input2}
                            placeholder="Confirmar Senha"
                            onChangeText={e => setFormDados({...formDados, passwordConfirm: e})}
                            value={passwordConfirm}
                            secureTextEntry={!showPassword2}
                            />
                            <Box pr="10px" position="absolute">
                                <TouchableOpacity onPress={() => setShowPassword2(!showPassword2)}>
                                    <Ionicons name={showPassword2 ? "eye-off" : "eye"} size={30} color="gray"/>
                                </TouchableOpacity>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
            <Box position="absolute" bottom={30} w="100%">
                <Container>
                    <ButtonFull onPress={() => Navigate("Home")}>
                        <TextButton>Continuar</TextButton>
                    </ButtonFull>
                </Container>
            </Box>
        </>
    );

    return(
        <SafeAreaView flex={1}>
            <StatusBar style="auto"/>
            <>
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
            </>
        </SafeAreaView>
    );
}