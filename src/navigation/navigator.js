import React from 'react';
import { Dimensions, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { 
    createSwitchNavigator, 
    createDrawerNavigator,
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer    
} from 'react-navigation';

import ScreenA from 'app/src/screens/alpha/screenA';
import ScreenB from 'app/src/screens/alpha/screenB';
import ScreenC from 'app/src/screens/alpha/screenC';
import ScreenD from 'app/src/screens/alpha/screenD';
import Screen1 from 'app/src/screens/numeric/screen1';
import Screen2 from 'app/src/screens/numeric/screen2';
import Screen3 from 'app/src/screens/numeric/screen3';
import ScreenProfile from 'app/src/screens/profile/screenProfile';
import ScreenLinks from 'app/src/screens/links/screenLinks';
import LoginScreen from 'app/src/screens/loginScreen';
import ScreenSettings from 'app/src/screens/screenSettings';

import MenuDrawer from 'app/src/components/MenuDrawer';
//import tabConfig from 'app/src/navigation/config/tabConfig';

// main
export default class Navigator extends React.Component {
  
    render() {
      return <AppNavigator />;
    }
}

const DrawerConfig = {
  drawerWidth: (Dimensions.get('window').width)*0.83,    
  contentComponent: ({ navigation }) => {
      return(<MenuDrawer navigation={navigation} />)
  }
}

// stack navigation
const AlphaStack = createStackNavigator({
    ScreenA: ScreenA,
    ScreenB: ScreenB,
    ScreenC: ScreenC,
    ScreenD: ScreenD,
},
{
  initialRouteName: 'ScreenA',
    
  defaultNavigationOptions: ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: '#006400',        
      },      
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center', 
        flex: 1,
      },
      paddingLeft: 10,
      paddingRight: 10,      
      headerLeft: (
        <View style={{marginLeft: 10}}>
          <Icon
            type='Ionicons'          
            onPress={() => navigation.openDrawer()}
            name="menu"
            size={30} 
            color='white'
          />
        </View>
      ),      
      headerRight: (
        <View style={{marginRight: 10}}>
          <Icon
            type='Ionicons'            
            name="person"
            size={30} 
            color='white'
          />
        </View>
      ),
    };
  }  
});

// stack navigation
const NumStack = createStackNavigator({
    Screen1: Screen1,
    Screen2: Screen2,
    Screen3: Screen3,
},
{
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
        },
    },
});

// tab navigation
const TabNavigator = createBottomTabNavigator({    
    Alpha: {
        screen: AlphaStack,
        tabBarLabel:"Alpha",                  
        navigationOptions: {  
          tabBarIcon: ({ tintColor }) => (<Icon name='home' type='Ionicons' color='white' size={30} />)
        },    
    },    
    Num: {
        screen: NumStack,
        tabBarLabel:"Num",
    },
    Profile: {
        screen:  ScreenProfile,
        tabBarLabel:"Profile",
    },    
    Links: {
        screen:  ScreenLinks,
        tabBarLabel:"Links",
    },    
},
{    
  initialRouteName: 'Alpha',
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      //const iconName = 'heartbeat';
      return (
        <Icon type={'font-awesome'} name={'heartbeat'} color={'white'} size={25}  />
      );
    },
  }),
  tabBarOptions: {      
    showIcon: true,
    activeTintColor: 'white',
    activeBackgroundColor: 'darkgreen',
    inactiveTintColor: 'darkgreen',
    inactiveBackgroundColor: 'darkgray',          
    labelStyle:{
      fontSize:16,
      paddingBottom:5,      
    },
    style: {      
      height: 70,
    },
  },  
});

// drawer navigation
const DrawerNavigator = createDrawerNavigator(
  {
    TabNav: {
      screen: TabNavigator
    },  
  },
  DrawerConfig
);

// switch navigation
const AppSwitchNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: DrawerNavigator }
});

const AppNavigator = createAppContainer(DrawerNavigator);  
