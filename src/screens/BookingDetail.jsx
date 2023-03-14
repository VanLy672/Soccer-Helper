import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import BookingDetailStyles from '../styles/BookingDetailStyles';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const BookingDetail = ({route}) => {
  const {id, fullname, namepitch, avatar, day, time, contact, description} =
    route.params;
  const [count, setCount] = useState(0);
  const navigation = useNavigation();

  const Mapping = async () => {
    try {
      const userId = await AsyncStorage.getItem('User_id');
      const response = await axios
        .post(
          'http://ec2-13-250-122-122.ap-southeast-1.compute.amazonaws.com/api/matchSocer',
          {
            booking_id: id,
            user_id_away: userId,
          },
        )
        .then(function (response) {
          console.log(response.data['message']);
          Alert.alert('map thành công');
          setCount(count + 1);
          navigation.navigate('Profile', {
            count: count + 1,
          });
        })
        .catch(function (error) {
          console.log(error);
          Alert.alert('map thất bại');
        });
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <View style={BookingDetailStyles.container}>
      <TouchableOpacity
        style={BookingDetailStyles.buttonBack}
        onPress={() => navigation.goBack()}>
        <IconIonicons name="arrow-back" size={27} color="white" />
      </TouchableOpacity>
      <Text style={BookingDetailStyles.title}>Thông tin trận đấu đang chờ</Text>
      <View style={BookingDetailStyles.fieldContainer}>
        <Text style={BookingDetailStyles.fieldLabel}>Tên người dùng: </Text>
        <Text style={BookingDetailStyles.fieldValue}>{fullname}</Text>
      </View>
      <View style={BookingDetailStyles.fieldContainer}>
        <Text style={BookingDetailStyles.fieldLabel}>Tên sân bóng: </Text>
        <Text style={BookingDetailStyles.fieldValue}>{namepitch}</Text>
      </View>
      <View style={BookingDetailStyles.fieldContainer}>
        <Text style={BookingDetailStyles.fieldLabel}>Thời gian bắt đầu: </Text>
        <Text style={BookingDetailStyles.fieldValue}>{day}</Text>
      </View>
      <View style={BookingDetailStyles.fieldContainer}>
        <Text style={BookingDetailStyles.fieldLabel}>Thời gian thi đấu: </Text>
        <Text style={BookingDetailStyles.fieldValue}> {time} phút</Text>
      </View>
      <View style={BookingDetailStyles.fieldContainer}>
        <Text style={BookingDetailStyles.fieldLabel}>Liên hệ: </Text>
        <Text style={BookingDetailStyles.fieldValue}>{contact}</Text>
      </View>
      <View style={BookingDetailStyles.fieldContainer}>
        <Text style={BookingDetailStyles.fieldLabel}>Mô tả: </Text>
        <Text style={BookingDetailStyles.fieldValue}>{description}</Text>
      </View>
      <TouchableOpacity style={BookingDetailStyles.button} onPress={Mapping}>
        <Text style={BookingDetailStyles.buttonText}>Map trận đấu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookingDetail;
