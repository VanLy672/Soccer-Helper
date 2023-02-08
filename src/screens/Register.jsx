import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import RegisterStyles from '../styles/RegisterStyles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontisto from 'react-native-vector-icons/Fontisto';

const Register = () => {
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
        />
      </View>
      <TouchableOpacity>
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
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
