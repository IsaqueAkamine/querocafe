import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

import {
  Container,
  SearchContainer,
  CardGroup,
  CardGroupText
} from './styles';

import SearchBar from '../../components/SearchBar';

export default function Dashboard(props) {
  handleSelectedGroup = async () => {
    try {
      // const data = {
      //   groupId: _id
      // };

      props.navigation.navigate('Group');
    } catch (_err) {
      setError('Houve um problema com o grupo, não foi possível acessar!' + _err);
    }
  };

  return (
    <Container>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <CardGroup onPress={this.handleSelectedGroup}>
        <Text>User</Text>
        <Text>User</Text>
        <Text>User</Text>
        {/* <CardGroupText>Teste de card</CardGroupText> */}
      </CardGroup>
    </Container>
  );
}

Dashboard.navigationOptions = {
  //header: null,
};