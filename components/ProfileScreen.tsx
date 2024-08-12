import { View, Text, Image, Button } from "react-native";
import { styles } from "../styles/styles";
import React, { useState } from "react";
import Login from "./Login";
import Content from "./Content";
// : React.JSX.Element = force into ts.

const ProfileScreen = (): React.JSX.Element => {
  const profileImage = require("../assets/pfp.jpeg"); //create profileimage
  const profileImage2 = require("../assets/pfpnew.jpeg"); //create profileimage

  //set use state
const [name,setName] = useState('Pongpai Sodsong');
const [img,setImg] = useState(profileImage);

//create new arrow function to changename and img
const handleChangename =()=>{
    setName(name=="Pongpai Sodsong"?"No Name":"Pongpai Sodsong")
}
const handleChangeImg = () =>{
    setImg(img== profileImage?profileImage2:profileImage)
}

  //in view <Image source={require('../assets/pfp.jpeg')}></Image> but not for dev

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        
        <Image style={styles.profileImg} source={img} />
        <View >

        <Text style={styles.profileName}>{name}</Text>

        <Button title="Change Name" onPress={(handleChangename)}></Button>
        <Text style={styles.profileName}></Text>
        <Button title="Change Img" onPress={(handleChangeImg)}></Button>
        </View>

      </View>
      <Login/>
   
    </View>
    
  );
};
//https://reactnative.dev/docs/colors#named-colors
export default ProfileScreen;
