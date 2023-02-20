import { useState } from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Box, TitleGG, Container, SwitchContainer, SwitchButton, TextButton, Line, IMG, Title, Texto, Paper, Status } from "@components/globalStyles";
import colors from "@helpers"


export default function Corridas() {
    
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
                            <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "77%"}}>
                                <Title>Carlos Alberto</Title>
                                <Status>Ativo</Status>
                            </Box>
                            <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "77%"}}>
                                <Texto>Mercedes-Benz</Texto>
                                <Title>HSW-4736</Title>
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
                        <Box>
                            <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "80%"}}>
                                <Title>Carlos Alberto</Title>
                                <Status color="#8ef08e">Completado</Status>
                            </Box>
                            <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "80%"}}>
                                <Texto>Mercedes-Benz</Texto>
                                <Title>HSW-4736</Title>
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
                            <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "80%"}}>
                                <Title>Carlos Alberto</Title>
                                <Status color="#8ef08e">Completado</Status>
                            </Box>
                            <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "80%"}}>
                                <Texto>Mercedes-Benz</Texto>
                                <Title>HSW-4736</Title>
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
                            <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "80%"}}>
                                <Title>Carlos Alberto</Title>
                                <Status color="#8ef08e">Completado</Status>
                            </Box>
                            <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "80%"}}>
                                <Texto>Mercedes-Benz</Texto>
                                <Title>HSW-4736</Title>
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
                            <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "80%"}}>
                                <Title>Carlos Alberto</Title>
                                <Status color="#8ef08e">Completado</Status>
                            </Box>
                            <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "80%"}}>
                                <Texto>Mercedes-Benz</Texto>
                                <Title>HSW-4736</Title>
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
                            <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "80%"}}>
                                <Title>Carlos Alberto</Title>
                                <Status color="#8ef08e">Completado</Status>
                            </Box>
                            <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "80%"}}>
                                <Texto>Mercedes-Benz</Texto>
                                <Title>HSW-4736</Title>
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
                            <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "80%"}}>
                                <Title>Carlos Alberto</Title>
                                <Status color="#8ef08e">Completado</Status>
                            </Box>
                            <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "80%"}}>
                                <Texto>Mercedes-Benz</Texto>
                                <Title>HSW-4736</Title>
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
                            <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "80%"}}>
                                <Title>Carlos Alberto</Title>
                                <Status color="#8ef08e">Completado</Status>
                            </Box>
                            <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "80%"}}>
                                <Texto>Mercedes-Benz</Texto>
                                <Title>HSW-4736</Title>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </>
    );

    const page3 = (
        <>
            <Box pt="5px" pb="5px">
                <Paper>
                    <Box flexDirection="row" alignItems="center">
                        <Box mr="20px">
                            <IMG w="70px" h="70px" radius="50px" source={require("@assets/IMG_PERFIL.jpg")} />
                        </Box>
                        <Box>
                            <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "80%"}}>
                                <Title>Carlos Alberto</Title>
                                <Status color="red">Cancelado</Status>
                            </Box>
                            <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "80%"}}>
                                <Texto>Mercedes-Benz</Texto>
                                <Title>HSW-4736</Title>
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
                            <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "80%"}}>
                                <Title>Carlos Alberto</Title>
                                <Status color="red">Cancelado</Status>
                            </Box>
                            <Box flexDirection="row" alignItems="center" justifyContent="space-between" style={{width: "80%"}}>
                                <Texto>Mercedes-Benz</Texto>
                                <Title>HSW-4736</Title>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </>
    );

    return(
        <SafeAreaView flex={1} backgroundColor="#f9f9f9">
            <StatusBar style="auto"/>
            <Container>
                <Box mt="30px">
                    <TitleGG>Corridas</TitleGG>
                </Box>
                <Box mb="30px">
                    <SwitchContainer>
                        <SwitchButton width="33.3%" active={contPage === 1 ? true : false} onPress={() => setContPage(1)}>
                            <TextButton size="16px" color={contPage === 1 ? "#fff" : colors.cor5}>Ativo agora</TextButton>
                        </SwitchButton>
                        <SwitchButton width="33.3%" active={contPage === 2 ? true : false} onPress={() => setContPage(2)}>
                            <TextButton size="16px" color={contPage === 2 ? "#fff" : colors.cor5}>Completado</TextButton>
                        </SwitchButton>
                        <SwitchButton width="33.3%" active={contPage === 3 ? true : false} onPress={() => setContPage(3)}>
                            <TextButton size="16px" color={contPage === 3 ? "#fff" : colors.cor5}>Cancelado</TextButton>
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
                        case 3:
                            return(<>{page3}</>)
                        }
                    })()}
                </Box>
            </Container>
        </SafeAreaView>
    );
}