import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import axios from "axios";

const AxiosPostData = () => {
  //create state
  const [formData, setFormdata] = useState({ name: "", email: "" }); //วิธีเขียนอีกแบบ arrayobj = name and email
  //create function  เพื่อแทนที่ข้อมูลใหม่  key ชื่อตัวแปร value คืออข้อมูลที่จะเปลี่ยน    ...prevStategเข้าถึงข้อมูลทั้งหมดที่กำหนัดไว้   ///[key]:value ค่าที่เราจะเปลี่ยน
  const handleInputChange = (key: string, value: string) => {
    setFormdata((prevState) => ({ ...prevState, [key]: value }));
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/users',formData); //จาก from data ไป ลิ้งนี้
      Alert.alert(
        "User created",
        `ID : ${response.data.id}  
            Name : ${response.data.name} 
            Email : ${response.data.email} 
            `
      )
    } catch {
      Alert.alert("Error", "Failed to create user");
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={formData.name}
        onChangeText={(value) => handleInputChange("name", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={formData.email}
        onChangeText={(value) => handleInputChange("email", value)}
      />
      <Button title="Create User" onPress={handleSubmit} />
    </View>
  );
};

export default AxiosPostData;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    marginTop: 50,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});
