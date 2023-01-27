import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from '@react-navigation/stack';

//import MyComponent from "../screens/drawer";

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { IMG } from '@components/globalStyles';

import Apresentacao from "@screens/apresentacao";
import Cadastro from "@screens/cadastro";
import Login from "@screens/login";
import PoliticaPrivacidade from "@screens/politicaPrivacidade";
import Home from "@screens/home";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function Routers() {
    const header = ({navigation}) => ({
        title: "",
        headerStyle: {backgroundColor: "#050505", elevation: 0},
        headerTintColor: "#fff",
        headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft: 16}}><Icon name="chevron-back-outline" size={40} color="#fff" /></TouchableOpacity>)
    });
    const headerLogo = ({navigation}) => ({
        title: "", 
        headerStyle: {backgroundColor: "#050505", height: 80, elevation: 0}, 
        headerTintColor: "#fff",
        headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft: 16}}><Icon name="chevron-back-outline" size={40} color="#fff"/></TouchableOpacity>),
        headerRight: () => (<IMG w="120px" h="120px" mr="16px" source={require("../../assets/taxi-logo.png")} />)
    });
    const headerTitle = ({navigation}) =>  ({
        headerStyle: {backgroundColor: "#050505", elevation: 0},
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft: 16}}><Icon name="chevron-back-outline" size={40} color="#fff" /></TouchableOpacity>)
    });
    const headerHome = ({navigation}) => ({
        headerStyle: {backgroundColor: "#050505", elevation: 0},
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerTitle: () => (<IMG w="120px" h="120px" source={require("../../assets/taxi-logo.png")}/>),
        headerLeft: () => (<TouchableOpacity onPress={() => navigation.openDrawer()} style={{marginLeft: 16}}><Icon name="menu-outline" size={40} color="#fff" /></TouchableOpacity>)
    });

    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Apresentacao" component={Apresentacao} />
            <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
            <Stack.Screen options={{headerShown: false}} name="Cadastro" component={Cadastro} />
            <Stack.Screen options={headerTitle} name="PoliticaPrivacidade" component={PoliticaPrivacidade} />
            <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        </Stack.Navigator>
    );
}