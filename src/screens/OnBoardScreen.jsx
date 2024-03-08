import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Platform, Image, Pressable } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'
import HeroTitle from '../components/HeroTitle'


const backImage = require('../assets/city-image2.jpg')

const OnBoardScreen = ({navigation}) => {
  return (
    
    <SafeAreaView style={{paddingTop: Platform.OS === 'android' ? 40 : 10, flex: 1, backgroundColor: 'white'}} >
     <ImageBackground source={backImage} resizeMode="cover" style={styles.back}>
     <View>
        <View style={{ padding: 12}}>
         <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
      </View>
       <HeroTitle/>
     </ImageBackground>
      
     <View style={{paddingHorizontal: 20, paddingTop: 30}}>
            <Text style={styles.title2}>
            Welcome to our estate agency, where we specialize in personalized service and expert guidance to help you find the perfect home.
            </Text>
        </View>

        <View style={{marginTop: 30}}>
           <Text style={styles.textStyle} >Find a variety of properties that suit you very easily</Text>
           <Text style={styles.textStyle}>Forget all difficulties in finding a residence for you</Text>
        </View>

        <View style={{marginTop:30, justifyContent: 'flex-end', paddingBottom: 40}}>
            <Pressable onPress={() => navigation.navigate('HomeScreen')} >

                <View style={styles.btn}>
                    <Text style={{color: COLORS.white}} >Get Started</Text>
                </View>
            </Pressable>

        </View>

      
 

    </SafeAreaView>
 
        
  )
}

export default OnBoardScreen

const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 18,
        marginBottom: 5,
        marginTop: 5,
        objectFit: 'contain',
        right: -130
    },
    back: {
        justifyContent: 'center', 
        alignItems: 'center', 
        height: 420
     },
     title2: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 5,
        color: 'orange'
    },
    textStyle: {
        fontSize: 16,
        color: COLORS.grey,
        textAlign: 'center'
    },
    btn: {
        height: 60,
        marginHorizontal: 20,
        backgroundColor: '#0E4C92',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    }
})