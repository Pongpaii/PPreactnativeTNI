import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  ListRenderItem,
} from "react-native";
import React, { useCallback, useLayoutEffect } from "react";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AppLogo from "../components/AppLogo";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import { findAllProduct } from "../services/product-service";
import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { ListItem, Avatar } from "@rneui/themed";
import { ActivityIndicator } from "react-native";
import { Badge } from "@rneui/base";

const MaterialHeaderButton = (props: any) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
);

const ProductScreen = (): React.JSX.Element => {
  //1 create usesate  (how to show log in text from backend)
  const [Prod, setProd] = useState<any[]>([]);
  //set loading
  const [loading, setLoading] = useState<boolean>(false);

  const navigation = useNavigation<any>();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "หน้าหลัก",
      headerTitle: () => <AppLogo></AppLogo>,
      headerTitleAlign: "center",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  //create function cgetprod
  const getproduct = async () => {
    try {
      setLoading(true); //call function loading usestate
      const response = await findAllProduct();
      setProd(response.data.data); //2. setstate the log data
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false)
    }
  };
  useFocusEffect(
    useCallback(() => {
      getproduct();
    }, [])
  );

    //ถ้าตัวสoadingทำงานให้้ return
    if (loading) {
      return (
        <View >
          <ActivityIndicator size="large" color="Green" />
        </View>
      );
    }

  const renderItem: ListRenderItem<any> = ({ item }) => {
    return (
      <View>
        <ListItem bottomDivider onPress={()=>{
          navigation.navigate("Details",{id: item.id,title:item.title})
        }}>
          <Avatar source={{ uri: item.picture }} size={50} rounded />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            <ListItem.Subtitle>{item.detail}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
          <Badge value ={item.view} status="success"/>
        </ListItem>
      </View>
    );
  };

  //3.show test by use state <Text>{JSON.stringify(Prod)}</Text>

  //using flat list to set ui from api call them from property
  //adding loading by 1.create use state 2.add if loading after use Focus VX 3.in try add setloading true 4.add finally 
  return (
    <View>
      <FlatList
        data={Prod}
        renderItem={renderItem}
        onRefresh={async () => {
          await getproduct();
        }}
        refreshing={loading}
      />
    </View>
  );
};

export default ProductScreen;