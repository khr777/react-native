import React, {Component} from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numList';

class App extends Component<any, any> {


  state = {
    appName: 'My First App',
    random: [23, 11]
  }

  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random()*100)+1;
    
    this.setState((prevState: { random: any; }) => {
      return {
        random:[...prevState.random, randomNum]
        
      }
    })
  }

  onNumDelete = (position: number) => {
    const newArray = this.state.random.filter((num, index) => {
      return position != index;
    })
      this.setState({
        random: newArray
      })
   
  }

  


  render() {
    return (
      <View style={styles.mainView}>
        <Header name={this.state.appName}/> 
        <View>
          <Text 
          style={styles.mainText}
          onPress={() => Alert.alert('Hello World!!!')}
          >Hello World</Text>
        </View>
        <Generator add={this.onAddRandomNum}/>

        <NumList 
        num={this.state.random}
        delete={this.onNumDelete}
        />
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
    padding: 20
  }
})

export default App;
