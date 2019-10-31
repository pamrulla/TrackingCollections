import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { withTheme, ActivityIndicator } from 'react-native-paper';

class Overlay extends Component {
    constructor(props) {
        super(props);
        this.colors = this.props.theme.colors;
    }
    render() {
        return (
            <View style={styles.overlay}>
                <ActivityIndicator animating={true} size='large' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    overlay:{
        position: 'absolute',
        left: 0,
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#rgba(128, 128, 128, 0.5)',
    },
});

export default withTheme(Overlay);
