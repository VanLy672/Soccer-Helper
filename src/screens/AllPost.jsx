import React, {useState, useEffect} from 'react';
import {
  Text,
  FlatList,
  TouchableOpacity,
  View,
  RefreshControl,
} from 'react-native';
import Post from '../components/Post';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import AllPostStyles from '../styles/AllPostStyles';

const PostList = ({route}) => {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [reverseOrder, setReverseOrder] = useState(false);
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
        setRefreshing(false);
      })
      .catch(function (error) {
        console.log(error);
        setRefreshing(false);
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

  const onRefresh = React.useCallback(() => {
    setReverseOrder(!reverseOrder);
    setRefreshing(true);
    getAllPost();
  }, [reverseOrder]);

  return (
    <>
      <View style={AllPostStyles.container}>
        <TouchableOpacity
          style={AllPostStyles.btnCreate}
          onPress={() => {
            navigation.navigate('PostForm');
          }}>
          <Text style={AllPostStyles.btnText}>Create Post</Text>
        </TouchableOpacity>
        <FlatList
          data={posts.slice().reverse()}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </>
  );
};

export default PostList;
