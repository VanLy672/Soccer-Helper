import React, {useState, useEffect} from 'react';
import {Text, FlatList} from 'react-native';
import Post from '../components/Post';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const PostList = ({route}) => {
  const [posts, setPosts] = useState([]);
  const count = route.params || 0;
  const navigation = useNavigation();
  const getAllPost = () => {
    axios
      .get(
        'http://ec2-13-250-122-122.ap-southeast-1.compute.amazonaws.com/api/allposts',
        {},
      )
      .then(function (response) {
        console.log(response.data['data']);
        setPosts(response.data['data']);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const renderItem = ({item}) => (
    <Post
      avatar={item.avatar}
      username={item.fullname}
      content={item.content}
      image={item.image}
    />
  );
  useEffect(() => {
    getAllPost();
  }, [count]);
  return (
    <>
    <Text style={{ opacity: 0.5 }} onPress={()=>{
      navigation.navigate("PostForm")

    }}>Đăng bài để giao lưu</Text>
     <FlatList
      data={posts.reverse()}
      renderItem={renderItem}
      
    />
    </>
  );
};

export default PostList;
