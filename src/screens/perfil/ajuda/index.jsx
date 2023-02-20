import { SafeAreaView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Box, Paper, Title, Container } from "@components/globalStyles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import colors from "@helpers";

export default function Ajuda() {
    return(
        <SafeAreaView flex={1} backgroundColor="#f9f9f9">
            <StatusBar style="auto"/>
            <Container>
                <Box mt="30px">
                    <Box pt="5px" pb="5px">
                        <TouchableOpacity>
                            <Paper>
                                <Box flexDirection="row" alignItems="center">
                                    <Box mr="20px">
                                        <MaterialCommunityIcons name="whatsapp" size={40} color={colors.cor1} />
                                    </Box>
                                    <Box style={{width: "73%"}}>
                                        <Title>WhatsApp</Title>
                                    </Box>
                                </Box>
                            </Paper>
                        </TouchableOpacity>
                    </Box>

                    <Box pt="5px" pb="5px">
                        <TouchableOpacity>
                            <Paper>
                                <Box flexDirection="row" alignItems="center">
                                    <Box mr="20px">
                                        <MaterialCommunityIcons name="facebook" size={40} color={colors.cor1} />
                                    </Box>
                                    <Box style={{width: "73%"}}>
                                        <Title>Facebook</Title>
                                    </Box>
                                </Box>
                            </Paper>
                        </TouchableOpacity>
                    </Box>

                    <Box pt="5px" pb="5px">
                        <TouchableOpacity>
                            <Paper>
                                <Box flexDirection="row" alignItems="center">
                                    <Box mr="20px">
                                        <MaterialCommunityIcons name="twitter" size={40} color={colors.cor1} />
                                    </Box>
                                    <Box style={{width: "73%"}}>
                                        <Title>Twitter</Title>
                                    </Box>
                                </Box>
                            </Paper>
                        </TouchableOpacity>
                    </Box>

                    <Box pt="5px" pb="5px">
                        <TouchableOpacity>
                            <Paper>
                                <Box flexDirection="row" alignItems="center">
                                    <Box mr="20px">
                                        <MaterialCommunityIcons name="instagram" size={40} color={colors.cor1} />
                                    </Box>
                                    <Box style={{width: "73%"}}>
                                        <Title>Instagram</Title>
                                    </Box>
                                </Box>
                            </Paper>
                        </TouchableOpacity>
                    </Box>

                    <Box pt="5px" pb="5px">
                        <TouchableOpacity>
                            <Paper>
                                <Box flexDirection="row" alignItems="center">
                                    <Box mr="20px">
                                        <Fontisto name="telegram" size={40} color={colors.cor1} />
                                    </Box>
                                    <Box style={{width: "73%"}}>
                                        <Title>Telegram</Title>
                                    </Box>
                                </Box>
                            </Paper>
                        </TouchableOpacity>
                    </Box>
                </Box>
            </Container>
        </SafeAreaView>
    );
}