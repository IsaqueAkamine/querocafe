import React from 'react';
import { ActivityIndicator, StatusBar, AsyncStorage, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { TOKEN_KEY, isSignedIn, onSignOut } from './services/auth';

export const SignedOutRoutes = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Entrar"
    }
  },
});

class FeedScreen extends React.Component {
  handleLogoutPress = async () => {
    await onSignOut();
    await isSignedIn().then((res) => {
      alert(res);
      response = res
    });
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Feed Screen</Text>
        <TouchableOpacity style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 16,
          width: '100%',
          height: 56,
          borderRadius: 4,
          backgroundColor: '#0084f0',
        }}
          onPress={this.handleLogoutPress}>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            fontStyle: 'normal',
            color: '#ffffff',
          }}>Deslogar</Text>
        </TouchableOpacity>
      </View >
    );
  }
}

FeedScreen.navigationOptions = {
  // header: null,
  title: 'FeedScreen',
};

export const SignedInRoutes = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: "Dashboard"
    }
  },
  Feed: FeedScreen,
},
  {
    initialRouteName: 'Feed',
  }
);

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem(TOKEN_KEY);

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    // this.props.navigation.navigate(userToken ? 'SignedInRoutes' : 'SignedOutRoutes');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: SignedInRoutes,
      Auth: SignedOutRoutes,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);