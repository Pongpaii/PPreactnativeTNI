import AsyncStorage from "@react-native-async-storage/async-storage";
import { http } from "./http-service";
import Toast from "react-native-toast-message";

export async function login(email: string, password: string) {
  const response = await http.post("https://api.codingthailand.com/api/login", {
    email: email,
    password: password,
  });

  //save token to storage
  await AsyncStorage.setItem("@token", JSON.stringify(response.data));
  return response;
}

//functions 2 Logout

export async function logout() {
  await AsyncStorage.removeItem("@token");
}

export async function getpf() {
  const tokenString = await AsyncStorage.getItem("@token");
  //if dont have token
  if (!tokenString) {
    return null;
  }
  //if have
  const token = JSON.parse(tokenString);
  const response = await http.get(
    "https://api.codingthailand.com/api/profile",
    {
      headers: {'Authorization': "Bearer " + token.access_token }
    }
  );
  return response;
}
