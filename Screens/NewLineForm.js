import React, { Component } from 'react';
import { View, StyleSheet, DatePickerAndroid, TouchableOpacity } from 'react-native';
import { withTheme, Button, Text, Menu, TextInput, IconButton} from 'react-native-paper';
import Header from './../Components/Util/Header';

class NewLineForm extends Component {
    constructor(props) {
        super(props);
        this.setDate = this.setDate.bind(this);
        this.colors = this.props.theme.colors;
        this.cities = ['Kakinada', 'Anaparthi', 'Rajahmundry'];
        this.state = { 
            visible: false,
            cityIndex: 0,
            date: new Date()
        };
    }

    setDate(newDate) 
    {
        this.setState({ date: newDate });
    }

    _openMenu = () => this.setState({ visible: true });

    _closeMenu = () => this.setState({ visible: false });

    async selectDate(options)
    {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({options});
            if (action !== DatePickerAndroid.dismissedAction) {
                this.setState({date: new Date(year, month, day)})
                console.log(this)
            }
        } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }
    }

    render() {
        let menuItems = [];
        for(let i = 0; i < this.cities.length; ++i)
        {
            menuItems.push(<Menu.Item key={this.cities[i]} onPress={() => {this.setState({cityIndex: i, visible: false})}} title={this.cities[i]} />);
        }
        return (
            <View style={styles.container}>
                <Header title="New Line Application"/>
                <View style={styles.content}>
                    <View style={styles.row}>
                        <View style={styles.fieldNameContainer}>
                            <Text style={styles.filedNameText}>City</Text>
                        </View>
                        <View style={styles.fieldValueContainer}>
                            <Menu
                                visible={this.state.visible}
                                onDismiss={this._closeMenu}
                                anchor={
                                    <Button onPress={this._openMenu}>
                                        {this.cities[this.state.cityIndex]}
                                    </Button>
                                }
                            >
                                {menuItems}
                            </Menu>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.fieldNameContainer}>
                            <Text style={styles.filedNameText}>Start Date</Text>
                        </View>
                        <TouchableOpacity style={styles.fieldValueContainer} 
                            onPress={this.selectDate.bind(this, {date: this.state.date})}>
                            <Text style={[styles.filedValueText]}>
                                {this.state.date.toDateString()}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.fieldNameContainer}>
                            <Text style={styles.filedNameText}>Partners</Text>
                        </View>
                        <View style={styles.fieldValueContainer}>
                            <TextInput style={styles.filedValueInput} />
                        </View>                        
                    </View>
                    <View style={[styles.row, {
                        alignSelf: 'stretch',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-end'
                    }]}>
                        <IconButton
                            icon='account-plus'
                            color='red'
                            size={40}
                            onPress={() => console.log('Pressed')} 
                        />
                    </View>
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
        paddingVertical: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    row: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fieldNameContainer: {
        flex: 1,
        alignItems: 'flex-start',
    },
    fieldValueContainer: {
        flex: 2,
        alignItems: 'stretch',
    },
    filedNameText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    filedValueText:  {
        fontWeight: 'bold',
        fontSize: 18,
    },
    filedValueInput: {
        height: 40,
    }
})

export default withTheme(NewLineForm);
