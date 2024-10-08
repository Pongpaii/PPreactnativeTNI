import { StyleSheet, Text, View } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "darkseagreen",
  },
  profileImg: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginRight: 20, //space btw pfp and text,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%", //expand width
    padding: 20,
    borderRadius: 10,
    backgroundColor: "lightyellow",
    elevation: 5,
    marginTop: 50,
  },  loginbigContainer: {
    
    alignItems: "center",
    width: "100%", //expand width
    padding: 20,
    borderRadius: 10,
    backgroundColor: "lightyellow",
    elevation: 5,
    marginTop: 50,
  },
  LoginContainer: {
  
      justifyContent: "center",
      padding: 20,
      marginTop: 50,
      backgroundColor: '#ffffff', // ต้งัค่าสีพ้ืนหลงัเป็นสีขาว
      borderRadius: 10, // เพิ่มความมนให้กบัขอบคอนเทนเนอร์
      elevation: 3, // เพิ่มเงาให้กบัคอนเทนเนอร์(เฉพาะ Android)
      width: '100%', // ต้งัความกวา้งของ container ให้เต็มหน้าจอ
    
      
  },
  profileName: {
    fontWeight: "bold",
    fontSize: 17,
    color: "brown",
    textShadowColor: "pink",
    textShadowOffset: { height: 2, width: 2 },
    textShadowRadius: 3,
  },
});
const stylesPractice = StyleSheet.create({
  footer: {
    backgroundColor: "#f8f8f8",
    padding: 60,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    left: 0,
    right: 0,
    bottom: 0,
  },
  footerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },

header: {
    backgroundColor: "#AEC6CF",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop:100
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitleText: {
    fontSize: 16,
    color: "#fff",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    //justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 16,
    paddingHorizontal: 9,
    width: '80%',
    borderRadius: 8,
    marginLeft:50,
    marginVertical :300
    
    }
    ,  logininput: {
  height: 45, // เพิ่มความสูงของ TextInput
borderColor: "gray", // เปลี่ยนสีขอบเป็นสีเทาอ่อน
borderWidth: 1,
borderRadius: 8, // เพิ่มความมนให้กบัขอบ TextInput
marginBottom: 15, // เพิ่มระยะห่างดา้นล่างระหวา่ ง TextInput
paddingHorizontal: 15, // เพิ่มระยะห่างภายใน TextInput
backgroundColor: "#f9f9f9", // ต้งัค่าสีพ้ืนหลงัของ TextInput

      }
      
});

export { styles, stylesPractice }; //dont forget to export
