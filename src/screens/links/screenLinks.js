import React from 'react';
import { StyleSheet, Text, View, ScrollView  } from 'react-native';
import { Icon, Container, Content, Thumbnail, Header, Left, Right, Body } from 'native-base';

export default class screenLinks extends React.Component {
  render() {
    return (
      <View style={styles.container}>        
        <Text style={styles.text}>screen Links</Text>
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
  },
});
