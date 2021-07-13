import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert,FlatList} from 'react-native';
import MyHeader from '../components/MyHeader'
import {ListItem} from 'react-native-elements';

export default class ExchangeScreen extends React.Component {
    constructor() {
      super();
      this.state = {
        requestedExchangesList : []  
      }
      this.requestRef = null;
    }

    getRequestedExchangesList = () => {
     this.requestRef = db.collection('requested_exchanges')
     .onSnapshot((snapshot) => {
      var requestedExchangesList = snapshot.docs.map(document => document.data());
       this.setState({
         requestedExchangesList:requestedExchangesList
       });
     });
    }

    componentDidMount = () => {
      this.getRequestedExchangesList();
    }

    componentWillUnmount = () => {
      this.requestRef();
    }

   keyExtractor = (index) => index.toString();

   renderItem = ( {item,i} ) => {
    return(
     <ListItem
      key = {i}
      title = {item.ItemName}
      subtitle = {item.ItemDescription}
      titleStyle = {{color:'black',fontWeight:'bold',fontSize:17}}
      subtitleStyle = {{color:'black', fontSize:13}}
      rightElement = {
       <TouchableOpacity style = {styles.viewButton}>
           <Text style = {{color:'#fff'}}> View Request </Text>
       </TouchableOpacity>
      }
     />
    )
   }

    render() {
        return(
            <View style = {styles.container}>
                <MyHeader title = "Home" navigation = {this.props.navigation}/>
                <View style = {{flex:1}}>
                 {
                    this.state.requestedExchangesList.length === 0
                     ?(
                       <View style = {styles.subContainer}> 
                        <Text> List of all Reqested Books </Text>
                       </View>
                     )
                     :(
                       <FlatList 
                         keyExtractor = {this.keyExtractor}
                         data = {this.state.requestedExchangesList}
                         renderItem = {this.renderItem}
                       />   
                     )
                 }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
subContainer: {
 flex:1,
 fontSize: 20,
 justifyContent:'center',
 alignItems:'center' 
},
container:{
 alignSelf:'center', 
 justifyContent:'center',
 flex:1,
},
 viewButton:{
  height:25,
  width:70,
  backgroundColor:'orange',
 },
})