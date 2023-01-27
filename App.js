import 'react-native-gesture-handler';
import Routers from './src/routers';
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <Routers />
    </NavigationContainer>
  );
}
