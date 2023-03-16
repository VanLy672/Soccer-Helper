import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TextInput,
  Alert,
  TouchableOpacity
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import PostFormStyles from '../styles/PostFormStyles';
import IconIonicons from 'react-native-vector-icons/Ionicons';

const PostForm = () => {
  const [user_id, setUser_id] = useState(null);
  const [content, setContent] = useState('');
  const [image, setImage] = useState({
    uri: '',
    name: '',
    type: '',
  });
  const [count, setCount] = useState(0);
  const navigation = useNavigation();
  useEffect(() => {
    // Lấy user_id từ AsyncStorage
    const getUser_id = async () => {
      try {
        const value = await AsyncStorage.getItem('User_id');
        if (value !== null) {
          setUser_id(value);
        }
      } catch (error) {
        console.log(error);
        Alert.alert('Lỗi đăng nhập');
      }
    };
    getUser_id();
  }, []);
  console.log(user_id);
  const selectImage = async () => {
    try {
      const imageResult = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });

      if (imageResult) {
        let localUri = imageResult.path;
        let filename = localUri.split('/').pop();
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : 'image';
        setImage({
          uri: localUri,
          name: filename,
          type: type,
        });
      }
    } catch (error) {}
  };
  const handlePress = () => {
    if (image.uri === '') {
      axios
        .post(
          'http://ec2-13-250-122-122.ap-southeast-1.compute.amazonaws.com/api/posts',
          {
            user_id: user_id,
            content: content,
          },
        )
        .then(function (response) {
          console.log(response.data['message']);
          setCount(count + 1);
          navigation.navigate('PostList', {
            count: count + 1,
          });
        })
        .catch(function (error) {
          console.log('Vinh ơi lỗi rồi');
          Alert.alert('Lỗi không thể tạo post');
        });
    } else {
      // Nếu có ảnh, thực hiện post lên server
      const formData = new FormData();
      formData.append('user_id', user_id);
      formData.append('content', content);
      formData.append('image', {
        uri: image.uri,
        name: image.name,
        type: image.type,
      });
      axios
        .post(
          'http://ec2-13-250-122-122.ap-southeast-1.compute.amazonaws.com/api/posts',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        )
        .then(function (response) {
          console.log(response.data['message']);
          setCount(count + 1);
          navigation.navigate('PostList', {
            count: count + 1,
          });
        })
        .catch(function (error) {
          Alert.alert('Lỗi đăng nhập');
        });
    }
  };

  const cancelSelectImage = () => {
    setImage({uri: ''});
  };

  return (
    <View style={PostFormStyles.container}>
      <TouchableOpacity
        style={PostFormStyles.buttonBack}
        onPress={() => navigation.goBack()}>
        <IconIonicons name="arrow-back" size={27} color="white" />
      </TouchableOpacity>
      <Text style={PostFormStyles.label}>Create Post</Text>
      <TextInput
        style={PostFormStyles.input}
        multiline={true}
        onChangeText={text => setContent(text)}
        value={content}
        placeholder="Write something here."
      />

      {image.uri !== '' && (
        <View style={PostFormStyles.imageContainer}>
          <TouchableOpacity
            style={{alignSelf: 'flex-end'}}
            onPress={cancelSelectImage}>
            <IconIonicons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
      )}

      {image.uri !== '' && (
        <View style={PostFormStyles.imageContainer}>
          <Image source={{uri: image.uri}} style={PostFormStyles.image} />
        </View>
      )}
      <View style={PostFormStyles.buttonContainer}>
        <TouchableOpacity onPress={selectImage} style={PostFormStyles.button}>
          <Text style={PostFormStyles.title}>
            <IconIonicons name="image" size={24} color="white" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress} style={PostFormStyles.button}>
          <Text style={PostFormStyles.title}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostForm;