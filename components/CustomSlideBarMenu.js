import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer'

import firebase from 'firebase';

export default class CustomSlideBarMenu extends React.Component {
 render() {
     return(
         <View style = {{flex:1}}>
          <View style = {{flex:0.8}}>
            <DrawerItems {...this.props}/>
          </View>     
           <View style = {{ flex:0.2, justifyContent:'flex-end', paddingBottom:30}}> 
             <TouchableOpacity style = {styles.logoutButton}
             onPress = {() => {
               this.props.navigation.navigate('WelcomeScreen')
               firebase.auth().signOut();
             }}> 
               <Text style = {styles.logoutText}> Log out </Text>
             </TouchableOpacity>  
           </View>
         </View>
     )
 }
}

const styles = StyleSheet.create({
  logoutButton:{
    height:30,
    width:'100%',
    justifyContent:'center',
    padding:10
  },
  logoutText:{
    fontSize:20,
    fontWeight:'bold' 
  }
});