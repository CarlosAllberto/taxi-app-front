import styled from "styled-components/native";
import colors from "@helpers";

export const Container = styled.View`
    padding: 0 16px;
`;

export const Input = styled.TextInput`
    background: ${props => props.disabled ? "#D9D9D9" : "#e6e6e6"};
    padding: 10px 20px;
    border-radius: 8px;
    margin: 5px 0;
    color: gray;
    font-size: 16px;
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

export const ButtonLarge = styled.TouchableOpacity`
    padding: 10px;
    border-radius: 8px;
    background: ${props => props.backgroundColor || colors.yellow};
    text-align: center;
    margin: 5px 0;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    padding: 10px;
    border-radius: 8px;
    background: ${props => props.backgroundColor || colors.yellow};
    width: ${props => props.width || "100%"};
    text-align: center;
    margin: 5px 0;
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
    background: ${props => props.backgroundColor || colors.yellow};
    text-align: center;
    margin: 5px 0;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const TextButton = styled.Text`
    color:     ${props => props.color || "#ffffff"};
    font-size: ${props => props.size  || "20px"     };
    font-weight: 600;
    text-align: center;
`;

export const Title = styled.Text`
    color:     ${props => props.color || "#ffffff"};
    font-size: ${props => props.size  || "18px"     };
    font-weight: 600;
`;

export const TitleLarge = styled.Text`
    color: ${props => props.color || "#ffffff"};
    font-size: 32px;
    font-weight: 700;
`;

export const TitleGG = styled.Text`
    color: ${props => props.color || "#ffffff"};
    font-size: 42px;
    font-weight: 600;
`;

export const Texto = styled.Text`
    color:          ${props => props.color      || "#ffffff"};
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
    color:          ${props => props.color      || colors.blue};;
    //text-decoration-line: underline;
`;

export const TextoInfo = styled(Texto)`
    color:          ${props => props.color         || "#000"};
    font-weight:    ${props => props.fontWeight    || 500     };
    padding-top:    ${props => props.pt            || "3px"   };
    padding-bottom: ${props => props.pb            || "3px"   };
    font-size:      ${props => props.fontSize      || "16px"  };
    opacity: 0.5;
`;

export const Span = styled(Texto)`
    color:          ${props => props.color         || colors.yellow};
    font-weight:    ${props => props.fontWeight    || 600        };
    padding-top:    ${props => props.pt            || 0          };
    padding-bottom: ${props => props.pb            || 0          };
    font-size:      ${props => props.fontSize      || "16px"  };
`;

export const AlertError = styled.View`
    background: #FF8181;
    flex-direction: row;
    border-radius: 8px;
    align-items: center;
    padding: 0 20px;
`;

export const Line = styled.View`
    width: 100%;
    background-color: #D9D9D9;
    height: 2px;
`;

export const CheckBox = styled.View`
    width: 20px;
    height: 20px;
    background-color: ${props => props.checked ? "#2AC802" : "#D9D9D9"};
    border-radius: 50px;
    border: 1px solid #D9D9D9;
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
    elevation: 2;
`;