import React, {Component} from 'react';
import { StyleSheet, Text, View, AppRegistry, Dimensions } from 'react-native';
import {DefaultTheme, Provider as ParperProvider} from 'react-native-paper';
import Login from './Components/LoginScreen';
import DurationScreen from './Screens/DurationScreen';

export default class App extends Component {
  render() {
    return (
      <ParperProvider theme={DefaultTheme}>
        <View style={styles.container}>
          <DurationScreen/>
        </View>
      </ParperProvider>
    );
  }
}

AppRegistry.registerComponent('trackingcollections', () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
