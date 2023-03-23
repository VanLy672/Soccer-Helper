import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import React, { useState } from 'react';
import ForgotPWStyles from '../styles/ForgotPWStyles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const ForgotPW = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const forgotPassword = async (email, password) => {
    try {
      const response = await axios.post(
        `http://ec2-13-250-122-122.ap-southeast-1.compute.amazonaws.com/api/fogotpassword`,
        {
          email,
          newpassword: password,
        },
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const handleForgotPW = async () => {
    if (!email || !password) {
      Alert.alert('Forgot Password Failed', 'Please enter your email and password.');
      return;
    }

    try {
      const data = await forgotPassword(email, password);
      if(data['data']){
        navigation.navigate('Login');
        Alert.alert(
          'Forgot Password Successfully',
          'Your password has been updated.',
        );
      }
      else{
         Alert.alert(
           'Forgot Password Failed',
           "Email doesn't exist. Please enter the correct email.",
         );
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  

  return (
    <View style={ForgotPWStyles.container}>
      <View style={ForgotPWStyles.image}>
        <Image source={require('../assets/images/HeaderImage.png')} />
      </View>
      <Text style={ForgotPWStyles.forgotTitle}>Reset password</Text>
      <View style={ForgotPWStyles.formInput}>
        <IconFeather
          style={ForgotPWStyles.icon}
          name="phone"
          size={20}
          color="#82CD47"
        />
        <TextInput
          style={ForgotPWStyles.textInput}
          placeholder="Enter your email..."
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={ForgotPWStyles.formInput}>
        <IconFeather
          style={ForgotPWStyles.icon}
          name="lock"
          size={20}
          color="#82CD47"
        />
        <TextInput
          style={ForgotPWStyles.textInput}
          placeholder="Enter your new password..."
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <TouchableOpacity onPress={handleForgotPW}>
        <Text style={ForgotPWStyles.btnResetPW}>
          Reset password
          <IconAntDesign name="arrowright" size={16} color="#ffffff" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={ForgotPWStyles.forgotPWText}>back to Login</Text>
      </TouchableOpacity>
      <View style={ForgotPWStyles.image}>
        <Image source={require('../assets/images/FooterImage.png')} />
      </View>
    </View>
  );
};

export default ForgotPW;

const styles = StyleSheet.create({});
