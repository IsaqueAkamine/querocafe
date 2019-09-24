//import { createStackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login';
// import Logged from './pages/Logged';

// export const SignedOutRoutes = createStackNavigator({
const SignedOutRoutes = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Entrar"
    }
  },
});

// export const SignedInRoutes = createStackNavigator({
const SignedInRoutes = createStackNavigator({
//   Logged: {
//     screen: Logged,
//     navigationOptions: {x
//       title: "Meu perfil"
//     }
//   },
});

export const createRootNavigator = (signedIn = false) => {
  // createStackNavigator(RouteConfigs, StackNavigatorConfig);

  return createStackNavigator({
    SignedIn: { screen: SignedInRoutes },
    //SignedOut: { screen: SignedOutRoutes }
  },
  {
    headerMode: "none",
    mode: "modal",
    initialRouteName: signedIn ? "SignedIn" : "SignedOut",
    navigationOptions: {
      gesturesEnabled: false
    }
  });
};