import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={
        styles.mainView
      }>
        <View>
          <Text>Hello World</Text>
        </View>
        <View>
          <Text>Hello World</Text>
        </View>
        <View>
          <Text>Hello World</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'green',
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App;
