import { StyleSheet, Text, View, ScrollView, SafeAreaView, Platform, Pressable, Image, FlatList } from 'react-native'
import React, {useState} from 'react'
import data from '../../data.json'
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Card from '../components/Card';




const BuyScreen = ({navigation}) => {

    const [columns, setColumns] = useState(2);

    const truncate = (text, { length }) => {
        if (text.length > length) {
           return text.substring(0, length) + '...';
        }
        return text;
       }
    

  return (
   <SafeAreaView style={{paddingTop: Platform.OS === 'android' ? 40 : 0, flex: 1, backgroundColor: 'white'}}>
            
            <View style={styles.headerBtn}>
               <AntDesign name="arrowleft" size={24} color="black"onPress={navigation.goBack}/>
            </View>

           <Text style={{color: '#1f3e72', fontSize: 19, fontWeight:700, paddingLeft: 35}}> Residencies to Buy</Text>

           <FlatList 
           
             keyExtractor={(_,key) => key.toString()}
             contentContainerStyle={{paddingLeft: 20, paddingVertical: 20}}
             showsHorizontalScrollIndicator={false}
             numColumns={columns}
             data={data}
            //  data={data.slice(0, 8)} // if we want to limit the number of houses displayed
             renderItem={({item}) => <Card house={item} navigation={navigation} />} 
             style={{ marginTop:0}}
             />

          <Text style={{height: 1, borderColor: '#d0d0d0', borderWidth: 2, marginTop:25}} />
        
   </SafeAreaView>
  )
}

export default BuyScreen

const styles = StyleSheet.create({
    facilitiesContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
      },
      facility: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
     },
     heart: {
      // position: 'absolute',
      top: 25,
      left: 130,
      zIndex: 2
     },
     headerBtn: {
      height: 50,
      width: 50,
      // backgroundColor: COLORS.white,
      color: 'blue',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -20
    },
})