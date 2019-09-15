import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Button
        title="Login"
        onPress={() => this.props.navigation.navigate('Main')}
      />
      <Button title="Sign Up" onPress={() => alert('button pressed')} />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkgreen',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  text: {
    fontSize: 60,
  }
});

