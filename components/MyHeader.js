import React from 'react';
import {Header,Icon} from 'react-native-elements';

const MyHeader = props => {
 return(
    <Header 
     leftComponent = {<Icon name = 'bars' type = 'font-awesome' color = "gray" onPress = {() => props.navigation.toggleDrawer()}/>}
     backgroundColor = 'orange'
     centerComponent = {{text:props.title,style :{color:'#fff',fontWeight:'bold',fontSize:18} }}
    />
 )
}

export default MyHeader;