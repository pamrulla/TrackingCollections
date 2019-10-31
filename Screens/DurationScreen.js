import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { withTheme, Surface, Text, List} from 'react-native-paper';
import Header from '../Components/Util/Header';

class DurationScreen extends Component {
    constructor(props) {
        super(props);
        this.colors = this.props.theme.colors;
        this.state = {  };
    }

    doMonthly()
    {
        console.log("doMonthly")
    }

    doWeekly()
    {
        console.log("doWeekly")
    }

    doDaily()
    {
        console.log("doDaily")
    }

    render() {
        return (
            <View style={styles.container}>
                <Header title="Select Duration" />
                <View style={styles.content}>
                    <Surface style={styles.surface}>
                    <TouchableOpacity style={styles.surfaceContents} onPress={this.doMonthly}>
                            <List.Icon icon="alpha-m-box" />
                            <Text style={styles.surfaceText}>Monthly</Text>
                    </TouchableOpacity>
                    </Surface>
                    <Surface style={styles.surface}>
                        <TouchableOpacity style={styles.surfaceContents} onPress={this.doWeekly}>
                            <List.Icon icon="alpha-w-box"/>
                            <Text style={styles.surfaceText}>Weekly</Text>
                        </TouchableOpacity>
                    </Surface>
                    <Surface style={styles.surface}>
                        <TouchableOpacity style={styles.surfaceContents} onPress={this.doDaily}>
                            <List.Icon icon="alpha-d-box"/>
                            <Text style={styles.surfaceText}>Daily</Text>
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
        height: '20%',
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

export default withTheme(DurationScreen);
