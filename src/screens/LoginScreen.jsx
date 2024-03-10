import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';





const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    const navigation = useNavigation();

    useEffect(() => {
        const checkLoginStatus = async () => {
          try {
            const token = await AsyncStorage.getItem('authToken');
            if (token) {
              // Send a request to validate the token
              const response = await axios.post('http://192.168.178.34:8550/validateToken', { token });
              if (response.data.valid) {
                // Token is valid, navigate to BuyScreen
                navigation.navigate('BuyScreen');
              } else {
                // Token is invalid, remove it from AsyncStorage
                await AsyncStorage.removeItem('authToken');
              }
            }
          } catch (error) {
            console.log('error message', error);
          }
        };
        checkLoginStatus();
      }, []);


    const handleLogin = () => {
        const user = {
            email: email,
            password: password,
        };

        axios.post('http://192.168.178.34:8550/login', user).then((response) => {
            console.log(response);

            const token = response.data.token;
            AsyncStorage.setItem('authToken', token);
            setIsLoggedIn(true);
            navigation.navigate('BuyScreen');

        }).catch((error) => {
            Alert.alert('Login Error', 'Invalid Email');
            console.log(error);
        });
    };

    const handleLogout = async () => {
        await AsyncStorage.removeItem('authToken');
        setIsLoggedIn(false);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>

            <Pressable onPress={() => navigation.navigate('HomeScreen')}>

                <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>

                   <AntDesign style={{top: -2.6, left: -100}} name="arrowleft" size={24} color="black"onPress={navigation.goBack}/>
                   <Image source={require('../assets/logo.png')} style={styles.logo} />

                </View>

            </Pressable>

             <KeyboardAvoidingView>

            {isLoggedIn ? (

                    <Pressable onPress={handleLogout} style={styles.btn}>
                    <Text style={styles.btnText}>Logout</Text>
                    </Pressable>
            ) : (
             <>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 12, color: '#041e42' }}>Login</Text>
                </View>

                <View style={{ marginTop: 40 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: '#d0d0d0', paddingVertical: 5, paddingHorizontal: 5, borderRadius: 3 }}>
                        <MaterialIcons style={{ marginLeft: 5 }} name="email" size={24} color="gray" />
                        <TextInput
                            style={{ color: 'gray', marginVertical: 10, width: 300, fontSize: email ? 17 : 17 }}
                            placeholder='Enter your email'
                            value={email}
                            onChangeText={(text) => setEmail(text)} // Corrected here
                        />
                    </View>
                </View>

                <View style={{ marginTop: 30 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: '#d0d0d0', paddingVertical: 5, paddingHorizontal: 5, borderRadius: 3 }}>
                        <AntDesign name="lock1" size={24} color="black" />
                        <TextInput
                            style={{ color: 'gray', marginVertical: 10, width: 300, fontSize: password ? 17 : 17 }}
                            placeholder='Enter your password'
                            value={password}
                            onChangeText={(text) => setPassword(text)} // Corrected here
                            secureTextEntry={true}
                        />
                    </View>
                </View>

                <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text>Keep me logged in</Text>
                    <Text style={{ color: '#007fff', fontWeight: 500 }}>Forgot your password?</Text>
                </View>

                <View style={{ marginTop: 80 }} />

                <Pressable
                    onPress={handleLogin}
                    style={styles.btn}
                >
                    <Text style={styles.btnText}>Login</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('Register')} style={{ marginTop: 15 }}>
                    <Text style={{ textAlign: 'center', color: 'gray', fontSize: 16 }}>Don't have an account? Sign up!</Text>
                </Pressable>
            </>
                )}
            </KeyboardAvoidingView>
            
        </SafeAreaView>
    );
};

export default LoginScreen;

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
});
