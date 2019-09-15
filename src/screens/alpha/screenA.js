import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

export default class screenA extends React.Component {

  static navigationOptions = {
    //header:null,
    drawerLabel: 'Screen A',
    title: 'Screen A',
    //tabBarIcon: () => (<Icon name='home' type='Ionicons' color='white' size={30} />),    
  };

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>        
        <Text style={styles.text}>screen A</Text>
        
        <View style={styles.buttonStyle} >                              
          <Button             
            title="screen a"
            type="outline"            
            color="darkgreen"            
            onPress={() => this.props.navigation.push('ScreenA')}            
          ></Button>

          <Button             
            title="screen b"
            type="outline"            
            color="darkgreen"            
            onPress={() => this.props.navigation.navigate('ScreenB')}            
          ></Button>

          <Button             
            title="screen c"
            type="outline"            
            color="darkgreen"            
            onPress={() => this.props.navigation.navigate('ScreenC')}            
          ></Button>

          <Button             
            title="screen d"
            type="outline"            
            color="darkgreen"            
            onPress={() => this.props.navigation.navigate('ScreenD')}            
          ></Button>
        </View>

        <TouchableOpacity style={styles.buttonStyle} onPress={this._onPressButton}> 
           <Text>Alert</Text>
        </TouchableOpacity >
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
    marginTop: 50,
    fontSize: 30,
  },
  buttonStyle: {
    flex: 1,
    marginTop: 30,
    padding: 20,            
    fontSize: 30,
    color: 'white',    
  }
});
