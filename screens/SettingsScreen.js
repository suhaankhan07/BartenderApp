import React from 'react';
import {TouchableOpacity, Alert,Text, TextInput, View, StyleSheet} from 'react-native'
import firebase from 'firebase';
import db from '../config'

export default class Settings extends React.Component {
    constructor () {
     super();
     this.state = {
      emailId: "",
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      docId: "",
     }
    }

    getData = () => {
      var email = firebase.auth().currentUser.email;
      db.collection("users").where("Email-Address", '==', email).get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          var data = doc.data();
           this.setState({
             emailId: data.Email-Address,
             firstName: data.FirstName,
             lastName: data.LastName,
             address: data.Address,
             phoneNumber: data.Contact,
             docId : doc.id,
           });
        });
      });

    }

    updateData = () => {
     var collection = db.collection('users').doc(this.state.docId).get();
     collection.update({
       "FirstName": this.state.firstName,
       "LastName": this.state.lastName,
       "Address": this.state.address,
       "Contact": this.state.phoneNumber
     });
     Alert.alert("Profile Update Sucsessfully", "The profile has been sucsessfully updated");
    }

 componentDidMount = () => {
  this.getData();
 }

    render() {
     return(
        <View> 
          <TextInput 
           placeholder = "First Name"
           placeholderTextColor = "red"
           onChangeText = {(text) => {
             this.setState({
               firstName: text
             });
           }}
           value = {this.state.firstName}
          />

          <TextInput 
           placeholder = "Last Name"
           placeholderTextColor = "red"
           onChangeText = {(text) => {
             this.setState({
               lastName: text
             });
           }}
           value = {this.state.lastName}
          />
          
          <TextInput 
           placeholder = "Address"
           placeholderTextColor = "red"
           onChangeText = {(text) => {
             this.setState({
               address: text
             });
           }}
           value = {this.state.address}
          />
          
          <TextInput 
           placeholder = "Contact"
           placeholderTextColor = "red"
           onChangeText = {(text) => {
             this.setState({
               phoneNumber: text
             });
           }}
           value = {this.state.phoneNumber}
          />
         <View style = {{flex:1, alignSelf:'center',justifyContent: "center"}}>
           <TouchableOpacity style = {styles.saveButton} onPress = {() => {
             this.updateData();
           }}>
             <Text style = {styles.saveText}> Save </Text>
           </TouchableOpacity>
         </View>
        </View>
     )
    }
}

const styles = StyleSheet.create({
 
})