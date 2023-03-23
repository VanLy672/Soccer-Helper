import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  RefreshControl,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyMatches = ({id_user, avatar, fullname, count}) => {
  const [matches, setMatches] = useState([]);
  const [userId, setUser_id] = useState(null);

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    // Get user_id from Async Storage
    AsyncStorage.getItem('User_id')
      .then(id => {
        setUser_id(id);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // Call API to get matches data
    axios
      .post(
        'http://ec2-13-250-122-122.ap-southeast-1.compute.amazonaws.com/api/showMatch',
        {
          user_id: id_user,
        },
      )
      .then(response => {
        console.log(response.data['data']);
        // Reverse the order of the matches array
        const reversedMatches = response.data['data'].reverse();
        setMatches(reversedMatches);
      })
      .catch(error => {
        console.log(error.errors);
      });
  }, [userId, count]);

const onRefresh = React.useCallback(() => {
  setRefreshing(true);
  axios
    .post(
      'http://ec2-13-250-122-122.ap-southeast-1.compute.amazonaws.com/api/showMatch',
      {
        user_id: id_user,
      },
    )
    .then(response => {
      console.log(response.data['data']);
      // Reverse the order of the matches array
      const reversedMatches = response.data['data'].reverse();
      setMatches(reversedMatches);
      setRefreshing(false);
    })
    .catch(error => {
      console.log(error.errors);
      setRefreshing(false);
    });
}, [id_user]);

  const renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.team}>
            <Image source={{uri: item.away_avatar}} style={styles.avatar} />
            <Text style={styles.fullname}>{item.away_fullname}</Text>
          </View>
          <View style={styles.pitch}>
            <Image source={{uri: item.image}} style={styles.image} />
          </View>
          <View style={styles.team}>
            <Text style={styles.fullname}>{item.fullname}</Text>
            <Image source={{uri: item.avatar}} style={styles.avatar} />
          </View>
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{item.namepitch}</Text>
          <Text style={styles.time}>{item.day + ' - ' + item.time + "'"}</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={matches}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  team: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 25,
    margin: 10,
  },
  fullname: {
    fontSize: 13,
    fontWeight: 'bold',
    maxWidth: 50,
  },
  pitch: {
    width: 70,
    height: 70,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#999999',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  info: {
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  time: {
    fontSize: 14,
    color: '#999999',
  },
});

export default MyMatches;
