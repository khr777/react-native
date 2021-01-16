import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


// tsx Component를 return하기 때문에 소괄호로 작성
const Header = (props) => (
    <View  style={styles.header}>
        <Text>{props.name}</Text>
    </View>
)


const styles = StyleSheet.create({
    header: {
        backgroundColor: 'pink',
        alignItems: 'center',
        padding: 5,
        width: '100%'
    }
})


export default Header;