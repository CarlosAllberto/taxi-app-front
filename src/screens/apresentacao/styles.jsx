import styled from "styled-components/native";
import colors from "@helpers";

export const ContDots = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    margin: 10px 0;
`;

export const Dot = styled.View`
    width: ${props => props.active ? "45px" : "15px"};
    height: 15px;
    background-color: ${props => props.active ? colors.cor1 : "#cccbcb"};
    border-radius: 50px;
    margin: 0 3px;
    opacity: ${props => props.active ? 1 : 0.5};
`;