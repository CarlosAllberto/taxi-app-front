import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@screens/home";
import Perfil from "@screens/perfil";
import Comunicacao from "@screens/comunicacao";
import Corridas from "@screens/corridas";
import Carteira from "@screens/carteira";
import colors from "@helpers";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function ShowBottomTabs() {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarInactiveTintColor: colors.cor5,
                tabBarActiveTintColor: colors.cor1,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: "absolute",
                    backgroundColor: "#ffffff",
                    height: 60,
                    borderTopWidth: 0
                }
            }}
        >
            <Tab.Screen
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if (focused) {
                        return <MaterialCommunityIcons name="home-variant" size={size} color={color}/>
                    }
                    return <MaterialCommunityIcons name="home-variant-outline" size={size} color={color}/>
                },
            
            }}
            name="HomeTab" component={Home}
            />
            <Tab.Screen
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if (focused) {
                        return <MaterialCommunityIcons name="book-marker" size={size} color={color}/>
                    }
                    return <MaterialCommunityIcons name="book-marker-outline" size={size} color={color}/>
                },
            
            }}
            name="CorridasTab" component={Corridas}
            />
            <Tab.Screen
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if (focused) {
                        return <MaterialCommunityIcons name="text-box" size={size} color={color}/>
                    }
                    return <MaterialCommunityIcons name="text-box-outline" size={size} color={color}/>
                },
            
            }}
            name="ComunicacaoTab" component={Comunicacao}
            />
            <Tab.Screen
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if (focused) {
                        return <MaterialCommunityIcons name="credit-card" size={size} color={color}/>
                    }
                    return <MaterialCommunityIcons name="credit-card-outline" size={size} color={color}/>
                },
            
            }}
            name="CarteiraTab" component={Carteira}
            />
            <Tab.Screen
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if (focused) {
                        return <MaterialCommunityIcons name="account" size={size} color={color}/>
                    }
                    return <MaterialCommunityIcons name="account-outline" size={size} color={color}/>
                },
            
            }}
            name="PerfilTab" component={Perfil}
            />
        </Tab.Navigator>
    );
}