import { View, Text } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'
import Login from './components/Login'

const App = () => {
  return (
    <View>
      <ProfileScreen/>  
      <Login/>
    </View>
  )
}

export default App