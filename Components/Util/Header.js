import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { withTheme, Appbar } from 'react-native-paper';

class Header extends Component {
    constructor(props) {
        super(props);
        this.colors = this.props.theme.colors;
        this.state = {  };
    }
    render() {
        return (
            <Appbar.Header statusBarHeight={25}>
                <Appbar.Content
                    title="Tracking Collections"
                    subtitle="Home"
                />
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