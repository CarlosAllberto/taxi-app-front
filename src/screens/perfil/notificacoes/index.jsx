import { useState } from "react";
import { Box, Container, Texto } from "@components/globalStyles";
import { SafeAreaView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import ToggleSwitch from "toggle-switch-react-native";
import colors from "@helpers";

export default function Notificacoes({navigation}) {

    const Navigate = (screen) => navigation.navigate(screen);

    const [formDados, setFormDados] = useState({
        norificacaoGeral: false,
        som: false,
        vibracao: false,
        pagamentos: false,
        atualizacoes: false,
        avaliacao: false,
        servicoDisponivel: false,
    });

    const Toggle = ({onToggle, isOn}) => {
        return(
        <ToggleSwitch
            isOn={isOn}
            onColor={colors.cor1}
            offColor={"#D9D9D9"}
            label=""
            labelStyle={{ color: "#ffffff", fontWeight: "900" }}
            style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10, marginBottom: 10}}
            onToggle={onToggle}
        />
        )
    }

    return(
        <SafeAreaView flex={1}>
            <StatusBar style="auto" />
            <Container flex={1}>
                <Box mt="30px">
                    <Box flexDirection="row" justifyContent="space-between" pt="5px" pb="5px">
                        <Box>
                            <Texto>Notificação Geral</Texto>
                        </Box>
                        <Box>
                            <Toggle
                            isOn={formDados.norificacaoGeral}
                            onToggle={() => setFormDados({...formDados, norificacaoGeral: !formDados.norificacaoGeral})}
                            />
                        </Box>
                    </Box>

                    <Box flexDirection="row" justifyContent="space-between" pt="5px" pb="5px">
                        <Box>
                            <Texto>Som</Texto>
                        </Box>
                        <Box>
                            <Toggle
                            isOn={formDados.som}
                            onToggle={() => setFormDados({...formDados, som: !formDados.som})}
                            />
                        </Box>
                    </Box>

                    <Box flexDirection="row" justifyContent="space-between" pt="5px" pb="5px">
                        <Box>
                            <Texto>Vibração</Texto>
                        </Box>
                        <Box>
                            <Toggle
                            isOn={formDados.vibracao}
                            onToggle={() => setFormDados({...formDados, vibracao: !formDados.vibracao})}
                            />
                        </Box>
                    </Box>

                    <Box flexDirection="row" justifyContent="space-between" pt="5px" pb="5px">
                        <Box>
                            <Texto>Pagamentos</Texto>
                        </Box>
                        <Box>
                            <Toggle
                            isOn={formDados.pagamentos}
                            onToggle={() => setFormDados({...formDados, pagamentos: !formDados.pagamentos})}
                            />
                        </Box>
                    </Box>

                    <Box flexDirection="row" justifyContent="space-between" pt="5px" pb="5px">
                        <Box>
                            <Texto>Atualizações</Texto>
                        </Box>
                        <Box>
                            <Toggle
                            isOn={formDados.atualizacoes}
                            onToggle={() => setFormDados({...formDados, atualizacoes: !formDados.atualizacoes})}
                            />
                        </Box>
                    </Box>

                    <Box flexDirection="row" justifyContent="space-between" pt="5px" pb="5px">
                        <Box>
                            <Texto>Avaliação</Texto>
                        </Box>
                        <Box>
                            <Toggle
                            isOn={formDados.avaliacao}
                            onToggle={() => setFormDados({...formDados, avaliacao: !formDados.avaliacao})}
                            />
                        </Box>
                    </Box>

                    <Box flexDirection="row" justifyContent="space-between" pt="5px" pb="5px">
                        <Box>
                            <Texto>Serviço disponivel</Texto>
                        </Box>
                        <Box>
                            <Toggle
                            isOn={formDados.servicoDisponivel}
                            onToggle={() => setFormDados({...formDados, servicoDisponivel: !formDados.servicoDisponivel})}
                            />
                        </Box>
                    </Box>

                </Box>
            </Container>
        </SafeAreaView>
    );
}
