import "react-native-gesture-handler";
import Navigation from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import { useColorScheme } from "react-native";
import themes from "@helpers/themes";

export default function App() {
    const deviceTheme = useColorScheme();
    const theme = themes[deviceTheme] || themes.light;

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <Navigation />
            </NavigationContainer>
        </ThemeProvider>
    );
}
