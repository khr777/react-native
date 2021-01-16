import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.subView}>
          <Text style={styles.mainText}>Hello World</Text>
        </View>
        <View style={styles.subView}>
          <Text>Hello World</Text>
        </View>
        <View style={styles.anotherSubView}>
          <Text style={styles.mainText}>Hello World</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'green',
    flex: 1,
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subView: {
    backgroundColor: 'yellow',
    flex: 1,
    marginBottom: 10,
    width: '50%'
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
    fontWeight: 'bold',
    fontSize: 50,
    padding: 20
  }
})

export default App;
