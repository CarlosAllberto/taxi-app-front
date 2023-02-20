import { useState } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Box, Container, TitleGG, SwitchContainer, SwitchButton, TextButton, Line, Paper, IMG, Title, Texto, NotificationSms } from "@components/globalStyles";
import colors from "@helpers";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";

export default function Comunicacao() {

    const [contPage, setContPage] = useState(1);

    const page1 = (
        <>
            <Box pt="5px" pb="5px">
                <Paper>
                    <Box flexDirection="row" alignItems="center">
                        <Box mr="20px">
                            <IMG w="70px" h="70px" radius="50px" source={require("@assets/IMG_PERFIL.jpg")} />
                        </Box>
                        <Box>
                            <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "73%"}}>
                                <Title>Carlos Alberto</Title>
                                <NotificationSms>
                                    <Texto pt="0px" pb="0px" fontWeight={500}>2</Texto>
                                </NotificationSms>
                            </Box>
                            <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "73%"}}>
                                <Texto>Olá, tudo bem?</Texto>
                                <Texto>14:30</Texto>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Box>
            <Box pt="5px" pb="5px">
                <Paper>
                    <Box flexDirection="row" alignItems="center">
                        <Box mr="20px">
                            <IMG w="70px" h="70px" radius="50px" source={require("@assets/IMG_PERFIL.jpg")} />
                        </Box>
                        <Box>
                            <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "73%"}}>
                                <Title>Carlos Alberto</Title>
                                <NotificationSms>
                                    <Texto pt="0px" pb="0px" fontWeight={500}>3</Texto>
                                </NotificationSms>
                            </Box>
                            <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "73%"}}>
                                <Texto>Olá, tudo bem?</Texto>
                                <Texto>14:30</Texto>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Box>
            <Box pt="5px" pb="5px">
                <Paper>
                    <Box flexDirection="row" alignItems="center">
                        <Box mr="20px">
                            <IMG w="70px" h="70px" radius="50px" source={require("@assets/IMG_PERFIL.jpg")} />
                        </Box>
                        <Box>
                            <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "73%"}}>
                                <Title>Carlos Alberto</Title>
                                <NotificationSms>
                                    <Texto pt="0px" pb="0px" fontWeight={500}>4</Texto>
                                </NotificationSms>
                            </Box>
                            <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "73%"}}>
                                <Texto>Olá, tudo bem?</Texto>
                                <Texto>14:30</Texto>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Box>
            <Box pt="5px" pb="5px">
                <Paper>
                    <Box flexDirection="row" alignItems="center">
                        <Box mr="20px">
                            <IMG w="70px" h="70px" radius="50px" source={require("@assets/IMG_PERFIL.jpg")} />
                        </Box>
                        <Box>
                            <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "73%"}}>
                                <Title>Carlos Alberto</Title>
                                <NotificationSms>
                                    <Texto pt="0px" pb="0px" fontWeight={500}>1</Texto>
                                </NotificationSms>
                            </Box>
                            <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "73%"}}>
                                <Texto>Olá, tudo bem?</Texto>
                                <Texto>14:30</Texto>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </>
    );

    const page2 = (
        <>
            <Box pt="5px" pb="5px">
                <Paper>
                    <Box flexDirection="row" alignItems="center">
                        <Box mr="20px">
                            <IMG w="70px" h="70px" radius="50px" source={require("@assets/IMG_PERFIL.jpg")} />
                        </Box>
                        <Box flexDirection="row" justifyContent="space-between" style={{width: "73%"}}>
                            <Box>
                                <Title>Carlos Alberto</Title>
                                <Box flexDirection="row" alignItems="center">
                                    <Box pr="5px">
                                        <MaterialCommunityIcons name="arrow-down-bold-box" size={20} color={colors.cor4} />
                                    </Box>
                                    <Texto>Recebida | Dec 19, 2024</Texto>
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
            <Box pt="5px" pb="5px">
                <Paper>
                    <Box flexDirection="row" alignItems="center">
                        <Box mr="20px">
                            <IMG w="70px" h="70px" radius="50px" source={require("@assets/IMG_PERFIL.jpg")} />
                        </Box>
                        <Box flexDirection="row" justifyContent="space-between" style={{width: "73%"}}>
                            <Box>
                                <Title>Carlos Alberto</Title>
                                <Box flexDirection="row" alignItems="center">
                                    <Box pr="5px">
                                        <MaterialCommunityIcons name="arrow-up-bold-box" size={20} color="#8ef08e" />
                                    </Box>
                                    <Texto>Efetuada | Dec 19, 2024</Texto>
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
            <Box pt="5px" pb="5px">
                <Paper>
                    <Box flexDirection="row" alignItems="center">
                        <Box mr="20px">
                            <IMG w="70px" h="70px" radius="50px" source={require("@assets/IMG_PERFIL.jpg")} />
                        </Box>
                        <Box flexDirection="row" justifyContent="space-between" style={{width: "73%"}}>
                            <Box>
                                <Title>Carlos Alberto</Title>
                                <Box flexDirection="row" alignItems="center">
                                    <Box pr="5px">
                                        <MaterialCommunityIcons name="close-box" size={20} color="red" />
                                    </Box>
                                    <Texto>Perdida | Dec 19, 2024</Texto>
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
        </>
    );

    return(
        <SafeAreaView flex={1} backgroundColor="#f9f9f9">
            <StatusBar style="auto" />
            <Container>
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