import { View, Text,ActivityIndicator } from 'react-native'
import React from 'react'
import {useNavigation,useRoute} from '@react-navigation/native'
import {findProductbyId} from '../services/product-service'
import { useFocusEffect } from '@react-navigation/native'
import { useCallback } from 'react'
import { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { ListItem,Avatar } from '@rneui/base'
import { ListRenderItem } from 'react-native'


const DetailScreen = ():React.JSX.Element => {

//2.create state
  const [detail,setdetial] = React.useState<any>([]); 
   //set loading
   const [loading, setLoading] = useState<boolean>(false);
  const route = useRoute<any>() ;
  const navigation = useNavigation<any>();
//use navigation 
  React.useLayoutEffect(()=>{
    navigation.setOptions({
      headerTitle:route.params.title,
    });
  },[navigation,route]);
  //create function cgetprod
  const getproductId = async () => {
    try {
      
      const response = await findProductbyId(route.params.id);
    setdetial(response.data.data); 
    } catch (error: any) {
      console.log(error.message);
    } 
  };
  useFocusEffect(
    useCallback(() => {
      getproductId();
    }, [])
  );
  const renderItem: ListRenderItem<any> = ({ item }) => {
    return (
      <>
        <ListItem.Content>
          <ListItem.Title>{item.ch_title}</ListItem.Title>
        </ListItem.Content>
      </>
    );
  };
  return (
    <View>
       <View>
       <FlatList
        data={detail}
        keyExtractor={(item: any) => item.ch_id.toString()}
        renderItem={renderItem}
      />
    </View>
    </View>
  )
}

export default DetailScreen
