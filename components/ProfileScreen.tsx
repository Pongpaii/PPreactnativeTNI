import { View, Text, Image, StyleSheet } from "react-native";
import {styles}from '../styles/styles'
import React from "react";
// : React.JSX.Element = force into ts.

const ProfileScreen = (): React.JSX.Element => {
  const profileImage = require("../assets/pfp.jpeg"); //create profileimage

  //in view <Image source={require('../assets/pfp.jpeg')}></Image> but not for dev

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImg} source={profileImage} />
        <Text style={styles.profileName}>Pongpai Sodsong</Text>
      </View>
    </View>
  );
};
//https://reactnative.dev/docs/colors#named-colors
export default ProfileScreen;
