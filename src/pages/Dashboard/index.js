import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

import {
  Container,
  CardGroup,
  CardGroupText
} from './styles';

import SearchBar from '../../components/SearchBar';

export default function Dashboard() {
  return (
    <Container>
      <SearchBar />
      <CardGroup>
        <Text>User</Text>
        <Text>User</Text>
        <Text>User</Text>
        {/* <CardGroupText>Teste de card</CardGroupText> */}
      </CardGroup>
    </Container>
  );
}

Dashboard.navigationOptions = {
  header: null,
};