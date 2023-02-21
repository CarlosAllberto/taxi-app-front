import { useState } from "react";
import { Box, IMG, Container, TitleGG, ButtonFull, TextButton, Texto, Button, Span } from "@components/globalStyles";
import { SafeAreaView, ImageBackground } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { ContDots, Dot } from "./styles";
import colors from "@helpers";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Apresentacao({navigation}) {

    const Navigate = (screen) => navigation.navigate(screen);

    const [pageCont, setPageCont] = useState(1);

    const addPage = () => pageCont < 4 ? setPageCont(pageCont+1) : Navigate("Login");


    const page1 = (
        <>
            <ImageBackground style={{width: "100%", height: "100%"}} source={require("@assets/background.jpg")}>
                <Box style={{paddingLeft: 16, paddingRight: 16}}>
                <Box mt="350px">
                    <TitleGG color="#fff">Bem Vindo ao</TitleGG>
                    <Span fontSize="100px" fontWeigth={500}>TAXI</Span>
                </Box>
                <Box>
                    <Texto color="#fff">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                    </Texto>
                </Box>
                <Box mt="50px" flexDirection="row" justifyContent="flex-end">
                    <Button width="auto" onPress={() => addPage()}>
                        <MaterialCommunityIcons name="car-arrow-right" size={50} color={colors.cor6} />
                    </Button>
                </Box>
                </Box>
            </ImageBackground>
        </>
    );

    const page2 = (
        <>
        <Container flex={1}>
        <Box flexDirection="row" justifyContent="center" mt="100px" mb="50px">
            <IMG w="60%" h="220px" source={require("@assets/taxi-logo.png")}/>
        </Box>
        <Box mb="50px">
            <TitleGG>
                Nós fornecemos serviços profissionais de táxi para você
            </TitleGG>
        </Box>
        <Box flexDirection="row" justifyContent="center" mb="50px">
            <ContDots>
                <Dot active/>
                <Dot/>
                <Dot/>
            </ContDots>
        </Box>
        <Box>
            <ButtonFull onPress={() => addPage()}>
                <TextButton>Próximo</TextButton>
            </ButtonFull>
        </Box>
        </Container>
        </>
    );

    const page3 = (
        <>
        <Container flex={1}>
        <Box flexDirection="row" justifyContent="center" mt="100px" mb="50px">
            <IMG w="60%" h="220px" source={require("@assets/man.png")}/>
        </Box>
        <Box mb="50px">
            <TitleGG>
                Sua satisfação é nossa prioridade número um
            </TitleGG>
        </Box>
        <Box flexDirection="row" justifyContent="center" mb="50px">
            <ContDots>
                <Dot/>
                <Dot active/>
                <Dot/>
            </ContDots>
        </Box>
        <Box>
            <ButtonFull onPress={() => addPage()}>
                <TextButton>Próximo</TextButton>
            </ButtonFull>
        </Box>
        </Container>
        </>
    );

    const page4 = (
        <>
        <Container flex={1}>
        <Box flexDirection="row" justifyContent="center" mt="100px" mb="50px">
            <IMG w="60%" h="220px" source={require("@assets/woman.png")}/>
        </Box>
        <Box mb="50px">
            <TitleGG>
                Vamos tornar o seu dia ótimo com o TAXI agora mesmo!
            </TitleGG>
        </Box>
        <Box flexDirection="row" justifyContent="center" mb="50px">
            <ContDots>
                <Dot/>
                <Dot/>
                <Dot active/>
            </ContDots>
        </Box>
        <Box>
            <ButtonFull onPress={() => addPage()}>
                <TextButton>Iniciar</TextButton>
            </ButtonFull>
        </Box>
        </Container>
        </>
    );

    return(
        <SafeAreaView flex={1}>
            <StatusBar style="auto"/>
            {
            (() => {
                switch(pageCont) {
                case 1:
                    return(<>{page1}</>);
                case 2: 
                    return(<>{page2}</>);
                case 3: 
                    return(<>{page3}</>);
                case 4:
                    return(<>{page4}</>);
                }
            })()
            }
        </SafeAreaView>
    );
};