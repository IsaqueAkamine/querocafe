import React, { useState } from 'react';

import { TouchableOpacity } from 'react-native';

import {
  Container,
  InputEmailView,
  InputEmailText,
  InputPasswordView,
  InputPasswordText,
  ErrorMessage,
  AccessButton,
  AccessButtonText,
  AccountContent,
  AccountText,
  LinkNewAccount
} from './styles';

import BackgroundImage from '../../assets/login_background200px.png';
import { onSignIn } from '../../services/auth';

export default function Login(props) {
  const [email, setEmail] = useState('aaaa');
  const [password, setPassword] = useState('bbbb');
  const [error, setError] = useState("");

  handleEmailChange = (email) => {
    setEmail(email);
  };

  handlePasswordChange = (password) => {
    setPassword(password);
  };

  handleCreateAccountPress = () => {
    props.navigation.navigate('SignUp');
  };

  handleSignInPress = async () => {
    if (email.length === 0 || password.length === 0) {
      setError('Preencha email e senha para continuar!');
    } else {
      try {
        const login = {
          email: email,
          password: password
        };
        onSignIn();
        props.navigation.navigate('Dashboard');
      } catch (_err) {
        setError('Houve um problema com o login, verifique suas credenciais!' + _err);
      }
    }
  };

  return (
    <Container source={BackgroundImage} style={{ width: '100%', height: '100%' }}>
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

      {error.length !== 0 && <ErrorMessage>{error}</ErrorMessage>}

      <AccessButton onPress={this.handleSignInPress}>
        <AccessButtonText>Acessar</AccessButtonText>
      </AccessButton>

      <AccountContent>
        <AccountText>Não possui uma conta? </AccountText>
        <TouchableOpacity onPress={this.handleCreateAccountPress}>
          <LinkNewAccount>Criar conta</LinkNewAccount>
        </TouchableOpacity>
      </AccountContent>
    </Container>
  );
}

Login.navigationOptions = {
  header: null,
};