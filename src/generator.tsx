import React, {Component} from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const Generator = (props: any) => {
    return (
        <View style={styles.generator}>
            <TouchableOpacity onPress={() => props.add()}>
              <Text style={styles.buttonText}>ADD NUMBER</Text>
            </TouchableOpacity>
        </View>
    )
    
}


const styles = StyleSheet.create({
    generator: {
        backgroundColor: '#afafaf',
        padding: 20,
        alignItems: 'center',
        width: '100%'
    },
    buttonText: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default Generator;