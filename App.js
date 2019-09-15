import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// navigation
import RootStack from 'app/src/navigation/navigator';

//main
export default class App extends Component {
  render() {
    return <RootStack />;
  }
}