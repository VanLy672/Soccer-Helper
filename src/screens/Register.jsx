import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import RegisterStyles from '../styles/RegisterStyles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Register = () => {
  
  const navigation = useNavigation();

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (!fullName || !phoneNumber || !email || !password || !confirmPassword) {
      Alert.alert('Register Failed', 'Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Register Failed', 'Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(
        'http://ec2-13-250-122-122.ap-southeast-1.compute.amazonaws.com/api/register',
        {
          fullname: fullName,
          phonenumber: phoneNumber,
          email,
          password,
          password_confirmation: confirmPassword,
        },
      );

      const data = response.data;
      if (data.error) {
        Alert.alert('Error', data.error);
      } else {
        navigation.navigate('Login');
        Alert.alert('Success', 'Registration successful');
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        const {errors} = error.response.data;
        let errorMessage = 'Validation errors: ';
        for (const field in errors) {
          errorMessage += `${field} ${errors[field].join(', ')}, `;
        }
        Alert.alert('Error', errorMessage);
      } else {
        console.error(error);
        Alert.alert('Error', 'Something went wrong, please try again');
      }
    }
  };

  return (
    <View style={RegisterStyles.container}>
      <View style={RegisterStyles.image}>
        <Image source={require('../assets/images/HeaderImage.png')} />
      </View>
      <Text style={RegisterStyles.registerTitle}>REGISTER</Text>
      <View style={RegisterStyles.formInput}>
        <IconAntDesign
          style={RegisterStyles.icon}
          name="user"
          size={20}
          color="#82CD47"
        />
        <TextInput
          style={RegisterStyles.textInput}
          placeholder="What’s your name?"
          value={fullName}
          onChangeText={text => setFullName(text)}
        />
      </View>
      <View style={RegisterStyles.formInput}>
        <IconFeather
          style={RegisterStyles.icon}
          name="phone"
          size={20}
          color="#82CD47"
        />
        <TextInput
          style={RegisterStyles.textInput}
          placeholder="What’s your phone number?"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
        />
      </View>
      <View style={RegisterStyles.formInput}>
        <IconFontisto
          style={RegisterStyles.icon}
          name="email"
          size={20}
          color="#82CD47"
        />
        <TextInput
          style={RegisterStyles.textInput}
          placeholder="What’s your email?"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={RegisterStyles.formInput}>
        <IconFeather
          style={RegisterStyles.icon}
          name="lock"
          size={20}
          color="#82CD47"
        />
        <TextInput
          style={RegisterStyles.textInput}
          placeholder="Enter your password..."
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={RegisterStyles.formInput}>
        <IconFeather
          style={RegisterStyles.icon}
          name="lock"
          size={20}
          color="#82CD47"
        />
        <TextInput
          style={RegisterStyles.textInput}
          placeholder="Confirm your password..."
          secureTextEntry
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
        />
      </View>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={RegisterStyles.btnRegister}>
          Register
          <IconAntDesign name="arrowright" size={16} color="#ffffff" />
        </Text>
      </TouchableOpacity>
      <Text style={RegisterStyles.text}>or</Text>
      <View style={RegisterStyles.registerWithSocial}>
        <TouchableOpacity style={{marginRight: 20}}>
          <Image source={require('../assets/images/Google.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/images/Facebook.png')} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={RegisterStyles.registerText}>back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
