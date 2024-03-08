import { View, Text, StyleSheet, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'




const RegisterScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')


    const navigation = useNavigation()

  const handleRegister = () => {
     const user = {
      name: name,
      email: email,
      password: password,
     }
    axios.post('http://192.168.178.34:8550/register', user).then((response) => {
      console.log(response)
      Alert.alert('Registration successful! ')

      setName('')
      setEmail('')
      setPassword('')

    }).catch((error) => {
      Alert.alert('Registration Error')
      console.log('Registration failed', error)
    })

  }



  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
      <Image source={require('../assets/logo.png')} style={styles.logo}/>
      <KeyboardAvoidingView>
        <View style={{alignItems: 'center'}} >
          <Text style={{fontSize: 17,fontWeight: 'bold', marginTop: 12, color: '#041e42' }} >Register to your Account</Text>
        </View>

        <View style={{marginTop: 40}} >
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: '#d0d0d0', paddingVertical: 5, paddingHorizontal: 5, borderRadius: 3}} >
              <Ionicons style={{marginLeft:5}}  name="person-circle-sharp" size={24} color="gray" />
            <TextInput 
                 style={{color: 'gray', marginVertical: 10, width: 300, fontSize: email ? 17 : 17}} 
                 placeholder='Enter your name'
                 value={name} 
                 onChangeText={(text) => setName(text)}
                 />
          </View>
        </View>

        <View style={{marginTop: 40}} >
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: '#d0d0d0', paddingVertical: 5, paddingHorizontal: 5, borderRadius: 3}} >
              <MaterialIcons style={{marginLeft:5}}  name="email" size={24} color="gray" />
            <TextInput 
                 style={{color: 'gray', marginVertical: 10, width: 300, fontSize: email ? 17 : 17}} 
                 placeholder='Enter your email'
                 value={email} 
                 onChangeText={(text) => setEmail(text)}
                 />
          </View>
        </View>

        <View style={{marginTop: 30}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: '#d0d0d0', paddingVertical: 5, paddingHorizontal: 5, borderRadius: 3}} >
                 <AntDesign name="lock1" size={24} color="black" />
                <TextInput 
                     style={{color: 'gray', marginVertical: 10, width: 300, fontSize: password ? 17 : 17}}
                     placeholder='Enter your password' 
                     value={password}
                     onChangeText={(text) => setPassword(text)}
                     secureTextEntry = {true}
                     />
            </View>
        </View>

        <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text>Keep me logged in</Text>
          <Text style={{color: '#007fff', fontWeight: 500}} >Forgot your password?</Text>
        </View>

        <View style={{marginTop: 80}} />

        <Pressable  
             onPress={handleRegister}
             style={styles.btn} 
             >
          <Text style={styles.btnText} >Sign Up</Text>
        </Pressable >

        <Pressable onPress={() => navigation.navigate('Login')} style={{marginTop:15}} >
          <Text style={{textAlign: 'center', color: 'gray', fontSize: 16}} >Already have an account? Sign in!</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default RegisterScreen


const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 50,
        marginBottom: 20,
        marginTop: 10,
        objectFit: 'contain',
       
    },
    btn: {
      width: 200,
      backgroundColor: '#febe10',
      borderRadius: 5,
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: 15
    },
    btnText: {
      color: '#ffff',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
    }
})