import { View, Text } from 'react-native'
import React from 'react'

//create type asssign the type of title to avoid user input smth crazy
type AppHeaderProps = {title:String; year?:number;}


//parameter want title and year in return year use if condition if get year, year+543
const Appheader = ({title,year}:AppHeaderProps) : React.JSX.Element  => {
  return (
    <View>
      <Text>{title}{year && year+543}</Text>
    </View>
  )
}

export default Appheader