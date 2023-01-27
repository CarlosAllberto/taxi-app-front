import { useState } from "react";
import { Box, IMG, Container, TitleGG, ButtonFull, TextButton, Span, Texto, Button } from "@components/globalStyles";
import { SafeAreaView, StatusBar, ImageBackground } from "react-native";
import { ContDots, Dot } from "./styles";
import colors from "@helpers";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Apresentacao({navigation}) {

    const Navigate = (screen) => navigation.navigate(screen);

    const [pageCont, setPageCont] = useState(1);

    const addPage = () => pageCont < 4 ? setPageCont(pageCont+1) : Navigate("Login");


    const page1 = (
        <>
            <ImageBackground style={{width: "100%", height: "100%"}} source={require("@assets/background.jpg")}>
                <Container>
                <Box mt="350px">
                    <TitleGG>Welcome to</TitleGG>
                    <Span fontSize="100px" fontWeigth={500}>TAXI</Span>
                </Box>
                <Box>
                    <Texto>
                        the bast taxi app bla-bla-bla is very good 
                        the bast taxi app bla-bla-bla is very good
                    </Texto>
                </Box>
                <Box mt="50px" flexDirection="row" justifyContent="flex-end">
                    <Button width="auto" onPress={() => addPage()}>
                        <Icon name="car-arrow-right" size={50} color={"#000"} />
                    </Button>
                </Box>
                </Container>
            </ImageBackground>
        </>
    );

    const page2 = (
        <>
        <Container>
        <Box flexDirection="row" justifyContent="center" mt="100px" mb="50px">
            <IMG w="60%" h="220px" source={require("../../../assets/taxi-logo.png")}/>
        </Box>
        <Box mb="50px">
            <TitleGG color={colors.black}>
                We Provide Professional TAXI services for you
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
                <TextButton color={colors.black}>Next</TextButton>
            </ButtonFull>
        </Box>
        </Container>
        </>
    );

    const page3 = (
        <>
        <Container>
        <Box flexDirection="row" justifyContent="center" mt="100px" mb="50px">
            <IMG w="60%" h="220px" source={require("../../../assets/man.png")}/>
        </Box>
        <Box mb="50px">
            <TitleGG color={colors.black}>
                Your satisfacion is our number one priority
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
                <TextButton color={colors.black}>Next</TextButton>
            </ButtonFull>
        </Box>
        </Container>
        </>
    );

    const page4 = (
        <>
        <Container>
        <Box flexDirection="row" justifyContent="center" mt="100px" mb="50px">
            <IMG w="60%" h="220px" source={require("../../../assets/woman.png")}/>
        </Box>
        <Box mb="50px">
            <TitleGG color={colors.black}>
                Let's make your day great with TAXI right now!
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
                <TextButton color={colors.black}>Get Started</TextButton>
            </ButtonFull>
        </Box>
        </Container>
        </>
    );

    return(
        <SafeAreaView flex={1}>
            <StatusBar />
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