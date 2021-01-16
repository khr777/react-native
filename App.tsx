import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './src/header';
import Generator from './src/generator';

class App extends Component {

  state = {
    appName: 'My First App',
    random: [23, 1445]
  }

  onAddRandomNum = () => {
    alert('add random number!!!');
  }


  render() {
    return (
      <View style={styles.mainView}>
        <Header name={this.state.appName}/> 
        <View>
          <Text 
          style={styles.mainText}
          onPress={() => alert('Hello World!!!')}
          >Hello World</Text>
        </View>
        <Generator add={this.onAddRandomNum}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 50,
    justifyContent: 'center',
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
