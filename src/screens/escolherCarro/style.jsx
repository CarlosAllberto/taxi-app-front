import styled from "styled-components/native";
import colors from "@helpers";

export const BoxCar = styled.View`
    padding: 10px 20px;
    background: ${props => props.active ? props.theme.boxCarActive : props.theme.boxCar};
`;