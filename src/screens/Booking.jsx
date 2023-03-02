import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker'
export default function Booking({route}) {
  const [bookingDate, setBookingDate] = useState({
    value: new Date(),
    isPicking: false
  });
  const [startTime, setStartTime] = useState('');
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
    axios
      .post(
        'http://ec2-13-250-122-122.ap-southeast-1.compute.amazonaws.com/api/bookings',
        {
          user_id: user_id,
          pitch_id: pitch,
          day: startTime,
          time: quality,
          contact: contact,
          description: description,
          status: 'pending',
        },
      )
      .then(function (response) {
        console.log(response.data['data']);
      })
      .catch(function (error) {
        console.log(error);
      });

    setContact('');
    setDescription('');
    setStartTime('');
    Alert.alert('Create Successfully');
  };
  const onChangeDate = date => {
    setStartTime(
      'Thứ' +
        ' ' +
        (date.getDay() + 1) +
        ' ' +
        date.getFullYear() +
        '-' +
        (date.getMonth() + 1) +
        '-' +
        date.getDate() +
        ' ' +
        date.getHours() +
        ':' +
        date.getMinutes(),
    );
    setBookingDate(date);
  };
  const navigation = useNavigation();
  useEffect(() => {
    getPitch();
    AsyncStorage.getItem('User_id').then(result => {
      setUser_id(result);
    });
  }, []);
  const onDateSelected = (e, date) => {
    if (e.type === "set") {
      setBookingDate({
        value: date,
        isPicking: false
      })
    }
    else  {
      setBookingDate({...bookingDate, isPicking: false})
    }
  }
  console.log(pitchs);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Match</Text>
      <TouchableOpacity onPress={() => setBookingDate({...bookingDate, isPicking: true})} style={{borderWidth: 1}}>
        <Text>Pick the date</Text>
      </TouchableOpacity>
      {bookingDate.isPicking && (
        <DateTimePicker
          style={{width: 300}}
          // date={bookingDate.value}
          mode="datetime"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onChange={onDateSelected}
          value={bookingDate.value}
        />
      )}
      <Text style={styles.input}>{bookingDate.value.toLocaleString()}</Text>
      <Picker
        style={styles.picker}
        selectedValue={quality}
        onValueChange={(itemValue, itemIndex) => setQuality(itemValue)}>
        <Picker.Item label="60 phút" value="60" />
        <Picker.Item label="90 phút" value="90" />
        <Picker.Item label="120 phút" value="120" />
      </Picker>
      <Picker
        style={styles.picker}
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
        style={styles.input}
        placeholder="Contact"
        value={contact}
        onChangeText={newText => setContact(newText)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={newText => setDescription(newText)}
        multiline={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  picker: {
    width: 200,
    height: 50,
    paddingRight: 100,
    boder: 1,
    borderRadius: 5,
    marginBottom: 10,
    marginLeft: -150,
  },
});