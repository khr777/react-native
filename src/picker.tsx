import React, { Component } from 'react';
import {  View, Text, StyleSheet, TextInput, Alert } from 'react-native';
// picker는 react-native module에서 import하는게 아니다. 
// yarn add @react-native-picker/picker
import { Picker } from '@react-native-picker/picker';


class PickerComponent extends Component
{
   state =
   {
       country: 'korea'
   }
    render() 
    {
        return (
           <View style={styles.container}>
            <Picker 
            style={{height: 50, width: 250}}
            selectedValue={this.state.country}
            // @description : 
            // callBack 함수를 호출한다.
            // 이 함수를 호출하지 않으면 picker 값이 변동되지 않는다. 
            onValueChange={(val, idx) => 
                this.setState({country: val})
            }
            >
                <Picker.Item label="Canada" value="canada"/>
                <Picker.Item label="Korea" value="korea"/>
            </Picker>                
           </View>
        )
    }
    
}


const styles = StyleSheet.create({   
  container: 
  {
      flex: 1,
      paddingTop: 20,
      marginBottom: 200,
      alignItems: 'center',
      width: '100%'
  }
})

export default PickerComponent; 