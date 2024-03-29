import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Avatar, Icon, Input, Button} from 'react-native-elements';
import axios from 'axios';
import MyMatches from '../components/MyMatches';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';

const Settings = ({route}) => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

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
  const count = route.params || 10;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = await AsyncStorage.getItem('User_id');
        setUser_id(id);

        const response = await axios.post(
          'http://ec2-13-250-122-122.ap-southeast-1.compute.amazonaws.com/api/user',
          {user_id: id},
        );
        const data = response.data['data'];
        setEmail(data.email);
        setFullname(data.fullname);
        setPhonenumber(data.phonenumber);
        setAvatar(data.avatar);
        settempEmail(data.email);
        setTempFullName(data.fullname);
        settempPhoneNumber(data.phonenumber);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [count]);
  const handleSubmit = () => {
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
          <View
            style={{borderWidth: 5, borderRadius: 50, borderColor: 'white'}}>
            {avatar && <Avatar size="large" rounded source={{uri: avatar}} />}
          </View>
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
              backgroundColor: isEditing ? 'black' : '#4285F4',
              borderRadius: 10,
            }}
            containerStyle={{flex: 1, marginRight: isEditing ? 0 : 10}}
            onPress={() => setIsEditing(!isEditing)}
          />
          {!isEditing && (
            <>
              <Button
                title="Logout"
                buttonStyle={{backgroundColor: '#EA4335', borderRadius: 10}}
                containerStyle={{flex: 1, marginLeft: 10}}
                onPress={toggleModal}
              />
              <Modal isVisible={isModalVisible}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      backgroundColor: 'white',
                      padding: 20,
                      borderRadius: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginBottom: 20,
                      }}>
                      Are you sure you want to logout?
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}>
                      <Button
                        title="Cancel"
                        buttonStyle={{
                          backgroundColor: '#999999',
                          borderRadius: 10,
                        }}
                        containerStyle={{flex: 1, marginRight: 5}}
                        onPress={toggleModal}
                      />
                      <Button
                        title="Confirm"
                        buttonStyle={{
                          backgroundColor: '#4285F4',
                          borderRadius: 10,
                        }}
                        containerStyle={{flex: 1, marginLeft: 5}}
                        onPress={() => {
                          toggleModal();
                          handleLogout();
                        }}
                      />
                    </View>
                  </View>
                </View>
              </Modal>
            </>
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
        <Text style={{margin: 10, fontWeight: 'bold', fontSize: 20}}>
          Matched matches
        </Text>
        <View style={{height: '64%'}}>
          {avatar && (
            <MyMatches
              avatar={avatar}
              fullname={fullname}
              id_user={user_id}
              count={count}
            />
          )}
        </View>
      </View>
    </>
  );
};

export default Settings;
