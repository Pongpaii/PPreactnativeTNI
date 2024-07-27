import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      padding: 20,
      backgroundColor: "darkseagreen",
    },
    profileImg:{
      borderRadius:50,
      width:100,
      height:100,
      marginRight:20 //space btw pfp and text,
    },
    profileContainer:{
      flexDirection:'row',
      alignItems:'center',
      width:'100%',//expand width 
      padding:20,
      borderRadius:10,
      backgroundColor:'lightyellow',
      elevation:5,
      marginTop:50
    },
    profileName:{
      fontWeight:'bold',
      fontSize:17,
      color:'brown',
      textShadowColor:'pink',
      textShadowOffset:{height:2 ,width:2},
      textShadowRadius:3,
    }
    
  });
  

export {styles}

