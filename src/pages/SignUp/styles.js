import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
    flex: 1;
    padding: 0 24px 0 24px;
    justify-content: center;
`;

export const InputEmailView = styled.View`
    margin-top: 24px;
    width: 100%;
    height: 56px;
    border-bottom-color: #757575;
    border-bottom-width: 1px;
`;

export const InputEmailText = styled.TextInput`
    flex: 1;
    width: 100%;
    padding-left: 13px;
    padding-right: 13px;
    margin-right: 35px;
    color: #fff;
`;

export const InputPasswordView = styled.View`
    margin-top: 16px;
    width: 100%;
    height: 56px;
    border-bottom-color: #757575;
    border-bottom-width: 1px;
`;

export const ErrorMessage = styled.Text`
  textAlign: center;
  color: #ce2029;
  fontSize: 16px;
  marginTop: 15px;
  marginHorizontal: 20px;
`;


export const InputPasswordText = styled.TextInput`
    flex: 1;
    width: 100%;
    padding-left: 13px;
    padding-right: 13px;
    margin-right: 35px;
    color: #fff;
`;

export const AccessButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    width: 100%;
    height: 56px;
    border-radius: 4px;
    background-color: #0084f0;
`;

export const AccessButtonText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    font-style: normal;
    color: #ffffff;
`;

export const AccountContent = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
    margin-top: 32px;
    margin-bottom: 32px;
`;

export const AccountText = styled.Text`
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    color: #FFF;
`; // color: #676d73;

export const LinkNewAccount = styled.Text`
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    color: #0084f0;
`;