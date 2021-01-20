import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';



// state를 사용할 목적으로 class를 선언한 것.
class Input extends Component
{
    state =
    {
        myTextInput: ''
    }

    onChangeInput = (event: string) =>  {
        this.setState({myTextInput: event});
    }

    render() 
    {
        return (
            <View style={styles.mainView}>
                <TextInput 
                value={this.state.myTextInput}
                style={styles.input}
                onChangeText={this.onChangeInput}
                multiline={true}
                maxLength={31}
                autoCapitalize={'none'}
                editable={true}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    mainView: 
    {
        width: '100%'
    },
    input: 
    {
        width: '100%',
        backgroundColor: '#cecece',
        marginTop: 20,
        fontSize: 25,
        padding: 10
    }
})

export default Input; 