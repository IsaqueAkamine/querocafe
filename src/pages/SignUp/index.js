import React, { useState } from 'react';

import {
  Container,
  InputEmailView,
  InputEmailText,
  InputPasswordView,
  InputPasswordText,
  ErrorMessage,
  AccessButton,
  AccessButtonText,
  
} from './styles';

import BackgroundImage from '../../assets/login_background200px.png';

export default function SignUp(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState("");

  handleEmailChange = (email) => {
    setEmail(email);
  };

  handlePasswordChange = (password) => {
    setPassword(password);
  };

  // handleCreateAccountPress = () => {
  //   this.props.navigation.navigate('Dashboard');
  // };

//   handleSignInPress = async () => {
//     if (email.length === 0 || password.length === 0) {
//       setError('Preencha email e senha para continuar!');
//     } else {
//       try {
//         const login = {
//           email: email,
//           password: password
//         };

//         props.navigation.navigate('Dashboard');
//       } catch (_err) {
//         setError('Houve um problema com o login, verifique suas credenciais!' + _err);
//       }
//     }
//   };

  return (
    <Container source={BackgroundImage} style={{ width: '100%', height: '100%' }}>
    {/* <Container style={{ width: '100%', height: '100%' }}> */}
        <InputEmailView>
          <InputEmailText
            placeholder="Email"
            value={email}
            onChangeText={this.handleEmailChange}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </InputEmailView>
        <InputPasswordView>
          <InputPasswordText
            placeholder="Senha"
            secureTextEntry={true}
            value={password}
            onChangeText={this.handlePasswordChange}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </InputPasswordView>
        <InputPasswordView>
          <InputPasswordText
            placeholder="Confirme"
            secureTextEntry={true}
            value={password}
            onChangeText={this.handlePasswordChange}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </InputPasswordView>

        {error.length !== 0 && <ErrorMessage>{error}</ErrorMessage>}

        <AccessButton onPress={this.handleSignInPress}>
          <AccessButtonText>Criar minha conta</AccessButtonText>
        </AccessButton>
    </Container>
  );
}

SignUp.navigationOptions = {
  header: null,
};