import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BookingDetailStyles from '../styles/BookingDetailStyles';

const BookingDetail = ({route}) => {
  const {id, fullname, namepitch, avatar, day, time, contact, description} =
    route.params;
  return (
    <View style={BookingDetailStyles.container}>
      <Text style={BookingDetailStyles.title}>Thông tin trận đấu đang chờ</Text>
      <View style={BookingDetailStyles.fieldContainer}>
        <Text style={BookingDetailStyles.fieldLabel}>Tên người dùng:</Text>
        <Text style={BookingDetailStyles.fieldValue}>{fullname}</Text>
      </View>
      <View style={BookingDetailStyles.fieldContainer}>
        <Text style={BookingDetailStyles.fieldLabel}>Tên sân bóng:</Text>
        <Text style={BookingDetailStyles.fieldValue}>{namepitch}</Text>
      </View>
      <View style={BookingDetailStyles.fieldContainer}>
        <Text style={BookingDetailStyles.fieldLabel}>Thời gian bắt đầu:</Text>
        <Text style={BookingDetailStyles.fieldValue}>{day}</Text>
      </View>
      <View style={BookingDetailStyles.fieldContainer}>
        <Text style={BookingDetailStyles.fieldLabel}>Thời gian thi đấu</Text>
        <Text style={BookingDetailStyles.fieldValue}> {time} phút</Text>
      </View>
      <View style={BookingDetailStyles.fieldContainer}>
        <Text style={BookingDetailStyles.fieldLabel}>Liên hệ:</Text>
        <Text style={BookingDetailStyles.fieldValue}>{contact}</Text>
      </View>
      <View style={BookingDetailStyles.fieldContainer}>
        <Text style={BookingDetailStyles.fieldLabel}>Mô tả:</Text>
        <Text style={BookingDetailStyles.fieldValue}>{description}</Text>
      </View>
    </View>
  );
};

export default BookingDetail;
