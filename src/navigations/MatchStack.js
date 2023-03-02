import {Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BookingDetail from '../screens/BookingDetail';
import AllMatch from '../screens/AllMatch';
import Booking from '../screens/Booking';

const Stack = createNativeStackNavigator();

const MatchStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AllMatch" component={AllMatch} />
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name="BookingDetail" component={BookingDetail} />
    </Stack.Navigator>
  );
};

export default MatchStack;
