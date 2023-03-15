import { useState } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Box, Container, TitleGG, SwitchContainer, SwitchButton, TextButton, Line, Paper, IMG, Title, Texto, NotificationSms } from "@components/globalStyles";
import colors from "@helpers";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";

export default function Comunicacao() {

    const [contPage, setContPage] = useState(1);

    const mensagens = [
        {
            nome: "Carlos Alberto",
            msg: "Olá, tudo bem?",
            notificacao: 3,
            hora: "14:30"
        },
        {
            nome: "Carlos Alberto",
            msg: "Olá, tudo bem?",
            notificacao: 3,
            hora: "14:30"
        },
        {
            nome: "Carlos Alberto",
            msg: "Olá, tudo bem?",
            notificacao: 3,
            hora: "14:30"
        },
        {
            nome: "Carlos Alberto",
            msg: "Olá, tudo bem?",
            notificacao: 3,
            hora: "14:30"
        },
    ];

    const ligacoes = [
        {
            nome: "Carlos Alberto",
            tipo: "Recebida",
            data: "Dec 19, 2023"
        },
        {
            nome: "Carlos Alberto",
            tipo: "Efetuada",
            data: "Dec 19, 2023"
        },
        {
            nome: "Carlos Alberto",
            tipo: "Perdida",
            data: "Dec 19, 2023"
        },
    ]

    const page1 = (
        <>
            {mensagens.map((text, index) => {
                return(
                   <Box key={index} pt="5px" pb="5px">
                        <Paper>
                            <Box flexDirection="row" alignItems="center">
                                <Box mr="20px">
                                    <IMG w="70px" h="70px" radius="50px" source={require("@assets/IMG_PERFIL.jpg")} />
                                </Box>
                                <Box>
                                    <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "73%"}}>
                                        <Title>{text.nome}</Title>
                                        <NotificationSms>
                                            <Texto pt="0px" pb="0px" fontWeight={500}>
                                                {text.notificacao}
                                            </Texto>
                                        </NotificationSms>
                                    </Box>
                                    <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "73%"}}>
                                        <Texto>{text.msg}</Texto>
                                        <Texto>{text.hora}</Texto>
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>
                    </Box> 
                );
            })}
        </>
    );

    const page2 = (
        <>
            {ligacoes.map((text, index) => {

                let iconName;
                let iconColor;

                if(text.tipo === "Efetuada") {
                    iconName = "arrow-up-bold-box";
                    iconColor = "#8ef08e";
                } else if(text.tipo === "Recebida") {
                    iconName = "arrow-down-bold-box"; 
                    iconColor = colors.cor4;
                } else {
                    iconName = "close-box";
                    iconColor = "red";
                }

                return(
                    <Box key={index} pt="5px" pb="5px">
                        <Paper>
                            <Box flexDirection="row" alignItems="center">
                                <Box mr="20px">
                                    <IMG w="70px" h="70px" radius="50px" source={require("@assets/IMG_PERFIL.jpg")} />
                                </Box>
                                <Box flexDirection="row" justifyContent="space-between" style={{width: "73%"}}>
                                    <Box>
                                        <Title>{text.nome}</Title>
                                        <Box flexDirection="row" alignItems="center">
                                            <Box pr="5px">
                                                <MaterialCommunityIcons name={iconName} size={20} color={iconColor} />
                                            </Box>
                                            <Texto>{text.tipo} | {text.data}</Texto>
                                        </Box>
                                    </Box>
                                    <Box flexDirection="row" alignItems="center">
                                        <TouchableOpacity>
                                            <Feather name="phone" size={30} color={colors.cor1} />
                                        </TouchableOpacity>
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                );
            })}
        </>
    );

    return(
        <SafeAreaView flex={1}>
            <StatusBar style="auto" />
            <Container flex={1}>
                <Box mt="30px">
                    <TitleGG>Comunicação</TitleGG>
                </Box>
                <Box mb="30px">
                    <SwitchContainer>
                        <SwitchButton width="50%" active={contPage === 1 ? true : false} onPress={() => setContPage(1)}>
                            <TextButton size="16px" color={contPage === 1 ? "#fff" : colors.cor5}>Mensagens</TextButton>
                        </SwitchButton>
                        <SwitchButton width="50%" active={contPage === 2 ? true : false} onPress={() => setContPage(2)}>
                            <TextButton size="16px" color={contPage === 2 ? "#fff" : colors.cor5}>Ligações</TextButton>
                        </SwitchButton>
                    </SwitchContainer>
                </Box>
                <Box mt="20px">
                    <Line />
                </Box>
                <Box>
                    {(() => {
                        switch(contPage) {
                        case 1:
                            return(<>{page1}</>);
                        case 2: 
                            return(<>{page2}</>);
                        }
                    })()}
                </Box>
            </Container>
        </SafeAreaView>
    );
}