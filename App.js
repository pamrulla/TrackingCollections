import React, {Component} from 'react';
import { StyleSheet, Text, View, AppRegistry, Dimensions } from 'react-native';
import {DefaultTheme, Provider as ParperProvider} from 'react-native-paper';
import Login from './Components/LoginScreen';
import NewLineForm from './Screens/NewLineForm';

export default class App extends Component {
  render() {
    return (
      <ParperProvider theme={DefaultTheme}>
        <View style={styles.container}>
          <NewLineForm/>
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
