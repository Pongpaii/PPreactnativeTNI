import { StyleSheet, Text, View ,Button,Alert} from 'react-native'
import React from 'react'

const Content = () => {
  const name  ='Pongpai';
  const onCLickMe = ()=> {
    Alert.alert("HELLO ",name );
    
    
  }
  return (


    <View style={styles.content}>
      <Text style={styles.text}>PONGPAI SODSONG</Text>
      <Button
        title="click me"
        onPress={onCLickMe}


      />
    </View>
  )
}

export default Content


const styles = StyleSheet.create({
    content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    text: {
    fontSize: 18,
    marginBottom: 20,
    },
    });