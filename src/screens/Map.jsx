import React, {useEffect, useState} from 'react';
import {
  TextInput,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';
import Pitch from '../components/Pitch';
import axios from 'axios';
import MapView from 'react-native-maps';
import MapStyles from '../styles/MapStyles';
import {useNavigation} from '@react-navigation/native';
const Pitchs = () => {
  const [pitchs, setPitch] = useState([]);
  const getPitch = () => {
    axios({
      method: 'get',
      url: `http://ec2-13-250-122-122.ap-southeast-1.compute.amazonaws.com/api/pitchs`,
    })
      .then(response => {
        // console.log(response.data);
        setPitch(response.data['data']);
      })
      .catch(error => {
        console.log('Error', error);
      });
  };
  useEffect(() => {
    getPitch();
  }, []);

  const [texSearch, setTextSearch] = useState();

  const searchPitch = () => {
    axios
      .post(
        'http://ec2-13-250-122-122.ap-southeast-1.compute.amazonaws.com/api/pitchs/search',
        {
          textSearch: texSearch,
        },
      )
      .then(function (response) {
        setTextSearch(response.data['data']);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    searchPitch();
  }, [texSearch]);
  console.log(texSearch);

  const navigation = useNavigation();
  return (
    <SafeAreaView style={MapStyles.container}>
      <MapView style={MapStyles.map} />
      <TextInput
        style={MapStyles.touchableOpacityContainer}
        placeholder="Search Pitch"
        onChangeText={newText => setTextSearch(newText)}
      />
      <FlatList
        style={MapStyles.pitchListContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={texSearch || pitchs}
        renderItem={({item}) => (
          <Pitch
            image={item.image}
            address={item.address}
            namepitch={item.namepitch}
            created_at={item.created_at}
            idPitch={item.id}
            price={item.price_hour}
            phonenumber={item.phonenumber}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Pitchs;