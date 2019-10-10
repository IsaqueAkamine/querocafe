import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import './src/config/StatusBarConfig'; // TODO adjust statusbar for iphone and android
import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';
import Dashboard from './src/pages/Dashboard';
import Group from './src/pages/Group';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Quero café"
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Criar conta"
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: "Painel"
    }
  },
  Group: {
    screen: Group,
    navigationOptions: {
      title: "Grupos"
    }
  },
});

export default createAppContainer(AppNavigator);



// // // import React from 'react';
// // // import { StyleSheet, Text, View } from 'react-native';

// // // import Login from './src/pages/Login';

// // // export default function App() {
// // //   return (
// // //     <View style={styles.container}>
// // //       <Text>Open up App.js to start working on your app!</Text>
// // //       <Login />
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#fff',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //   },
// // // });


// import React from 'react';
// import { View } from 'react-native';

// import { isSignedIn } from "./src/services/auth";
// import { createAppContainer } from 'react-navigation';
// import { createRootNavigator, SignedOutRoutes, SignedInRoutes } from './src/routes';

// class App extends React.Component {
//   state = {
//     signed: false,
//     signLoaded: false,
//   };

//   componentWillMount() {
//     isSignedIn()
//       .then(res => this.setState({ signed: res, signLoaded: true }))
//       .catch(err => alert("Erro"));
//   }

//   render() {
//     const { signLoaded, signed } = this.state;

//     if (!signLoaded) {
//       return null;
//     }

//     const Layout = createAppContainer(signed);
//     return <Layout />;
//   }
// }


// export default createAppContainer(createRootNavigator);