import { StyleSheet, Text, View, SafeAreaView, StatusBar, Pressable, Image, FlatList ,ScrollView, TextInput, Dimensions} from 'react-native'
import React, {useState, useEffect} from 'react'
import COLORS from '../constants/colors'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import ListOptions from '../components/ListOptions';
import { useNavigation } from '@react-navigation/native';
import data from '../../data.json'
import Card from '../components/Card';
const {width} = Dimensions.get('screen')




const HomeScreen = () => {
   const navigation = useNavigation()
  const ListCategories = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0)

    const categoryList = ['Popular', 'Recommended', 'Nearest']



    return (
      <View style={styles.categoryListContainer} >
          {categoryList.map((category, index) => (
              <Pressable key={index} onPress={() => setSelectedCategoryIndex(index)} >

                  <Text style={[styles.categoryListText, index == selectedCategoryIndex && styles.activeCategoryListText]} >{category} </Text>

              </Pressable>
          ))}
      </View>
  )
  }

  const [residencies, setResidencies] = useState([]);
  useEffect(() => {
    fetch('http://192.168.178.34:8550/residencies', {timeout: 5000})
        .then(response => response.json())
        .then(data => setResidencies(data))
        .catch(error => console.error(error));
}, []);



  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}} >
      <StatusBar 
           backgroundColor={COLORS.white}
           translucent={false}
           barStyle='dark-content'
        />
      <Pressable onPress={() => navigation.navigate('OnBoardScreen')} >

        <View style={{ padding: 12}}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>

      </Pressable>

      <View style={styles.header} >
        <View>
          <Text style={{color: 'gray'}}>Location</Text>
          <Text style={{color: COLORS.dark, fontSize: 20, fontWeight: 'bold'}}>Germany</Text>
        </View>
        {/* <Image 
           style={styles.profileImage}
           source={require('../assets/person.jpg')} 
        /> */}
        <Pressable 
              style={{backgroundColor: '#0E4C92', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 5}}
              onPress={() => navigation.navigate('Contact')}
              >

           <Text style={{color: 'white', fontWeight: '600', fontSize: 16}} >Contact Us</Text>

        </Pressable>
        <Pressable onPress={() => navigation.navigate('Login')}>

           <FontAwesome name="user-circle-o" size={40} color="black" />

        </Pressable>



      </View>

      <ScrollView>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }} >
          <View style={styles.searchInputContainer}>
            <FontAwesome name="search" size={24} color="gray" style={{left: -120, top: 12}} />
            <TextInput placeholder='Search your residency...' style={{top: -12}} />
          </View>
          <View style={styles.sortBtn} >
          <MaterialIcons name="tune" size={26} color="white" />
          </View>
        </View>
        <ListOptions/>
        <ListCategories/>

        <FlatList 
             snapToInterval={width -20}
             keyExtractor={(_,key) => key.toString()}
             contentContainerStyle={{paddingLeft: 20, paddingVertical: 20}}
             showsHorizontalScrollIndicator={false}
             horizontal
             data={residencies}
            //  data={data}
            //  data={data.slice(0, 8)} // if we want to limit the number of houses displayed
             renderItem={({item}) => <Card house={item} navigation={navigation} />} 
             style={{ marginTop:10}}
             />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen



const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 18,
    marginBottom: 5,
    marginTop: 5,
    objectFit: 'contain',
    
    
},
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  searchInputContainer: {
    height: 50,
    width: '100%',
    backgroundColor: 'lightgray',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  sortBtn: {
    backgroundColor: COLORS.dark,
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
},
categoryListContainer: {
  marginTop: 40,
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 40,
},
categoryListText: {
 fontSize: 16,
 fontWeight: 'bold',
 paddingBottom: 5,
 color: COLORS.grey
},
activeCategoryListText: {
  color: COLORS.dark,
  borderBottomWidth: 1,
  // textDecorationLine: 'underline',
  paddingBottom: 5,
  fontSize: 18
},
})