import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Match = ({
  id,
  fullname,
  avatar,
  namepitch,
  day,
  time,
  contact,
  description,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('BookingDetail', {
          id: id,
          fullname: fullname,
          namepitch: namepitch,
          avatar: avatar,
          day: day,
          time: time,
          contact: contact,
          description: description,
        });
      }}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.avatarContainer}>
            <Image source={{uri: avatar}} style={styles.avatar} />
            <Text style={styles.userName}>{fullname}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.stadiumName}>Pitch: {namepitch}</Text>
            <Text style={styles.startTime}>{day}</Text>
            <Text style={styles.duration}>{time}'</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '40%',
  },
  detailsContainer: {
    alignItems: 'flex-end',
  },
  stadiumName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  startTime: {
    fontSize: 14,
    marginTop: 4,
  },
  duration: {
    fontSize: 14,
    marginTop: 4,
  },
});

export default Match;
