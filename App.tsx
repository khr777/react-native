import React, {Component} from 'react';
import {View, Text, Alert, Button, StyleSheet, ScrollView, TextInput} from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numList';
import Input from './src/input';

class App extends Component<any, any> {
  state =
  {
      myTextInput: '',
      alphabet:  ['a', 'b', 'c', 'd']
  }

  onChangeInput = (event: string) =>  {
      this.setState({myTextInput: event});
  }

  onAddTextInput =() => {
    this.setState((prevState: any) =>{
        return {
            myTextInput: '',
            alphabet: [...prevState.alphabet, prevState.myTextInput]
        }
    })    
  }

  render() {
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
        <Button title="Add Text Input" onPress={this.onAddTextInput}/>
        <ScrollView style={{width: '100%'}}>
            {
              this.state.alphabet.map((items: string, index: number) => (
                <Text 
                style={styles.mainText}
                key={index}>
                  {items}
                </Text>
              )) 
            }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 50,
    //justifyContent: 'center',
    alignItems: 'center'
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10
  }, 
  anotherSubView: {
    backgroundColor: 'yellow',
    flex: 2,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    color: 'red',
    fontWeight: 'normal',
    fontSize: 20,
    padding: 20,
    margin: 20,
    backgroundColor: 'pink'
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

export default App;
