import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

const Pitch = ({
  image,
  namepitch,
  address,
  created_at,
  idPitch,
  price,
  phonenumber,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.pitchItemContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PitchDetail', {
            id: idPitch,
            image: image,
            namepitch: namepitch,
            address: address,
            price: price,
            phonenumber: phonenumber,
          });
        }}>
        <View>
          <Image
            source={{
              uri: image,
            }}
            style={{width: '100%', height: 100}}
          />
        </View>
        <View>
          <Text style={styles.namePitch}>{namepitch}</Text>
          <Text style={styles.address}>{address}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Pitch;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pitchItemContainer: {
    width: 200,
    height: 200,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    justifyContent: 'center',
  },
  namePitch: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  address: {
    fontSize: 14,
  },
});
