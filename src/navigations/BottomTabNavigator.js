import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import PitchStack from './PitchStack';
import PostStack from './PostStack';
import Post from '../screens/AllPost';
import Profile from '../screens/Profile';
import MatchStack from './MatchStack';
import IconFeather from 'react-native-vector-icons/Feather';

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
          } else if (route.name === 'Map') {
            iconName = 'map';
          } else if (route.name === 'Post') {
            iconName = 'plus';
          } else if (route.name === 'MatchStack') {
            iconName = 'plus';
          } else if (route.name === 'Profile') {
            iconName = 'settings';
          }

          return <IconFeather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#82CD47',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Map" component={PitchStack} />
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
