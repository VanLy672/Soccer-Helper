import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  FlatList,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import BookingStyles from '../styles/BookingStyles';
import IconIonicons from 'react-native-vector-icons/Ionicons';

export default function Booking({route}) {
  const [bookingDate, setBookingDate] = useState({
    value: new Date(),
    isPicking: false,
  });
  const [bookingHour, setBookingHour] = useState({
    value: new Date(),
    isPicking: false,
  });
  const [startTime, setStartTime] = useState('');
  const [time, setTime] = useState('');
  const [quality, setQuality] = useState('');
  const [pitchs, setPitchs] = useState([]);
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState('');
  const [user_id, setUser_id] = useState('');
  const [pitch, setPitch] = useState('');

  const getPitch = () => {
    axios({
      method: 'get',
      url: `http://ec2-13-250-122-122.ap-southeast-1.compute.amazonaws.com/api/pitchs`,
    })
      .then(response => {
        setPitchs(response.data['data']);
      })
      .catch(error => {
        console.log('Error', error);
      });
  };
  const handleSubmit = () => {
    const dayStart = startTime + ' ' + time;

    axios
      .post(
        'http://ec2-13-250-122-122.ap-southeast-1.compute.amazonaws.com/api/bookings',
        {
          user_id: user_id,
          pitch_id: pitch,
          day: dayStart,
          time: quality,
          contact: contact,
          description: description,
          status: 'pending',
        },
      )
      .then(function (response) {
        console.log(response.data['data']);
        Alert.alert('Create Successfully');
        navigation.navigate('AllMatch');
        setContact('');
        setDescription('');
        setStartTime('');
        setTime('');
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert('','Please fill in all fields.');
      });
  };
  const navigation = useNavigation();
  useEffect(() => {
    getPitch();
    AsyncStorage.getItem('User_id').then(result => {
      setUser_id(result);
    });
  }, []);
  const onDateSelected = (e, date) => {
    if (e.type === 'set') {
      setBookingDate({
        value: date,
        isPicking: false,
      });
      setStartTime(
        'Thứ' +
          ' ' +
          (date.getDay() + 1) +
          ' ' +
          date.getFullYear() +
          '-' +
          (date.getMonth() + 1) +
          '-' +
          date.getDate(),
      );
    } else {
      setBookingDate({...bookingDate, isPicking: false});
      setStartTime(
        'Thứ' +
          ' ' +
          (date.getDay() + 1) +
          ' ' +
          date.getFullYear() +
          '-' +
          (date.getMonth() + 1) +
          '-' +
          date.getDate(),
      );
    }
  };
  const onDateHourSelected = (e, date) => {
    if (e.type === 'set') {
      setBookingHour({
        value: date,
        isPicking: false,
      });
      setTime(date.getHours() + ': ' + date.getMinutes());
    } else {
      setBookingDate({...bookingHour, isPicking: false});
      setTime(date.getHours() + ':' + date.getMinutes());
    }
  };
  return (
    <View style={BookingStyles.container}>
      <TouchableOpacity
        style={BookingStyles.buttonBack}
        onPress={() => navigation.goBack()}>
        <IconIonicons name="arrow-back" size={27} color="white" />
      </TouchableOpacity>
      <Text style={BookingStyles.title}>Create Match</Text>
      <TouchableOpacity
        style={BookingStyles.input}
        onPress={() => setBookingDate({...bookingDate, isPicking: true})}>
        <Text>{startTime || 'Pick the date'}</Text>
      </TouchableOpacity>
      {bookingDate.isPicking && (
        <DateTimePicker
          style={{width: 300}}
          mode="date"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onChange={onDateSelected}
          value={bookingDate.value}
        />
      )}
      <TouchableOpacity
        onPress={() => setBookingHour({...bookingHour, isPicking: true})}
        style={BookingStyles.input}>
        <Text>{time || 'Pick hours'}</Text>
      </TouchableOpacity>
      {bookingHour.isPicking && (
        <DateTimePicker
          style={{width: 50}}
          mode="time"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onChange={onDateHourSelected}
          value={bookingHour.value}
        />
      )}
      <Picker
        style={BookingStyles.picker}
        selectedValue={quality}
        onValueChange={(itemValue, itemIndex) => setQuality(itemValue)}>
        <Picker.Item label="60 phút" value="60" />
        <Picker.Item label="90 phút" value="90" />
        <Picker.Item label="120 phút" value="120" />
      </Picker>
      <Picker
        style={BookingStyles.picker}
        selectedValue={pitch}
        onValueChange={(itemValue, itemIndex) => setPitch(itemValue)}>
        {pitchs.map(item => (
          <Picker.Item
            label={`Sân ${item.namepitch}`}
            value={item.id}
            key={item.id}
          />
        ))}
      </Picker>
      <TextInput
        style={BookingStyles.input}
        placeholder="Contact"
        value={contact}
        keyboardType="numeric"
        onChangeText={newText => setContact(newText)}
      />
      <TextInput
        style={BookingStyles.input}
        placeholder="Description"
        value={description}
        onChangeText={newText => setDescription(newText)}
        multiline={true}
      />
      <TouchableOpacity style={BookingStyles.button} onPress={handleSubmit}>
        <Text style={BookingStyles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
