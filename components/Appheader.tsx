import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type AppHeaderProps = {name:String;}
const Appheader = ({name}:AppHeaderProps) : React.JSX.Element  => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{name} 
      </Text>
      <Text style={styles.subtitleText}> Message from App.tsx</Text>
      
    </View>
  )
}



export default Appheader

const styles = StyleSheet.create({
  header: {
  backgroundColor: '#AEC6CF',
  padding: 20,
  alignItems: 'center',
  justifyContent: 'center',
  },
  headerText: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#fff',
  },
  subtitleText: {
  fontSize: 16,
  color: '#fff',
  },
  });
  