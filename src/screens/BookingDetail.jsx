import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Alert, Modal} from 'react-native';
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

  const [modalVisible, setModalVisible] = useState(false);

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
          Alert.alert(
            'Matched successfully',
            'Congratulations, you have successfully matched the match',
          );
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
    <><View style={BookingDetailStyles.container}>
      <TouchableOpacity
        style={BookingDetailStyles.buttonBack}
        onPress={() => navigation.goBack()}>
        <IconIonicons name="arrow-back" size={27} color="white" />
      </TouchableOpacity>
      <Text style={BookingDetailStyles.title}>Match information</Text>
      <View style={BookingDetailStyles.fieldContainer}>
        <Text style={BookingDetailStyles.fieldLabel}>User: </Text>
        <Text style={BookingDetailStyles.fieldValue}>{fullname}</Text>
      </View>
      <View style={BookingDetailStyles.fieldContainer}>
        <Text style={BookingDetailStyles.fieldLabel}>Pitch: </Text>
        <Text style={BookingDetailStyles.fieldValue}>{namepitch}</Text>
      </View>
      <View style={BookingDetailStyles.fieldContainer}>
        <Text style={BookingDetailStyles.fieldLabel}>Match day: </Text>
        <Text style={BookingDetailStyles.fieldValue}>{day}</Text>
      </View>
      <View style={BookingDetailStyles.fieldContainer}>
        <Text style={BookingDetailStyles.fieldLabel}>Time: </Text>
        <Text style={BookingDetailStyles.fieldValue}> {time}'</Text>
      </View>
      <View style={BookingDetailStyles.fieldContainer}>
        <Text style={BookingDetailStyles.fieldLabel}>Contact: </Text>
        <Text style={BookingDetailStyles.fieldValue}>{contact}</Text>
      </View>
      <View style={BookingDetailStyles.fieldContainer}>
        <Text style={BookingDetailStyles.fieldLabel}>Describe: </Text>
        <Text style={[BookingDetailStyles.fieldValue, { maxWidth: '70%' }]}>
          {description}
        </Text>
      </View>
      <View style={BookingDetailStyles.btnContainer}>
        <TouchableOpacity
          style={BookingDetailStyles.btnMap}
          onPress={() => setModalVisible(true)}>
          <Text style={BookingDetailStyles.btnText}>Matching</Text>
        </TouchableOpacity>
      </View>
    </View><Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      } }
    >
        <View style={BookingDetailStyles.centeredView}>
          <View style={BookingDetailStyles.modalView}>
            <Text style={BookingDetailStyles.modalText}>Confirm matching?</Text>
            <View style={BookingDetailStyles.modalButtons}>
              <TouchableOpacity
                style={[BookingDetailStyles.modalButton, BookingDetailStyles.cancelButton]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={BookingDetailStyles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[BookingDetailStyles.modalButton, BookingDetailStyles.confirmButton]}
                onPress={() => {
                  Mapping();
                  setModalVisible(!modalVisible);
                } }
              >
                <Text style={BookingDetailStyles.buttonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal></>
  );
};

export default BookingDetail;
