import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
// // import data from '../../data.json'





const Card = React.memo(({house,navigation}) => {

    const truncate = (text, { length }) => {
       if (text.length > length) {
          return text.substring(0, length) + '...';
       }
       return text;
      }



    return (
       <View style={{flexDirection: 'row', alignItems: 'center',justifyContent: 'center', flexWrap: 'wrap', gap:30, padding: 10, paddingTop: 0}} >
    
                <Pressable 
                      onPress={() => {navigation.navigate('DetailsScreen', {house: house})}}
                      key={house._id} 
                      style={{position: 'relative'}} 
                      >
                  <AntDesign style={styles.heart} name="heart" size={18} color="blue" />
                  <Image 
                      source={{uri: house?.image}}
                      style={{width:160, height:110, resizeMode: 'cover'}}
                   />
                   <View >
                      <Text style={{textAlign: 'left',color: '#1f3e72', padding:5,fontSize:14, fontWeight:600}} >{house.title} </Text>
                        <View style={{flexDirection: 'row', paddingHorizontal:5}}>
                            <Text style={{color: 'orange'}}>$</Text>
                            <Text style={{textAlign: 'left', color:'gray', fontWeight:  700}} > {house.price} </Text>
                        </View>
                        <Text style={{marginLeft:5}}>{truncate(house.description, { length: 20 })}</Text>
    
    
                        <View style={styles.facilitiesContainer}>
                            <View style={styles.facility}>
                            <FontAwesome name="bath" size={18} color="#1f3e72" />
                              <Text>{house?.facilities?.bathrooms || 0}</Text>
                            </View>
                            <View style={styles.facility}>
                            <FontAwesome name="bed" size={18} color="#1f3e72" />
                              <Text>{house?.facilities?.bedrooms || 0}</Text>
                            </View>
                            <View style={styles.facility}>
                             <MaterialIcons name="garage" size={18} color="#1f3e72" />
                              <Text>{house?.facilities?.parkings || 0}</Text>
                            </View>
                          </View>
    
    
                   </View>
                </Pressable>
          </View>
          
        
       )
    })
    
    const styles = StyleSheet.create({
    
     image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
     },
     price: {
        fontSize: 18,
        color: 'black',
        marginTop: 10,
     },
     priceSymbol: {
        color: 'orange',
     },
     facilitiesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        marginTop: 5,
     },
     heart: {
       // position: 'absolute',
       top: 25,
       left: 130,
       zIndex: 2
      }
    });
    
    export default Card;



