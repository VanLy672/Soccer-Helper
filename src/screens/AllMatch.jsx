import React, {useEffect, useState, useCallback} from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Match from '../components/Match';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useIsFocused} from '@react-navigation/native';
import AllMatchStyles from '../styles/AllMatchStyles';
const AllMatch = () => {
  const [allBookings, setAllBooking] = useState([]);
  const [userId, setUserId] = useState('');

  const navigation = useNavigation();
  const isFocused = useIsFocused();

const getAllBooking = useCallback(async () => {
  try {
    const userId = await AsyncStorage.getItem('User_id');
    const response = await axios.get(
      'http://ec2-13-250-122-122.ap-southeast-1.compute.amazonaws.com/api/allbookings',
      {params: {user_id: userId}},
    );
    const sortedBookings = response.data['data'].reverse();
    setAllBooking(sortedBookings);
  } catch (error) {
    console.log(error);
  }
}, []);

useEffect(() => {
  getAllBooking();
}, [getAllBooking, isFocused]);

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
    <View style={AllMatchStyles.container}>
      <TouchableOpacity
        style={AllMatchStyles.btnCreate}
        onPress={() => {
          navigation.navigate('Booking');
        }}>
        <Text style={AllMatchStyles.btnText}>
          Create Match
        </Text>
      </TouchableOpacity>
      <View style={AllMatchStyles.listMatch}>
        <FlatList
          data={allBookings}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default AllMatch;