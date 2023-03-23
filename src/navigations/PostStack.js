import {Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PostList from '../screens/AllPost';
import PostForm from '../screens/PostForm';
const Stack = createNativeStackNavigator();
const PostStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="PostList" component={PostList} />
      <Stack.Screen name="PostForm" component={PostForm} />
    </Stack.Navigator>
  );
};

export default PostStack;
