import { StyleSheet, Text, View, Button } from "react-native";
import React, {useState} from "react";
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = () => {
  const navigation = useNavigation();
  
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigation.navigate('Login');
    AsyncStorage.clear();
  };

  return (
    <View>
      {isLoggedIn ? (
        <>
          <Text>You are logged in!</Text>
          <Button title="Logout" onPress={handleLogout} />
        </>
      ) : (
        <Text>You are logged out!</Text>
      )}
    </View>
  );

};

export default Settings;

const styles = StyleSheet.create({});
