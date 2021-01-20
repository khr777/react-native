import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, TouchableWithoutFeedback } from 'react-native';


// tsx Component를 return하기 때문에 소괄호로 작성
const Header = (props: any) => (
    <TouchableOpacity 
        style={styles.header}
        //onPress={() => alert('Hello World')}
        //onLongPress={() => alert('Hello World')}
        //onPressIn={() => alert('Hello World')}
        onPressOut={() => Alert.alert('Hello World?')}
    >
        <View>
            <Text>{props.name}</Text>
        </View>
    </TouchableOpacity>
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