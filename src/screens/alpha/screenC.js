import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class screenC extends React.Component {

  static navigationOptions = {
    title: 'Screen C',
    //header:null
  };

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>        
        <Text style={styles.text}>screen C</Text>
        <View style={styles.buttonStyle} >          
          <Button             
            title="screen a"
            type="outline"            
            color="darkgreen"            
            onPress={() => this.props.navigation.navigate('ScreenA')}            
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
