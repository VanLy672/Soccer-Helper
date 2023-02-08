import {Image, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import React from "react";
import LoginStyles from "../styles/LoginStyles";
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';

const Login = () => {
  return (
    <View style={LoginStyles.container}>
      <View style={LoginStyles.image}>
        <Image source={require('../assets/images/HeaderImage.png')} />
      </View>
      <Text style={LoginStyles.loginTitle}>LOGIN</Text>
      <View style={LoginStyles.formInput}>
        <IconFeather
          style={LoginStyles.icon}
          name="phone"
          size={20}
          color="#82CD47"
        />
        <TextInput
          style={LoginStyles.textInput}
          placeholder="Enter your phone-number..."
        />
      </View>
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
        />
      </View>
      <TouchableOpacity>
        <Text style={LoginStyles.btnForgotPW}>Forgot your password?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={LoginStyles.btnLogin}>
          Login
          <IconAntDesign
            name="arrowright"
            size={16}
            color="#ffffff"
          />
        </Text>
      </TouchableOpacity>
      <Text style={LoginStyles.text}>or</Text>
      <TouchableOpacity>
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

const styles = StyleSheet.create({});
