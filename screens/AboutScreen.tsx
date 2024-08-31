import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";

const AboutScreen = ({route}:any): React.JSX.Element => {

  const {companyName,companyId} = route.params;

  return (
    <ImageBackground style={styles.bgimg} source={require('../assets/bg.png')}>
      <SafeAreaView>
        <Image
          source={require("../assets/building.png")}
          resizeMode="contain"
          style={styles.myImage}
        />

      <Text> {companyName} {companyId}</Text>

        <Image
          source={{ uri: "https://codingthailand.com/site/img/camera.png" }}
          style={styles.myImageNetwork}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  myImage: {
    width: "100%",
    height: 200,
    marginTop: 20,
  },
  myImageNetwork: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
  bgimg:{
    width :'100%',
    height:'100%'
  }


});
