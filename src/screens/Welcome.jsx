import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import WelcomeStyles from '../styles/WelcomeStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Welcome = () => {

  const [userId, setUserId] = useState();
    useEffect(() => {
      AsyncStorage.getItem('User_id').then(result => {
        setUserId(result);
      });
    }, []);
    const handleNavigate = () => {
      if(userId != null) { navigation.navigate('Homes');} else( navigation.navigate('Login'))
    }

  const navigation = useNavigation();
  return (
    <View style={WelcomeStyles.container}>
      <View style={WelcomeStyles.image}>
        <Image source={require('../assets/images/Welcome.png')} />
      </View>
      <Text style={WelcomeStyles.welcomeText}>WELCOME TO</Text>
      <Text style={WelcomeStyles.welcomeText}>SOCCER HELPER</Text>
      <View style={WelcomeStyles.slogan}>
        <Text style={WelcomeStyles.sloganText}>Let's help you</Text>
        <Text style={WelcomeStyles.sloganTexts}>
          to have a nice football field
        </Text>
      </View>
      <TouchableOpacity onPress={handleNavigate}>
        <Text style={WelcomeStyles.btnStarted}>
          Get started <Icon name="arrowright" size={16} color="#ffffff" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
