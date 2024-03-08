
import React, { useEffect, useRef } from 'react';
import { Animated, Text, View, StyleSheet, Platform } from 'react-native';





const HeroTitle = () => {
    const circleAnimation = useRef(new Animated.Value(0)).current; // Initial value for opacity and translateY
    const textAnimation = useRef(new Animated.Value(0)).current; // Initial value for opacity and translateY
   
    useEffect(() => {
       Animated.parallel([
         Animated.timing(circleAnimation, {
           toValue: 1, // Target value for opacity and translateY
           duration: 2000,
           useNativeDriver: false, // Set to false for translateY
         }),
         Animated.timing(textAnimation, {
           toValue: 1, // Target value for opacity and translateY
           duration: 2000,
           useNativeDriver: false, // Set to false for translateY
         }),
       ]).start();
    }, []);
   
    return (
       <View style={styles.heroTitle}>
         <Animated.View
           style={[
             styles.orangeCircle,
             {
               opacity: circleAnimation, // Bind opacity to animated value
               transform: [
                 {
                   translateY: circleAnimation.interpolate({
                    inputRange: [0, 5],
                    outputRange: [-60, 0], // Move the circle from above to its final position
                   }),
                 },
               ],
             
             },
           ]}
         />
        

            <Animated.Text
            style={[
                styles.title,
                {
                opacity: textAnimation, // Bind opacity to animated value
                transform: [
                    {
                    translateY: textAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-2, 0], // Move the text from above to its final position
                    }),
                    },
                ],
                },
            ]}
            >
            Discover{'\n'}
            House of Your{'\n'}
              <Text style={styles.dream}>Dream</Text>
            </Animated.Text>

        </View>
       
    );
};

const styles = StyleSheet.create({
    heroTitle: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
    },
    orangeCircle: {
       width: 40,
       height: 40,
       borderRadius: 50,
       backgroundColor: 'orange',
       position: 'absolute',
       left: Platform.OS === 'android' ? -90 : -75,
       top: 10,
    },
    title: {
       fontSize: 35,
       textAlign: 'left',
       fontWeight: 'bold',
       left: Platform.OS === 'android' ? -70 : -60,
       top: Platform.OS === 'android' ? -145 : -145,
       color: 'gray'
    //    color: '#1A2421'

    },
    dream: {
       fontSize: 30,
       fontWeight: 'bold',
    },
});

export default HeroTitle;


   