import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import Post from '../components/Post';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);
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
  }, []);
  return <FlatList data={posts} renderItem={renderItem} />;
};

export default PostList;
