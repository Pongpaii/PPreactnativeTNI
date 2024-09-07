
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


const MaterialHeaderButton = (props: any) => (
    // the `props` here come from <Item ... />
    // you may access them and pass something else to `HeaderButton` if you like
    <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
  );


const ProductScreen = () => {
    const navigation = useNavigation<any>();
    useLayoutEffect(() => {
        navigation.setOptions({
          title: "หน้าหลัก",
          headerTitle: () => <AppLogo></AppLogo>,
          headerTitleAlign: "center",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
              <Item title="menu" iconName="menu" onPress={()=>{navigation.openDrawer();}}/>
            </HeaderButtons>
            
          ),
   
    
    
        });
      }, [navigation]);
  return (
    <View>


        
    </View>
  )
}

export default ProductScreen