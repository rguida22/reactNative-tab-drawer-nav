import React from 'react';
import { View, Text, Image, ScrollView, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class MenuDrawer extends React.Component {
    
    navLink(nav, text) {
        return(
            <TouchableOpacity style={{height: 50}} onPress={() => this.props.navigation.navigate(nav)}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        );
    }
    
    render(){
        return(
            <View style={ styles.container }>               
                <ScrollView style={styles.scroller}>
                    <View style={styles.topLinks}>                    
                        <View style={styles.profile}>
                            <View style={styles.imgView}>
                                <Image style={styles.img} source={require('app/src/assets/images/profile.png')} />
                            </View>
                            <View style={styles.profileText}>
                                <Text style={styles.name}>Napoli</Text>
                            </View>
                        </View>
                    </View>          
                    <View style={styles.bottomLinks}>
                        {this.navLink('ScreenA', 'screen A')}
                        {this.navLink('ScreenB', 'screen B')}
                        {this.navLink('ScreenC', 'screen C')}
                        {this.navLink('ScreenD', 'screen D')}
                    </View>   
                </ScrollView>   
                <View style={styles.footer}>
                    <Text style={styles.description}>Menu Tutorial</Text>
                    <Text style={styles.version}>v1.0</Text>                    
                </View>                     
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
    },
    profile: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#777777',
    },    
    imgView: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
    },
    img:{
        height: 70,
        width: 70,
        borderRadius: 50,    
    },
    topLinks: {
        height: 150,
        backgroundColor: 'darkgreen',
    },
    bottomLinks: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 450,
    },
    link: {
        flex: 1,
        fontSize: 20,
        padding: 6,
        paddingLeft: 14,
        margin: 5,
        textAlign: 'left',
    },
    profileText:{
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    name: {
        fontSize: 20,
        paddingBottom: 5,
        color: 'white',
        textAlign: 'left',        
    },
    footer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: 'lightgray',
    },
    description: {
        flex: 1,
        marginLeft: 20,
        fontSize: 16,
    },
    version: {
        flex: 1,
        textAlign: 'right',
        marginRight: 20,
        color: 'gray',
    },
    scroller: {
        flex: 1,
    }
}) 
