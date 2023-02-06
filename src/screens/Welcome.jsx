import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import WelcomeStyles from '../styles/WelcomeStyles';
import Icon from 'react-native-vector-icons/AntDesign';

const Welcome = () => {
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
      <TouchableOpacity>
        <Text style={WelcomeStyles.btnStarted}>
          Get started <Icon name="arrowright" size={16} color="#ffffff" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
