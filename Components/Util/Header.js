import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { withTheme, Appbar } from 'react-native-paper';
import { StackActions } from 'react-navigation';

class Header extends Component {
    constructor(props) {
        super(props);
        this.colors = this.props.theme.colors;
        this.state = {  };
    }

    goBack()
    {
        this.props.navigation.dispatch(StackActions.pop())
    }

    goToHome()
    {
        this.props.navigation.navigate('home')
    }

    logout()
    {
        this.props.navigation.navigate('login')
    }

    render() {
        return (
            <Appbar.Header statusBarHeight={25}>
                {this.props.isHome ? null : <Appbar.BackAction onPress = {
                    () => {
                        this.goBack()
                    }} />
                }
                <Appbar.Content
                    title="Tracking Collections"
                    subtitle={this.props.title}
                />
                {this.props.isHome ? null : <Appbar.Action icon="home" onPress = {
                    () => {
                        this.goToHome()
                    }
                }/>}
                <Appbar.Action icon="logout" onPress = {
                    () => {
                        this.logout()
                    }
                }/>
            </Appbar.Header>                
        );
    }
}

const styles = StyleSheet.create({
    top: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      width: 200,
    },
  });

export default withTheme(Header);