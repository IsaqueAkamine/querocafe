import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

import {
  Container,
  Body,
  SearchContainer,
  CardGroup,
  CardGroupText
} from './styles';

import SearchBar from '../../components/SearchBar';
import AddButton from '../../components/AddButton';

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

  testeFuncao = () => {
    alert("Nova funcao teste");
  }

  return (
    <Container>
      <Body showsVerticalScrollIndicator={false}>
        <SearchContainer>
          <SearchBar />
        </SearchContainer>
        <CardGroup onPress={this.handleSelectedGroup}>
          <Text>User</Text>
          <Text>User</Text>
          <Text>User</Text>
          <Text>User</Text>
          <Text>User</Text>
          <Text>User</Text>
          {/* <CardGroupText>Teste de card</CardGroupText> */}
        </CardGroup>

        <CardGroup onPress={this.handleSelectedGroup}>
          <Text>Description</Text>
          <Text>Description</Text>
          <Text>Description</Text>
          <Text>Description</Text>
          <Text>Description</Text>
          <Text>Description</Text>
          {/* <CardGroupText>Teste de card</CardGroupText> */}
        </CardGroup>

        <CardGroup onPress={this.handleSelectedGroup}>
          <Text>User</Text>
          <Text>User</Text>
          <Text>User</Text>
          <Text>User</Text>
          <Text>User</Text>
          <Text>User</Text>
          {/* <CardGroupText>Teste de card</CardGroupText> */}
        </CardGroup>

        <CardGroup onPress={this.handleSelectedGroup}>
          <Text>Description</Text>
          <Text>Description</Text>
          <Text>Description</Text>
          <Text>Description</Text>
          <Text>Description</Text>
          <Text>Description</Text>
          {/* <CardGroupText>Teste de card</CardGroupText> */}
        </CardGroup>

        <CardGroup onPress={this.handleSelectedGroup}>
          <Text>User</Text>
          <Text>User</Text>
          <Text>User</Text>
          <Text>User</Text>
          <Text>User</Text>
          <Text>User</Text>
          {/* <CardGroupText>Teste de card</CardGroupText> */}
        </CardGroup>

        <CardGroup onPress={this.handleSelectedGroup}>
          <Text>Description</Text>
          <Text>Description</Text>
          <Text>Description</Text>
          <Text>Description</Text>
          <Text>Description</Text>
          <Text>Description</Text>
          {/* <CardGroupText>Teste de card</CardGroupText> */}
        </CardGroup>
        
      </Body>
      <AddButton onPress={this.testeFuncao}/>
    </Container>
  );
}

Dashboard.navigationOptions = {
  //header: null,
};