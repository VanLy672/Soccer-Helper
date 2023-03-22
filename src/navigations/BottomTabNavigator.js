import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import PitchStack from './PitchStack';
import PostStack from './PostStack';
import Post from '../screens/AllPost';
import Profile from '../screens/Profile';
import MatchStack from './MatchStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Pitch') {
            iconName = 'soccer-field';
          } else if (route.name === 'Post') {
            iconName = 'plus';
          } else if (route.name === 'MatchStack') {
            iconName = 'menu';
          } else if (route.name === 'Profile') {
            iconName = 'account-settings-outline';
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: '#82CD47',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Pitch" component={PitchStack} />
      <Tab.Screen name="Post" component={PostStack} />
      <Tab.Screen
        name="MatchStack"
        component={MatchStack}
        options={{tabBarLabel: 'Match'}}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
