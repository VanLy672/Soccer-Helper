import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Post = ({avatar, username, content, image}) => {
  if (image === 'http://ec2-13-250-122-122.ap-southeast-1.compute.amazonaws.com/') {
    return (
      <View style={styles.container}>
        <View style={styles.userInfo}>
          <Image source={{uri: avatar}} style={styles.avatar} />
          <Text style={styles.username}>{username}</Text>
        </View>
        <View style={styles.content}>
          <Text>{content}</Text>
        </View>
      </View>
    );
  }
    return (
      <View style={styles.container}>
        <View style={styles.userInfo}>
          <Image source={{uri: avatar}} style={styles.avatar} />
          <Text style={styles.username}>{username}</Text>
        </View>
        <View style={styles.content}>
          <Text>{content}</Text>
          {image && (
            <View style={styles.imageContainer}>
              <Image source={{uri: image}} style={styles.image} />
            </View>
          )}
        </View>
      </View>
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
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  content: {
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10,
    borderRadius: 10,
  },
  imageContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Post;
