import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

// HOW TO GET DATA


//define type from data structure type/interface   type is more flexible
type User = {
  id: number;
  name: string;
  email: string;
};

const AxiosGetData = (): React.JSX.Element => {
  //define state  array obj
  const [users, setUsers] = useState<User[]>(); //create user
  const [loading, setLoading] = useState<boolean>(true); //create loading
  const [error, setError] = useState<string | null>(null); //create error get null

  //create function fetch data   | get data by axious รอดึงข้อมูลให้เสร็จก่อน แล้วทำต่อ
  const fetchData = async () => {
    try {
      //เริ่มดึงข้อมูล รอจนกว่าจะดึงเสร็จ   <User[]>เช็คว่าข้อมูลที่ดึงมาตรงกับของเราไหม
      const response = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch {
      //ุถ้าเรียกไม่ได้ set error
      setError("Failed to fetch users");
    } finally {
      //หยุดการทำงาน จะได้หรือไม่ได้ต้องหมุนๆ
      setLoading(false);
    }
  };
  //render ครั้งแรก ดึงครั้งเดัยวพอ   .[]
  useEffect(() => {
    fetchData();
  }, []);

  //ถ้าตัวสoadingทำงานให้้ return
  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="gray" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={users}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.item}>{item.name}</Text>
          <Text style={styles.email}>{item.email}</Text>
        </View>//return ค่าที่เราต้องการดึงมา  ()=>() เปลี่ยนจากปีกกาเป็น () เวลาจะ return function Line 66-70
      )} keyExtractor={item=>item.id.toString()} 
    />
  );
};

export default AxiosGetData;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },

  centered: {
    justifyContent: "center",

    alignItems: "center",
  },

  errorText: {
    fontSize: 18,
    color: "red",
  },

  item: {
    backgroundColor: "#f9c2ff",

    padding: 20,

    marginVertical: 8,

    marginHorizontal: 16,

    borderRadius: 5,
  },

  name: {
    fontSize: 20,

    fontWeight: "bold",
  },

  email: {
    fontSize: 16,
  },
});
