import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, KeyboardAvoidingView, Image } from 'react-native';
import { Title, TextInput, Button, Text, withTheme, ActivityIndicator } from 'react-native-paper';
import { StackActions, NavigationActions } from 'react-navigation'
import Overlay from './../Util/Overlay';

class Login extends Component {
    constructor(props) {
        super(props);
        this.colors = this.props.theme.colors;
        this.state = { 
            username: '', 
            password: '',
            isLoginError: false,
            isLoggingIn: false,
        };
    }

    performLogin()
    {
        this.setState({isLoggingIn: true});
        
        if(this.state.username == 'admin' && this.state.password == 'admin')
        {
            this.setState({isLoginError: false});
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'home' })],
              });
            this.props.navigation.dispatch(resetAction);                
        }
        else
        {
            this.setState({isLoginError: true});
        }
        this.setState({isLoggingIn: false});
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                
                <View style={styles.logoContainer}>
                    <Image source={require('./../../assets/icon.png')} />
                    <Title>Login</Title>
                </View>
                <View style={styles.formContainer}>
                    <TextInput style={styles.input}
                        label='Username'
                        mode='outlined'
                        value={this.state.username}
                        onChangeText={text => this.setState({ username: text }) } />
                    <TextInput style={styles.input}
                        label='Password'
                        mode='outlined'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={text => this.setState({ password: text }) }  />
                    {this.state.isLoginError ?<Text style={{color: this.colors.error, textAlign: 'center'}}>Login failed: invalid username or password</Text> : null}
                    <Button
                        icon= 'login'
                        mode='contained' 
                        style={styles.loginBtn}
                        onPress={() => this.performLogin()}
                        >
                        Login
                    </Button>
                </View>
                {this.state.isLoggingIn ? <Overlay /> : null}
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: Dimensions.get('window').width
    },
    logoContainer: {
        flexGrow: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        flex: 1,
        paddingHorizontal: 20, 
        width: Dimensions.get('window').width,
    },
    input: {
        paddingVertical: 10,
        height: 40,
    },
    loginBtn: {
        padding: 10,
        margin: 20
    },
});

export default withTheme(Login);
