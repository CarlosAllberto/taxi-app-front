import MapView from "react-native-maps";
import { StatusBar, SafeAreaView } from "react-native";
import { Box } from "@components/globalStyles"
import { SearchBar } from "@components/globalComponents";

export default function Home() {
    
    var mapStyle = []

    return(
        <SafeAreaView flex={1}>
            <StatusBar/>
            <Box>
              <SearchBar />
              <MapView  
                  initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                  }}
                  style={{width: "100%", height: "100%"}}
              />
            </Box>
        </SafeAreaView>
    );
}