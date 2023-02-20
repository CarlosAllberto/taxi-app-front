import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView } from "react-native";
import { Box, IMG, Title, Button, Texto, TextButton, ButtonOutline, Container } from "@components/globalStyles";
import colors from "@helpers";


export default function ConvidarAmigos() {
    return(
        <SafeAreaView flex={1} backgroundColor="#f9f9f9">
            <StatusBar style="auto"/>
            <Container>
                <Box mt="30px">
                    <ScrollView>
                    <Box pt="15px" pb="15px">
                        <Box flexDirection="row" alignItems="center">
                            <Box mr="20px">
                                <IMG w="70px" h="70px" radius="50px" source={require("@assets/IMG_PERFIL.jpg")} />
                            </Box>
                            <Box flexDirection="row" justifyContent="space-between" style={{width: "73%"}}>
                                <Box>
                                    <Title>Carlos Alberto</Title>
                                    <Box>
                                        <Texto>+55 99999-9999</Texto>
                                    </Box>
                                </Box>
                                <Box>
                                    <Button radius="50px">
                                        <TextButton color={colors.cor5}>Convidar</TextButton>
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box pt="15px" pb="15px">
                        <Box flexDirection="row" alignItems="center">
                            <Box mr="20px">
                                <IMG w="70px" h="70px" radius="50px" source={require("@assets/IMG_PERFIL.jpg")} />
                            </Box>
                            <Box flexDirection="row" justifyContent="space-between" style={{width: "73%"}}>
                                <Box>
                                    <Title>Carlos Alberto</Title>
                                    <Box>
                                        <Texto>+55 99999-9999</Texto>
                                    </Box>
                                </Box>
                                <Box>
                                    <ButtonOutline radius="50px">
                                        <TextButton color={colors.cor1}>Convidado</TextButton>
                                    </ButtonOutline>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box pt="15px" pb="15px">
                        <Box flexDirection="row" alignItems="center">
                            <Box mr="20px">
                                <IMG w="70px" h="70px" radius="50px" source={require("@assets/IMG_PERFIL.jpg")} />
                            </Box>
                            <Box flexDirection="row" justifyContent="space-between" style={{width: "73%"}}>
                                <Box>
                                    <Title>Carlos Alberto</Title>
                                    <Box>
                                        <Texto>+55 99999-9999</Texto>
                                    </Box>
                                </Box>
                                <Box>
                                    <ButtonOutline radius="50px">
                                        <TextButton color={colors.cor1}>Convidado</TextButton>
                                    </ButtonOutline>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box pt="15px" pb="15px">
                        <Box flexDirection="row" alignItems="center">
                            <Box mr="20px">
                                <IMG w="70px" h="70px" radius="50px" source={require("@assets/IMG_PERFIL.jpg")} />
                            </Box>
                            <Box flexDirection="row" justifyContent="space-between" style={{width: "73%"}}>
                                <Box>
                                    <Title>Carlos Alberto</Title>
                                    <Box>
                                        <Texto>+55 99999-9999</Texto>
                                    </Box>
                                </Box>
                                <Box>
                                    <ButtonOutline radius="50px">
                                        <TextButton color={colors.cor1}>Convidado</TextButton>
                                    </ButtonOutline>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box pt="15px" pb="15px">
                        <Box flexDirection="row" alignItems="center">
                            <Box mr="20px">
                                <IMG w="70px" h="70px" radius="50px" source={require("@assets/IMG_PERFIL.jpg")} />
                            </Box>
                            <Box flexDirection="row" justifyContent="space-between" style={{width: "73%"}}>
                                <Box>
                                    <Title>Carlos Alberto</Title>
                                    <Box>
                                        <Texto>+55 99999-9999</Texto>
                                    </Box>
                                </Box>
                                <Box>
                                    <ButtonOutline radius="50px">
                                        <TextButton color={colors.cor1}>Convidado</TextButton>
                                    </ButtonOutline>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box pt="15px" pb="15px">
                        <Box flexDirection="row" alignItems="center">
                            <Box mr="20px">
                                <IMG w="70px" h="70px" radius="50px" source={require("@assets/IMG_PERFIL.jpg")} />
                            </Box>
                            <Box flexDirection="row" justifyContent="space-between" style={{width: "73%"}}>
                                <Box>
                                    <Title>Carlos Alberto</Title>
                                    <Box>
                                        <Texto>+55 99999-9999</Texto>
                                    </Box>
                                </Box>
                                <Box>
                                    <ButtonOutline radius="50px">
                                        <TextButton color={colors.cor1}>Convidado</TextButton>
                                    </ButtonOutline>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box pt="15px" pb="15px">
                        <Box flexDirection="row" alignItems="center">
                            <Box mr="20px">
                                <IMG w="70px" h="70px" radius="50px" source={require("@assets/IMG_PERFIL.jpg")} />
                            </Box>
                            <Box flexDirection="row" justifyContent="space-between" style={{width: "73%"}}>
                                <Box>
                                    <Title>Carlos Alberto</Title>
                                    <Box>
                                        <Texto>+55 99999-9999</Texto>
                                    </Box>
                                </Box>
                                <Box>
                                    <ButtonOutline radius="50px">
                                        <TextButton color={colors.cor1}>Convidado</TextButton>
                                    </ButtonOutline>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box pt="15px" pb="15px">
                        <Box flexDirection="row" alignItems="center">
                            <Box mr="20px">
                                <IMG w="70px" h="70px" radius="50px" source={require("@assets/IMG_PERFIL.jpg")} />
                            </Box>
                            <Box flexDirection="row" justifyContent="space-between" style={{width: "73%"}}>
                                <Box>
                                    <Title>Carlos Alberto</Title>
                                    <Box>
                                        <Texto>+55 99999-9999</Texto>
                                    </Box>
                                </Box>
                                <Box>
                                    <ButtonOutline radius="50px">
                                        <TextButton color={colors.cor1}>Convidado</TextButton>
                                    </ButtonOutline>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    </ScrollView>
                </Box>
            </Container>
        </SafeAreaView>
    );
}