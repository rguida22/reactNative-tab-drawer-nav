import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class screen1 extends React.Component {

  static navigationOptions = {
    title: 'Screen 1',
  };

  render() {
    return (
      <View style={styles.container}>        
        <Text style={styles.text}>screen 1</Text>
        <View style={styles.buttonStyle} >          
          
          <Button             
            title="screen 1"
            type="outline"            
            color="darkgreen"            
            onPress={() => this.props.navigation.navigate('Screen1')}            
          ></Button>

          <Button             
            title="screen 2"
            type="outline"            
            color="darkgreen"            
            onPress={() => this.props.navigation.navigate('Screen2')}            
          ></Button>

          <Button             
            title="screen 3"
            type="outline"            
            color="darkgreen"            
            onPress={() => this.props.navigation.navigate('Screen3')}            
          ></Button>

          <Button             
            title="Go To Profiles"
            type="outline"            
            color="darkgreen"            
            onPress={() => this.props.navigation.navigate('Profile')}            
          ></Button>
        </View>
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
  buttonStyle: {
    marginTop: 30,
    padding: 20,            
    fontSize: 30,
    color: 'white',    
  }  
});