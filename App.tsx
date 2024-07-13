import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native"; //import component
//import style that I create in my folder (appgooter)
import Appfooter from "./components/Appfooter";

//import app header
import Appheader from "./components/Appheader";

export default function App(): React.JSX.Element {

    //create function that show hello
    const onCLickMe = ()=> {
      Alert.alert("HELLO React.jf!!");
    }

    //create array obj
    const userlist = [{id:123,name:'John',},{id:456,name:'Ryan',}]








    //uxui
  return (
    <View style={styles.container}>
      <Appheader title={'HEADER'} year={2018}></Appheader>
      <Appheader title={'HEADER2'}></Appheader>
      <Text>Hello ReactNative!</Text>
     
      { userlist.map(
            (data,index)=>{
              return(
                <Text key={data.id}>
                  No.{index+1}   ID.{data.id}  Name.{data.name}

                </Text>
              )
            }
          )
      }


      <Button
        title="click me"
        onPress={onCLickMe}
        color='red'
        // onPress={() => {
        //   Alert.alert("React native is fun!!");
        // }}
      />
      <Appfooter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
