// import { StyleSheet, Text, View, Button } from "react-native";
// import React, {useState} from "react";
// import {useNavigation} from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Settings = () => {
//   const navigation = useNavigation();

//   const [isLoggedIn, setIsLoggedIn] = useState(true);

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     navigation.navigate('Login');
//     AsyncStorage.clear();
//   };

//   return (
//     <View>
//       {isLoggedIn ? (
//         <>
//           <Text>You are logged in!</Text>
//           <Button title="Logout" onPress={handleLogout} />
//         </>
//       ) : (
//         <Text>You are logged out!</Text>
//       )}
//     </View>
//   );

// };

// export default Settings;

// const styles = StyleSheet.create({});

import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Avatar, Icon, Input, Button} from 'react-native-elements';
import axios from 'axios';
import MyMatches from '../components/MyMatches';
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
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [avatar, setAvatar] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [user_id, setUser_id] = useState(null);
  const [tempFullName, setTempFullName] = useState('');
  const [tempPhoneNumber, settempPhoneNumber] = useState('');
  const [tempEmail, settempEmail] = useState('');
  useEffect(() => {
    // Get user_id from Async Storage
    AsyncStorage.getItem('User_id')
      .then(id => {
        setUser_id(id);
        console.log(id);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .post(
        'http://ec2-13-250-122-122.ap-southeast-1.compute.amazonaws.com/api/user',
        {user_id},
      )
      .then(response => {
        const data = response.data['data'];
        setEmail(data.email);
        setFullname(data.fullname);
        setPhonenumber(data.phonenumber);
        setAvatar(data.avatar);
        settempEmail(data.email);
        setTempFullName(data.fullname);
        settempPhoneNumber(data.phonenumber);
      })
      .catch(error => console.log(error));
  }, [user_id]);
  const handleSubmit = () => {
    console.log(tempEmail);
    console.log(tempFullName);
    console.log(tempPhoneNumber);
    console.log(user_id);
    setIsEditing(false);
    axios
      .post(
        'http://ec2-13-250-122-122.ap-southeast-1.compute.amazonaws.com/api/updateUser',
        {
          userId: user_id,
          email: tempEmail,
          fullname: tempFullName,
          phonenumber: tempPhoneNumber,
        },
      )
      .then(function (response) {
        console.log(response.data['data']);
        const data = response.data['data'];
        setEmail(data.email);
        setFullname(data.fullname);
        setPhonenumber(data.phonenumber);
      })
      .catch(errors => {
        console.log(
          JSON.stringify({
            errors,
            status: 'hel',
          }),
        );
      });
  };
  return (
    <>
      <View style={{flex: 1, padding: 20}}>
        <View style={{alignItems: 'center', marginBottom: 20}}>
          {avatar && <Avatar size="large" rounded source={{uri: avatar}} />}
          <Text style={{marginTop: 10, fontSize: 20, fontWeight: 'bold'}}>
            {fullname}
          </Text>
          <Text style={{marginTop: 5, fontSize: 16}}>{email}</Text>
          <Text style={{marginTop: 5, fontSize: 16}}>{phonenumber}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <Button
            title={isEditing ? 'Information' : 'Edit Profile'}
            buttonStyle={{
              backgroundColor: isEditing ? '#8b0000' : '#4285F4',
              borderRadius: 10,
            }}
            containerStyle={{flex: 1, marginRight: isEditing ? 0 : 10}}
            onPress={() => setIsEditing(!isEditing)}
          />
          {!isEditing && (
            <Button
              title="Logout"
              buttonStyle={{backgroundColor: '#EA4335', borderRadius: 10}}
              containerStyle={{flex: 1, marginLeft: 10}}
              onPress={handleLogout}
            />
          )}
        </View>
        {isEditing && (
          <View>
            <Input
              label="Full Name"
              value={tempFullName}
              onChangeText={nexText => setTempFullName(nexText)}
              leftIcon={<Icon name="person" size={24} color="#999999" />}
            />
            <Input
              label="Phone Number"
              value={tempPhoneNumber}
              onChangeText={nexText => settempPhoneNumber(nexText)}
              leftIcon={<Icon name="phone" size={24} color="#999999" />}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <Button
                title="Cancel"
                buttonStyle={{backgroundColor: '#999999', borderRadius: 10}}
                containerStyle={{marginRight: 10}}
                onPress={() => setIsEditing(false)}
              />
              <Button
                title="Save"
                buttonStyle={{backgroundColor: '#4285F4', borderRadius: 10}}
                onPress={
                  // Call API to save profile changes
                  handleSubmit
                }
              />
            </View>
          </View>
        )}
        <View>
          <Text>Trận đấu đang chờ</Text>
          {avatar && (
            <MyMatches avatar={avatar} fullname={fullname} id_user={user_id} />
          )}
        </View>
      </View>
    </>
  );
};

export default Settings;
