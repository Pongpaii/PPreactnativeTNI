import { View, Text,ActivityIndicator,StyleSheet } from 'react-native'
import React from 'react'
import {useNavigation,useRoute} from '@react-navigation/native'
import {findProductbyId} from '../services/product-service'
import { useFocusEffect } from '@react-navigation/native'
import { useCallback } from 'react'
import { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { ListItem,Avatar } from '@rneui/base'
import { ListRenderItem } from 'react-native'
import { Tile } from '@rneui/themed';
import { Dimensions } from 'react-native'


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
    <Tile
                imageSrc={{
                    uri: 'https://pbs.twimg.com/amplify_video_thumb/1833798294000345089/img/SeKjyfJHHcWwboaZ.jpg',
                    cache: 'force-cache',
                }}
                title={item.ch_title}
                titleStyle={styles.titleStyle}
                containerStyle={styles.tileContainer}
                caption={item.ch_dateadd}
                captionStyle={styles.captionStyle}
                featured
                activeOpacity={0.9}
                width={Dimensions.get('screen').width-20} // ลบขอบเล็กน้อยทั้งสองข้าง
            />
      </>
    );
  };
  return (
    <View>
       <View>
       <FlatList contentContainerStyle={styles.listContent}
        data={detail}
        keyExtractor={(item: any) => item.ch_id.toString()}
        renderItem={renderItem}
      />
    </View>
    </View>
  )
}

export default DetailScreen
const styles = StyleSheet.create({
  container: {
  backgroundColor: '#f0f0f0', // สีพื้นหลัง
  },
  listContent: {
  paddingHorizontal: 10, // การเว้นวรรคขอบซ้ายและขวาเท่ากัน
  },
  titleStyle: {
  fontSize: 20,
  fontWeight: 'bold',
  color: 'brown', // สีขาวส าหรับชื่อ
  },
  tileContainer: {
  borderRadius: 10, //ก าหนดให้มุมของ container มีความโค้งมน
  overflow: 'hidden', //ก าหนดให้เนื้อหาที่อาจล้นออกจากขอบของ container ไม่แสดงผล
  marginBottom: 10, //ก าหนดระยะห่างจากขอบล่างของ container ไปยัง element ต่อไปที่อยู่ด้านล่าง
  elevation: 5, // เงาส าหรับ Android
  shadowOffset: { width: 0, height: 2 }, //ก าหนดต าแหน่งของเงาที่แสดงผล
  shadowOpacity: 0.25, //ก าหนดระดับความโปร่งแสงของเงา
  shadowRadius: 3.84, //ก าหนดรัศมีของการกระจายตัวของเงา
  opacity: 0.5, // ความโปร่งใสของภาพ , ค่าน้อยจะโปร่งใสมาก
  },
  captionStyle: {
  fontSize: 14,
  color: 'blue' // สีขาวส าหรับวันที่
  },
  });