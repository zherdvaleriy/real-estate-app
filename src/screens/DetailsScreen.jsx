import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'
import { AntDesign } from '@expo/vector-icons';

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';





const DetailsScreen = ({navigation, route}) => {
   const {house }= route.params

   const truncate = (text, { length }) => {
    if (text.length > length) {
       return text.substring(0, length) + '...';
    }
    return text;
   }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.backgroundImageContainer}>
        <ImageBackground style={styles.backgroundImage} source={{uri:house.image}} >
          <View style={styles.header}>

          <View style={styles.headerBtn}>
             <AntDesign name="arrowleft" size={24} color="black"onPress={navigation.goBack}/>
           </View>

            <View style={styles.headerBtn}>
              <AntDesign name="heart" size={24} color="blue" />
            </View>

          </View>
        </ImageBackground>

       </View>
                <View style={{ paddingHorizontal: 20}} >
                      <Text style={{textAlign: 'left',color: '#1f3e72', padding:5,fontSize:19, fontWeight:700}} >{house.title} </Text>
                        <View style={{flexDirection: 'row', paddingHorizontal:5}}>
                            <Text style={{color: 'orange'}}>$</Text>
                            <Text style={{textAlign: 'left', color:'gray', fontWeight:  700}} > {house.price} </Text>
                        </View>
    
    
                        <View style={styles.facilitiesContainer}>
                            <View style={styles.facility}>
                            <FontAwesome name="bath" size={18} color="#1f3e72" />
                              <Text>{house?.facilities?.bathrooms}</Text>
                            </View>
                            <View style={styles.facility}>
                            <FontAwesome name="bed" size={18} color="#1f3e72" />
                              <Text>{house?.facilities?.bedrooms}</Text>
                            </View>
                            <View style={styles.facility}>
                             <MaterialIcons name="garage" size={18} color="#1f3e72" />
                              <Text>{house?.facilities?.parkings}</Text>
                            </View>
                          </View>
    
                        <Text style={{marginLeft:5, marginTop: 10, fontSize:15}}>{house.description}</Text>
    
                   </View>

                <View style={{flexDirection: 'row',alignItems: 'center', gap: 20, marginLeft: 22, marginTop:25}} >
                  <FontAwesome6 name="location-dot" size={24} color="black" />
                
                  <Text style={{color: COLORS.grey}}>{house.address} {house.city} {house.country} </Text>
                   
                </View>   

              <Pressable>
                  <View style={styles.bookNowBtn}>
                    <Text style={{color: COLORS.white}}>Book now</Text>
                  </View>
              </Pressable>

    </SafeAreaView>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  backgroundImageContainer: {
    elevation: 20,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    height: 320,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    borderRadius: 5,
    overflow: 'hidden',
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
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
  facilitiesContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    gap:15,
    paddingHorizontal: 5,
    marginTop: 10,
 },
 facility: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
 },
 title: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
 },
 description: {
    fontSize: 14,
    color: 'gray',
    marginTop: 15,
 },
 heart: {
   // position: 'absolute',
   top: 25,
   left: 130,
   zIndex: 2
  },
  bookNowBtn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1f3e72',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginHorizontal:20,
    marginTop:40
  }
})