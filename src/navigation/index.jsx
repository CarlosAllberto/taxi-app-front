import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import { TouchableOpacity } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

import Apresentacao from "@screens/apresentacao";
import Cadastro from "@screens/cadastro";
import Login from "@screens/login";
import EsqueciSenha from "@screens/esqueciSenha";
import ConfiguracaoConta from "@screens/configuracaoConta";
import PoliticaPrivacidade from "@screens/politicaPrivacidade";
import EditarConta from "@screens/perfil/editarConta";
import Enderecos from "@screens/perfil/enderecos";
import AdicionarEndereco from "@screens/perfil/adicionarEndereco";
import EditarEndereco from "@screens/perfil/editarEndereco";
import Notificacoes from "@screens/perfil/notificacoes";
import Seguranca from "@screens/perfil/seguranca";
import ConvidarAmigos from "@screens/perfil/convidarAmigos";
import Ajuda from "@screens/perfil/ajuda";
import ShowBottomTabs from "./TabNavigation";
import colors from "@helpers";

const Stack = createStackNavigator();

export default function Navigation() {
    const header = ({navigation}) => ({
        headerStyle: {elevation: 0, backgroundColor: "#F9F9F9"},
        headerTintColor: colors.cor6,
        headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft: 16}}><Ionicons name="chevron-back-outline" size={40} color={colors.cor6} /></TouchableOpacity>)
    });
    const headerNoTitle = ({navigation}) => ({
        title: "",
        headerStyle: {elevation: 0, backgroundColor: "#F9F9F9"},
        headerTintColor: colors.cor6,
        headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft: 16}}><Ionicons name="chevron-back-outline" size={40} color={colors.cor6} /></TouchableOpacity>)
    });

    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Apresentacao" component={Apresentacao} />
            <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
            <Stack.Screen options={headerNoTitle} name="Cadastro" component={Cadastro} />
            <Stack.Screen options={header} name="Esqueci a Senha" component={EsqueciSenha} />
            <Stack.Screen options={header} name="Configuração da conta" component={ConfiguracaoConta} />
            <Stack.Screen options={{headerShown: false}} name="Home" component={ShowBottomTabs} />
            <Stack.Screen options={header} name="Editar Conta" component={EditarConta} />
            <Stack.Screen options={header} name="Politica de Privacidade" component={PoliticaPrivacidade} />
            <Stack.Screen options={header} name="Endereços" component={Enderecos} />
            <Stack.Screen options={header} name="Adicionar Endereço" component={AdicionarEndereco} />
            <Stack.Screen options={header} name="Editar Endereço" component={EditarEndereco} />
            <Stack.Screen options={header} name="Notificações" component={Notificacoes} />
            <Stack.Screen options={header} name="Segurança" component={Seguranca} />
            <Stack.Screen options={header} name="Convidar Amigos" component={ConvidarAmigos} />
            <Stack.Screen options={header} name="Ajuda" component={Ajuda} />
        </Stack.Navigator>
    );
}