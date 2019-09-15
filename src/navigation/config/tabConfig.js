import React, { Component } from 'react';

const config = { 
  tabBarOptions:{  
    initialRouteName: 'Screen1',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#006400',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center', 
        flex: 1,
      }
    }
  }
};
  
export default class tabConfig extends React.Component {
  
  render() {
    return <config />;
  }
}
