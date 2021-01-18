import React, {Component} from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const NumList = (props: any) => {
    return (
        props.num.map((item, idx)=>(
            <View style={styles.numList} key={idx}>
                <Text>{item}</Text>
            </View>   
        ))
        
    )
    
} 


const styles = StyleSheet.create({
    numList: {
        backgroundColor: '#158682',
        padding: 10,
        alignItems: 'center',
        width: '100%',
        marginTop: 5
    }
})

export default NumList;