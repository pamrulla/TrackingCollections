import React, {Component} from 'react';
import { StyleSheet, Text, View, AppRegistry, Dimensions } from 'react-native';
import {DefaultTheme, Provider as ParperProvider} from 'react-native-paper';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from './Components/LoginScreen';
import MainScreen from './Screens/MainScreen';
import NewLineForm from './Screens/NewLineForm';
import DurationScreen from './Screens/DurationScreen';

class App extends Component {
  render() {
    return (
      <ParperProvider theme={DefaultTheme}>
        <View style={styles.container}>
         
        </View>
      </ParperProvider>
    );
  }
}

/*AppRegistry.registerComponent('trackingcollections', () => App);*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

const AppNavigator = createStackNavigator(
  {
  login: Login,
  home: MainScreen,
  newline: NewLineForm,
  duration: DurationScreen,
  },
  {
    initialRouteName: 'login',
    defaultNavigationOptions: {
      header: null
    }
  }
  );

export default createAppContainer(AppNavigator);

