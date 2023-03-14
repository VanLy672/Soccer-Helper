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
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

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

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nội dung</Text>
      <TextInput
        style={styles.input}
        multiline={true}
        onChangeText={text => setContent(text)}
        value={content}
      />

      {image.uri !== '' && (
        <Image source={{uri: image.uri}} style={styles.image} />
      )}
      <Button
        title="Select Image"
        color="#FF6F61"
        onPress={selectImage}
        style={styles.button}
      />
      <Button
        title="Post"
        color="#FF6F61"
        onPress={handlePress}
        style={styles.post}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 80,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#FF6F61',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  selectImage: {
    marginBottom: 20,
  },
  post: {
    position: 'absolute',
    top: -10,
  },
});

export default PostForm;