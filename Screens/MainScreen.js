import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { withTheme, Surface, Text, List} from 'react-native-paper';
import Header from './../Components/Util/Header';

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.colors = this.props.theme.colors;
        this.state = {  };
    }

    doNewLine()
    {
       this.props.navigation.navigate('duration', {isNewLine: true})
    }

    doExistingLine()
    {
        this.props.navigation.navigate('duration', {isNewLine: false})
    }

    render() {
        return (
            <View style={styles.container}>
                <Header title="Home" isHome={true} navigation={this.props.navigation}/>
                <View style={styles.content}>
                    <Surface style={styles.surface}>
                    <TouchableOpacity style={styles.surfaceContents} onPress={() => this.doNewLine()}>
                            <List.Icon icon="new-box" />
                            <Text style={styles.surfaceText}>New Line</Text>
                    </TouchableOpacity>
                    </Surface>
                    <Surface style={styles.surface}>
                        <TouchableOpacity style={styles.surfaceContents} onPress={() => this.doExistingLine()}>
                            <List.Icon icon="book-open"/>
                            <Text style={styles.surfaceText}>Existing Line</Text>
                        </TouchableOpacity>
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    surface: {
        width: '70%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
      },
      surfaceContents: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
      },
      surfaceText: {
          fontWeight: 'bold',
          fontSize: 24
      }
})

export default withTheme(MainScreen);
