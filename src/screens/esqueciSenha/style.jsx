import styled from "styled-components/native";
import colors from "@helpers";

export const Card = styled.View`
    background-color: transparent;
    padding: 20px 20px;
    width: 100%;
    border-radius: 16px;
    border-width: ${props => props.focused ? "3px" : "1px"};
    border-color: ${props => props.focused ? colors.cor1 : props.theme.cardBorder};
`;