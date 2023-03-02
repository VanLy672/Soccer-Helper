import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BookingDetail = ({route}) => {
  const {id, fullname, namepitch, avatar, day, time, contact, description} =
    route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông tin trận đấu đang chờ</Text>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Tên người dùng:</Text>
        <Text style={styles.fieldValue}>{fullname}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Tên sân bóng:</Text>
        <Text style={styles.fieldValue}>{namepitch}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Thời gian bắt đầu:</Text>
        <Text style={styles.fieldValue}>{day}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Thời gian thi đấu</Text>
        <Text style={styles.fieldValue}> {time} phút</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Liên hệ:</Text>
        <Text style={styles.fieldValue}>{contact}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Mô tả:</Text>
        <Text style={styles.fieldValue}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2f4f4f',
  },
  fieldContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  fieldLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#808080',
  },
  fieldValue: {
    fontSize: 16,
    color: '#000',
  },
});

export default BookingDetail;
