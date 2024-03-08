import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Dimensions, Image, Pressable } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'
import { useNavigation } from '@react-navigation/native';

const {width} = Dimensions.get('screen')

const ListOptions = () => {
    const navigation = useNavigation();

    const optionList = [
        {title: 'Buy a residency', img: require('../assets/buy.jpg'), screen: 'BuyScreen'},
        {title: 'Rent a residency', img: require('../assets/rent2.jpg'), screen: 'RentScreen'}
       ]

  return (
    <View style={styles.optionListContainer} >
        {optionList.map((option, index) => (
         <Pressable  
              key={index}
              onPress={() => navigation.navigate(option.screen)}
          >
           <View style={styles.optionCard} key={index} >
                <Image source={option.img} style={styles.optionCardImage} />
                <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold' }} >{option.title}</Text>
          </View>
        </Pressable>
       ))}
    </View>
  )
}

export default ListOptions

const styles = StyleSheet.create({
    optionListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 20
    }, 
    optionCard: {
        height: 210,
        width: 170,
        elevation: 15,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        borderRadius: 10,
        paddingTop: 10,
        paddingHorizontal: 10
    },
    optionCardImage: {
        height: 140,
        borderRadius: 2,
        width: '100%'
    },
})