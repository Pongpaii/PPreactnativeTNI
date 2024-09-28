import { View} from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header, ListItem,Icon } from "@rneui/base";
import { useAppDispatch, useAppSelector } from "../redux-toolkit/hooks";
import { selectAuthstate, setislogin } from "../auth/auth-slice";

import { logout } from "../services/Auth-service";
import { Text } from "@rneui/base";
const MenuScreen = ({ navigation }: any): React.JSX.Element => {

  const dispatch = useAppDispatch();

  const {profile} =useAppSelector(selectAuthstate);
  return (
    <View>
      <Header
        barStyle="default"
        centerComponent={{
          text: profile?"Welcome , "+ profile.name:"",
          style: { color: "#fff" },
        }}
        containerStyle={{ width: "100%", height: 200 }}
        placement="center"
      />
      <>
        <ListItem  
        bottomDivider 
        onPress={()=>{navigation.navigate('Home')}}
        
        >
          <Icon name="home" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>หน้าหลัก</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem    bottomDivider 
        onPress={()=>{navigation.navigate('ProductStack')}}
        >
          <Icon
            name="star"
            type="material-community"
            color="grey"
          />
          <ListItem.Content>
            <ListItem.Title>สินค้า</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </>
    </View>
  );
};

export default MenuScreen;
