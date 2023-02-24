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
    <SafeAreaView style={styles.container}>
      <MapView style={styles.map} />
      <TextInput
        style={styles.touchableOpacityContainer}
        placeholder='Search Pitch'
        onChangeText={newText => setTextSearch(newText)}
      />
      <FlatList
        style={styles.pitchListContainer}
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
  },
  pitchListContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    margin: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: '#ccc',
  },
  touchableOpacityContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
});
// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TextInput,
//   StyleSheet,
//   SafeAreaView,
//   FlatList,
//   TouchableOpacity,
// } from 'react-native';
// import {FlatListSlider} from 'react-native-flatlist-slider';
// import Pitch from '../components/Pitch';
// import axios from 'axios';
// import {useNavigation} from '@react-navigation/native';
// const Pitchs = () => {
//   const [pitchs, setPitch] = useState([]);
//   const getPitch = () => {
//     axios({
//       method: 'get',
//       url: `http://ec2-13-250-122-122.ap-southeast-1.compute.amazonaws.com/api/pitchs`,
//     })
//       .then(response => {
//         // console.log(response.data);
//         setPitch(response.data['data']);
//       })
//       .catch(error => {
//         console.log('Error', error);
//       });
//   };
//   useEffect(() => {
//     getPitch();
//   }, []);
//   const navigation = useNavigation();
//   return (
//     <SafeAreaView style={styles.container}>
//       <TouchableOpacity
//         onPress={() => {
//           navigation.navigate('SearchPitch');
//         }}>
//         <Text style={styles.input}>Search Pitch</Text>
//       </TouchableOpacity>
//       <FlatList
//         data={pitchs}
//         renderItem={({item}) => (
//           <Pitch
//             image={item.image}
//             address={item.address}
//             namepitch={item.namepitch}
//             created_at={item.created_at}
//             idPitch={item.id}
//             price={item.price_hour}
//             phonenumber={item.phonenumber}
//           />
//         )}
//         style={styles.allpitchs}
//       />
//     </SafeAreaView>
//   );
// };

// export default Pitchs;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   allpitchs: {},
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 5,
//     width: 250,
//   },
// });