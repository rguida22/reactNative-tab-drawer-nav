import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class screen2 extends React.Component {

  static navigationOptions = {
    title: 'Screen 2',
  };

  render() {
    return (
      <View style={styles.container}>        
        <Text style={styles.text}>screen 2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  }
});
