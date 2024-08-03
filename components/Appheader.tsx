import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { stylesPractice } from '../styles/styles'


interface AppHeaderProps {
  fullname: string;
  message: string;}
const Appheader = ({fullname,message}:AppHeaderProps) : React.JSX.Element  => {
  return (
    <View style={stylesPractice.header}>
      <Text style={stylesPractice.headerText}>{fullname} 
      </Text>
      <Text style={stylesPractice.subtitleText}>{message}</Text>
      
    </View>
  )
}



export default Appheader

