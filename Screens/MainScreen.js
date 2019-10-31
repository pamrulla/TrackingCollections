import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { withTheme, Surface, Text} from 'react-native-paper';
import Header from './../Components/Util/Header';

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.colors = this.props.theme.colors;
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <View style={styles.content}>
                    <Surface style={styles.surface}>
                    <Text>1</Text>
                    </Surface>
                    <Surface style={styles.surface}>
                    <Text>2</Text>
                    </Surface>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 20,
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-evenly',
    },
    surface: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
      },
})

export default withTheme(MainScreen);