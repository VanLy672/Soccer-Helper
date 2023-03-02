import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import Match from '../components/Match';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const AllMatch = () => {
  const [allBookings, setAllBooking] = useState([]);
  const [userId, setUserId] = useState('');
  const navigation = useNavigation();
  const getAllBooking = () => {
    axios
      .get(
        'http://ec2-13-250-122-122.ap-southeast-1.compute.amazonaws.com/api/allbookings',
        {
          user_id: userId,
        },
      )
      .then(function (response) {
        console.log(response.data['data']);
        setAllBooking(response.data['data']);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    AsyncStorage.getItem('User_id').then(result => {
      setUserId(result);
    });
    getAllBooking();
  }, []);
  const renderItem = ({item}) => (
    <Match
      id={item.id}
      fullname={item.fullname}
      avatar={item.avatar}
      namepitch={item.namepitch}
      day={item.day}
      time={item.time}
      contact={item.contact}
      description={item.description}
    />
  );

  return (
    <>
      <View style={styles.viewbutton}>
        <Text
          name="plus"
          style={styles.button_plus}
          onPress={() => {
            navigation.navigate('Booking');
          }}>
          create Match
        </Text>
      </View>
      <View>
        <FlatList
          data={allBookings}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  button_plus: {
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 100,
    marginLeft: 100,
  },
});
export default AllMatch;
