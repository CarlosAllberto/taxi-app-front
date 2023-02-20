import styled from "styled-components/native";
import colors from "@helpers";

export const Container = styled.View`
    padding: 0 16px;
`;

export const Input = styled.TextInput`
    background: ${props => props.focused ? "#f0e6ca" : "#e6e6e6"};
    padding: 10px 20px;
    border-radius: 8px;
    margin: 5px 0;
    color: ${colors.cor6};
    font-size: 16px;
    border-width: 2px;
    border-style: solid;
    border-color: ${props => props.focused ? colors.cor1 : "#e6e6e6"};
    width:          ${props => props.w  || "100%"};
    margin-left:    ${props => props.ml || 0     };
    margin-right:   ${props => props.mr || 0     };
    padding-left:   ${props => props.pl || "10px"};
    padding-right:  ${props => props.pr || "10px"};
`;

export const InputCode = styled(Input)`
    width: 50px;
    margin: 5px;
    text-align: center;
`;

//  props.disabled ? "#D9D9D9" : "#e6e6e6"

export const Button = styled.TouchableOpacity`
    padding: 5px 15px;
    border-radius: ${props => props.radius || "8px"};
    background: ${props => props.backgroundColor || colors.cor1};
    width: ${props => props.width || "100%"};
    text-align: center;
    margin: 5px 0;
`;

export const ButtonOutline = styled.TouchableOpacity`
    padding: 5px 15px;
    border-radius: 50px;
    background: #f9f9f9;
    border: 1px solid ${colors.cor1};
    text-align: center;
    margin: 5px;
    width: auto;
    flex-direction: row;
    align-items: center;
`;

export const ButtonSocial = styled.TouchableOpacity`
    padding: 5px 20px;
    border-radius: 8px;
    background: transparent;
    width: ${props => props.width || "auto"};
    text-align: center;
    margin: 5px 0;
    border: 1px solid #e6e6e6;
`; 

export const ButtonFull = styled.TouchableOpacity`
    padding: 10px;
    border-radius: 30px;
    background: ${props => props.backgroundColor || colors.cor1};
    text-align: center;
    margin: 5px 0;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const TextButton = styled.Text`
    color:     ${props => props.color || colors.cor6};
    font-size: ${props => props.size  || "20px"     };
    font-weight: 600;
    text-align: center;
`;

export const Title = styled.Text`
    color:     ${props => props.color || colors.cor6};
    font-size: ${props => props.size  || "18px"     };
    font-weight: 600;
`;

export const TitleGG = styled.Text`
    color: ${props => props.color || colors.cor6};
    font-size: 42px;
    font-weight: 600;
`;

export const Texto = styled.Text`
    color:          ${props => props.color      || colors.cor6};
    font-size:      ${props => props.fontSize   || "16px"     };
    font-weight:    ${props => props.fontWeight || 400        };
    margin:         ${props => props.m          || 0          };
    margin-top:     ${props => props.mt         || 0          };
    margin-bottom:  ${props => props.mb         || 0          };
    margin-left:    ${props => props.ml         || 0          };
    margin-right:   ${props => props.mr         || 0          };
    padding:        ${props => props.p          || 0          };
    padding-top:    ${props => props.pt         || "10px"     };
    padding-bottom: ${props => props.pb         || "10px"     };
    padding-left:   ${props => props.pl         || 0          };
    padding-right:  ${props => props.pr         || 0          };
`;

export const TextLink = styled(Texto)`
    margin-top:     ${props => props.mt         || "5px"};
    margin-bottom:  ${props => props.mb         || "5px"};
    padding-top:    ${props => props.pt         || 0    };
    padding-bottom: ${props => props.pb         || 0    };
    color:          ${props => props.color      || colors.cor4};
    //text-decoration-line: underline;
`;

export const Span = styled(Texto)`
    color:          ${props => props.color         || colors.cor1};
    font-weight:    ${props => props.fontWeight    || 600        };
    padding-top:    ${props => props.pt            || 0          };
    padding-bottom: ${props => props.pb            || 0          };
`;

export const Line = styled.View`
    width: 100%;
    background-color: #D9D9D9;
    height: 2px;
`;

export const IMG = styled.Image`
    width:          ${props => props.w      || "50%" };
    height:         ${props => props.h      || "50%" };
    border-radius:  ${props => props.radius || 0     };
    margin:         ${props => props.m      || 0     };
    margin-top:     ${props => props.mt     || 0     };
    margin-bottom:  ${props => props.mb     || 0     };
    margin-left:    ${props => props.ml     || 0     };
    margin-right:   ${props => props.mr     || 0     };
    padding:        ${props => props.p      || 0     };
    padding-top:    ${props => props.pt     || 0     };
    padding-bottom: ${props => props.pb     || 0     };
    padding-left:   ${props => props.pl     || 0     };
    padding-right:  ${props => props.pr     || 0     };
`;

export const Box = styled.View`
    margin:          ${props => props.m  || 0     };
    margin-top:      ${props => props.mt || 0     };
    margin-bottom:   ${props => props.mb || 0     };
    margin-left:     ${props => props.ml || 0     };
    margin-right:    ${props => props.mr || 0     };
    padding:         ${props => props.p  || 0     };
    padding-top:     ${props => props.pt || 0     };
    padding-bottom:  ${props => props.pb || 0     };
    padding-left:    ${props => props.pl || 0     };
    padding-right:   ${props => props.pr || 0     };
    width:           ${props => props.w  || "auto"};
    height:          ${props => props.h  || "auto"};
    border-radius:   ${props => props.radius || 0     };
`;

export const Paper = styled.View`
    background-color: #FFFFFF;
    padding: 10px 20px;
    width: 100%;
    border-radius: 8px;
`;

export const SwitchContainer = styled.View`
    background: #E9E9E9;
    flex-direction: row;
    width: 100%;
    border-radius: 8px;
`;

export const SwitchButton = styled.TouchableOpacity`
    padding: 10px;
    border-radius: 8px;
    background: ${props => props.active ? colors.cor1 : "transparent" };
    text-align: center;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: ${props => props.width || "auto" };
`;

export const Status = styled(Texto)`
    background: ${props => props.color || colors.cor1 };
    text-align: center;
    border-radius: 10px;
    font-weight: 500;
    padding-left: 10px;
    padding-right: 10px;
    color: white;
`;

export const NotificationSms = styled.View`
    background: ${colors.cor1};
    border-radius: 50px;
    width: 40px;
    height: 40px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

//font-weight: 500;