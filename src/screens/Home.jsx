import { StyleSheet, Text, View, ScrollView, Image, FlatList, TouchableOpacity } from "react-native";
import React, {useState, useEffect} from 'react';
import Swiper from 'react-native-swiper';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import HomeStyles from "../styles/HomeStyles";

const Home = () => {

  const nearFields = [
    require('../assets/images/NearFootballFields1.png'),
    require('../assets/images/NearFootballFields2.png'),
    require('../assets/images/NearFootballFields3.png'),
  ];

  const footballTournaments = [
    require('../assets/images/FootballTournaments1.png'),
    require('../assets/images/FootballTournaments2.png'),
    require('../assets/images/FootballTournaments3.png'),
  ];

  const footballShop = [
    require('../assets/images/FootballShop1.png'),
    require('../assets/images/FootballShop2.png'),
    require('../assets/images/FootballShop3.png'),
  ];

  return (
    <ScrollView>
      <View style={HomeStyles.container}>
        <View style={HomeStyles.header}>
          <Image
            style={HomeStyles.imageHeader}
            source={require('../assets/images/HeaderHomepage.png')}
          />
        </View>
        <View style={HomeStyles.Banner}>
          <View style={HomeStyles.BannerTitle}>
            <Text style={HomeStyles.BannerText}>Near football fields</Text>
            <TouchableOpacity>
              <Text style={HomeStyles.BannerBtn}>
                see more
                <IconAntDesign name="arrowright" size={16} color="#82CD47" />
              </Text>
            </TouchableOpacity>
          </View>
          <Swiper
            style={HomeStyles.swiper}
            showsPagination={false}
            loop={true}
            autoplay={true}
            autoplayTimeout={6}>
            {nearFields.map((image, i) => (
              <View key={i} style={{flex: 1}}>
                <Image
                  source={image}
                  style={{width: 340, height: 180, borderRadius: 15}}
                />
              </View>
            ))}
          </Swiper>
        </View>
        <View style={HomeStyles.Banner}>
          <View style={HomeStyles.BannerTitle}>
            <Text style={HomeStyles.BannerText}>
              Football tournaments
            </Text>
            <TouchableOpacity>
              <Text style={HomeStyles.BannerBtn}>
                see more
                <IconAntDesign name="arrowright" size={16} color="#82CD47" />
              </Text>
            </TouchableOpacity>
          </View>
          <Swiper
            style={HomeStyles.swiper}
            showsPagination={false}
            loop={true}
            autoplay={true}
            autoplayTimeout={6}>
            {footballTournaments.map((image, i) => (
              <View key={i} style={{flex: 1}}>
                <Image
                  source={image}
                  style={{width: 340, height: 180, borderRadius: 15}}
                />
              </View>
            ))}
          </Swiper>
        </View>
        <View style={HomeStyles.Banner}>
          <View style={HomeStyles.BannerTitle}>
            <Text style={HomeStyles.BannerText}>
              Football Shop
            </Text>
            <TouchableOpacity>
              <Text style={HomeStyles.BannerBtn}>
                see more
                <IconAntDesign name="arrowright" size={16} color="#82CD47" />
              </Text>
            </TouchableOpacity>
          </View>
          <Swiper
            style={HomeStyles.swiper}
            showsPagination={false}
            loop={true}
            autoplay={true}
            autoplayTimeout={6}>
            {footballShop.map((image, i) => (
              <View key={i} style={{flex: 1}}>
                <Image
                  source={image}
                  style={{width: 340, height: 180, borderRadius: 15}}
                />
              </View>
            ))}
          </Swiper>
        </View>
        <View style={HomeStyles.bottom}>

        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
