import {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Linking, TouchableOpacity} from 'react-native';
import axios from 'axios';
import ReviewPitch from '../components/ReviewPitch';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import PitchDetailStyle from '../styles/PitchDetailStyle';

function DetailsScreen({route, navigation}) {
  const {id, image, namepitch, address, price, phonenumber} = route.params;
  const [reviewPitch, setReviewPitch] = useState([]);

  const getAllReview = () => {
    axios
      .post(
        'http://ec2-13-250-122-122.ap-southeast-1.compute.amazonaws.com/api/reviews',
        {
          pitch_id: id,
        },
      )
      .then(function (response) {
        console.log(response);
        setReviewPitch(response.data['data']);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllReview();
  }, []);
  console.log(reviewPitch);

  return (
    <View style={PitchDetailStyle.container}>
      <View style={PitchDetailStyle.viewImage}>
        <Image
          source={{
            uri: image,
          }}
          style={{width: '100%', height: 190}}
        />
        <TouchableOpacity
          style={PitchDetailStyle.buttonBack}
          onPress={() => navigation.goBack()}>
          <IconIonicons name="arrow-back" size={27} color="#82CD47" />
        </TouchableOpacity>
      </View>
      <View style={PitchDetailStyle.detail}>
        <View style={PitchDetailStyle.iconDetail}>
          <View style={PitchDetailStyle.icon}>
            <IconOcticons name="calendar" size={20} color="black" />
            <Text style={PitchDetailStyle.text}>Book</Text>
          </View>
          <View style={PitchDetailStyle.icon}>
            <IconOcticons name="location" size={20} color="black" />
            <Text style={PitchDetailStyle.text}>Location</Text>
          </View>
          <View style={PitchDetailStyle.icon}>
            <IconOcticons name="share-android" size={20} color="black" />
            <Text style={PitchDetailStyle.text}>Share</Text>
          </View>
          <View style={PitchDetailStyle.icon}>
            <IconOcticons name="report" size={20} color="black" />
            <Text style={PitchDetailStyle.text}>Report</Text>
          </View>
        </View>
        <View style={PitchDetailStyle.dashed} />
        <View>
          <Text style={PitchDetailStyle.textBold}>{namepitch}</Text>
          <View style={PitchDetailStyle.infoPitch}>
            <IconOcticons
              style={PitchDetailStyle.iconInfo}
              name="location"
              size={20}
              color="black"
            />
            <Text style={PitchDetailStyle.text}>{address}</Text>
          </View>
          <View style={PitchDetailStyle.infoPitch}>
            <IconFeather
              style={PitchDetailStyle.iconInfo}
              name="phone"
              size={20}
              color="black"
            />
            <Text style={PitchDetailStyle.text}>{phonenumber} </Text>
            <Text
              style={{color: 'green', fontSize: 15}}
              onPress={() => {
                Linking.openURL(`tel:${phonenumber}`);
              }}>
              Gọi điện
            </Text>
          </View>
          <View style={PitchDetailStyle.infoPitch}>
            <IconFeather
              style={PitchDetailStyle.iconInfo}
              name="clock"
              size={20}
              color="black"
            />
            <Text style={PitchDetailStyle.text}>07:00 - 24:00 </Text>
          </View>
          <View style={PitchDetailStyle.dashed} />
          <View style={PitchDetailStyle.warning}>
            <View style={[PitchDetailStyle.infoPitch, {marginRight: 30}]}>
              <IconAntDesign
                style={PitchDetailStyle.iconInfo}
                name="warning"
                size={20}
                color="red"
              />
              <Text style={PitchDetailStyle.text}>paid for water</Text>
            </View>
            <View style={PitchDetailStyle.infoPitch}>
              <IconAntDesign
                style={PitchDetailStyle.iconInfo}
                name="warning"
                size={20}
                color="red"
              />
              <Text style={PitchDetailStyle.text}>paid for water</Text>
            </View>
            <View style={PitchDetailStyle.infoPitch}>
              <IconAntDesign
                style={PitchDetailStyle.iconInfo}
                name="warning"
                size={20}
                color="red"
              />
              <Text style={PitchDetailStyle.text}>paid for water</Text>
            </View>
          </View>
          <View style={PitchDetailStyle.dashed} />
          <Text style={PitchDetailStyle.textBold}>{price} VND</Text>
          <Text style={PitchDetailStyle.text}>1 hours</Text>
        </View>
        <View style={PitchDetailStyle.dashed} />
        <Text style={PitchDetailStyle.textBold}>Reviews</Text>
        <FlatList
          data={reviewPitch}
          renderItem={({item}) => (
            <ReviewPitch
              name={item.fullname}
              avatar={item.avatar}
              title={item.title}
            />
          )}
          keyExtractor={item => item.user_id}
        />
      </View>
    </View>
  );
}
export default DetailsScreen;
