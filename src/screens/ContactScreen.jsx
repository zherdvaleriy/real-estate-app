import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, Pressable, Image, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const ContactScreen = () => {

const navigation = useNavigation();

 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [message, setMessage] = useState('');

 const handleSubmit = () => {
    Alert.alert('Message sent!', `Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    setName('');
    setEmail('');
    setMessage('');
 };

 return (
    <SafeAreaView>
    {/* <View style={styles.headerBtn}>
       <AntDesign name="arrowleft" size={24} color="black"onPress={navigation.goBack}/>
    </View> */}

    <Pressable onPress={() => navigation.navigate('HomeScreen')}>

            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10, justifyContent: 'center'}}>
               <AntDesign style={{top: -3, left: -100}} name="arrowleft" size={24} color="black"onPress={navigation.goBack}/>
            <Image source={require('../assets/logo.png')} style={styles.logo} />

            </View>

    </Pressable>

    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Your Message"
        value={message}
        onChangeText={setMessage}
        multiline
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
    </SafeAreaView>
 );
};

const styles = StyleSheet.create({
 container: {
   marginTop: 100,
    justifyContent: 'center',
    paddingHorizontal: 20,
 },
 logo: {
    width: 150,
    height: 50,
    marginBottom: 20,
    marginTop: 10,
    objectFit: 'contain',
   
},
 title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
 },
 input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
 },
 headerBtn: {
    height: 50,
    width: 50,
    // backgroundColor: COLORS.white,
    color: 'blue',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
});

export default ContactScreen;
