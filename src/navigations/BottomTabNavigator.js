import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Map from '../screens/Map';
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

            if (route.name === 'Home') {
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
        })}
        tabBarOptions={{
          activeTintColor: '#82CD47',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Post" component={Post} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    );
};

export default BottomTabNavigator;