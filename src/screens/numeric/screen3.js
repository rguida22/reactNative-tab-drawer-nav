import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class screen3 extends React.Component {

  static navigationOptions = {
    title: 'Screen 3',
  };

  render() {
    return (
      <View style={styles.container}>        
        <Text style={styles.text}>screen 3</Text>
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
