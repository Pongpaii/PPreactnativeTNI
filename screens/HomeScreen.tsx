
import { View, Text, Button, StyleSheet ,Alert} from "react-native";
import React, { useLayoutEffect } from "react";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import AppLogo from "../components/AppLogo";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";

const pressedal = () => {
  Alert.alert("Open Menu",`Hello REACT NATIVE `);
};

const MaterialHeaderButton = (props: any) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
);

//navigation  and HEADER BAR 07092024
const HomeScreen = ({}): React.JSX.Element => {
  const navigation = useNavigation<any>();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "หน้าหลัก",
      headerTitle: () => <AppLogo></AppLogo>,
      headerTitleAlign: "center",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item title="menu" iconName="menu" onPress={pressedal}/>
        </HeaderButtons>
        
      ),
      headerRight:()=>(
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
        <Item title="logout" iconName="logout" onPress={()=>{  Alert.alert("Bye",`LOG OUT2! `);}}/>
      </HeaderButtons>
      )


    });
  }, [navigation]);

  //send information to about screen
  const gotoAbout = () => {
    navigation.navigate("About", {
      companyName: "Thai-Nichi Institude of Technology",
      companyId: 100,
    });
  };

  return (
    <View style={styles.container}>
      <MaterialIcon name="home" size={40} color={"pink"} />
      <Text style={styles.header}>HomeScreen</Text>
      <Button title="About Us" onPress={gotoAbout} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  postContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  postText: {
    margin: 10,
    fontSize: 16,
  },
  postContent: {
    color: "blue", // เปลี่ยนสีข้อความที่ถูกส่งกลับมา​

    fontWeight: "bold",
  },
});
