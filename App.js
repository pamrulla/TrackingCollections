import React, {Component} from 'react';
import { StyleSheet, Text, View, AppRegistry, Dimensions } from 'react-native';
import {DefaultTheme, Provider as ParperProvider} from 'react-native-paper';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from './Screens/LoginScreen';
import MainScreen from './Screens/MainScreen';
import NewLineForm from './Screens/NewLineForm';
import DurationScreen from './Screens/DurationScreen';

AppRegistry.registerComponent('trackingcollections', () => App);

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
  login: LoginScreen,
  home: MainScreen,
  newlineform: NewLineForm,
  duration: DurationScreen,
  },
  {
    initialRouteName: 'newlineform',
    defaultNavigationOptions: {
      header: null
    }
  }
  );

const AppContainer = createAppContainer(AppNavigator);


export default class App extends Component {
  render() {
    return (
      <ParperProvider theme={DefaultTheme}>
        <View style={styles.container}>
          <AppContainer />
        </View>
      </ParperProvider>
    );
  }
}
