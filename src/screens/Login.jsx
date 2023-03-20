import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import LoginStyles from '../styles/LoginStyles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateInput = () => {
    let isValid = true;
    if (email === '') {
      setEmailError('Please enter your email');
      isValid = false;
    } else {
      setEmailError('');
    }
    if (password === '') {
      setPasswordError('Please enter your password');
      isValid = false;
    } else {
      setPasswordError('');
    }
    return isValid;
  };

  const handleLogin = () => {
    axios
      .post(
        'http://ec2-13-250-122-122.ap-southeast-1.compute.amazonaws.com/api/login',
        {
          email: email,
          password: password,
        },
      )
      .then(function (response) {
        console.log(response.data['data']);
        AsyncStorage.setItem('User_id', response.data['data'][0].id.toString());
        AsyncStorage.setItem('User_name', response.data['data'][0].fullName);
        AsyncStorage.setItem('User_avatar', response.data['data'][0].avatar);
        setPassword('');
        setEmail('');
        navigation.navigate('Homes');
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert(
          'Login failed',
          'Please check your email and password and try again',
        );
      });
  };  

  return (
    <View style={LoginStyles.container}>
      <View style={LoginStyles.image}>
        <Image source={require('../assets/images/HeaderImage.png')} />
      </View>
      <Text style={LoginStyles.loginTitle}>LOGIN</Text>
      <View style={LoginStyles.formInput}>
        <IconFontisto
          style={LoginStyles.icon}
          name="email"
          size={20}
          color="#82CD47"
        />
        <TextInput
          style={LoginStyles.textInput}
          placeholder="Enter your email..."
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <Text style={LoginStyles.errorMessage}>{emailError}</Text>

      <View style={LoginStyles.formInput}>
        <IconFeather
          style={LoginStyles.icon}
          name="lock"
          size={20}
          color="#82CD47"
        />
        <TextInput
          style={LoginStyles.textInput}
          placeholder="Enter your password..."
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Text style={LoginStyles.errorMessage}>{passwordError}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPW')}>
        <Text style={LoginStyles.btnForgotPW}>Forgot your password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          if (validateInput()) {
            handleLogin();
          }
        }}>
        <Text style={LoginStyles.btnLogin}>
          Login
          <IconAntDesign name="arrowright" size={16} color="#ffffff" />
        </Text>
      </TouchableOpacity>
      <Text style={LoginStyles.text}>or</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={LoginStyles.registerText}>Signup with us</Text>
        <Text style={LoginStyles.registerText}>
          if you haven’t had an account yet.
        </Text>
      </TouchableOpacity>
      <View style={LoginStyles.image}>
        <Image source={require('../assets/images/FooterImage.png')} />
      </View>
    </View>
  );
};

export default Login;