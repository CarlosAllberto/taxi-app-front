import { Box, Texto, Container } from "@components/globalStyles";
import { SafeAreaView, StatusBar, ScrollView } from "react-native";
import colors from "@helpers";


export default function PoliticaPrivacidade() {
    return(
        <SafeAreaView flex={1}>
            <StatusBar />
            <Container>
                <ScrollView>
                    <Box mt="50px">
                        <Texto color={colors.black}>
                            Aqui vai as policas de privacidade
                        </Texto>
                    </Box>
                </ScrollView>
            </Container>
        </SafeAreaView>
    );
}