import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import PitchStack from './PitchStack';
import Post from '../screens/Post';
import Settings from '../screens/Settings';
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

            if (route.name === 'Homes') {
              iconName = 'home';
            } else if (route.name === 'Map') {
              iconName = 'map';
            } else if (route.name === 'Post') {
              iconName = 'plus';
            } else if (route.name === 'Settings') {
              iconName = 'settings';
            }

            return <IconFeather name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#82CD47',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Homes" component={Home} />
        <Tab.Screen name="Map" component={PitchStack} />
        <Tab.Screen name="Post" component={Post} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    );
};

export default BottomTabNavigator;