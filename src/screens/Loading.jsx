import React, {useState, useEffect} from 'react';
import {View, Text, Image, ActivityIndicator, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingStyle from '../styles/LoadingStyle';

const Loading = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState();
  const [dots, setDots] = useState('');

  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('User_id').then(result => {
        setUserId(result);
        setIsLoading(false);
        if (result != null) {
          navigation.navigate('Homes');
        } else {
          navigation.navigate('Login');
        }
      });
    }, 4000);

    const interval = setInterval(() => {
      setDots(prevDots => {
        if (prevDots.length === 3) {
          return '.';
        } else {
          return prevDots + '.';
        }
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={LoadingStyle.container}>
      <Image source={require('../assets/images/Logo2.png')} />
      <View style={LoadingStyle.loadingEffect}>
        <ActivityIndicator size="large" color="#82CD47" animating={isLoading} />
        {isLoading && (
          <Text style={LoadingStyle.text}>
            Loading
            <Text style={LoadingStyle.dots}>{dots}</Text>
          </Text>
        )}
      </View>
    </View>
  );
};

export default Loading;