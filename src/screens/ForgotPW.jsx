import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import ForgotPWStyles from '../styles/ForgotPWStyles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const ForgotPW = () => {
  const navigation = useNavigation();
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
          placeholder="Enter your phone-number..."
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
          placeholder="Enter your password..."
        />
      </View>
      <TouchableOpacity>
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
