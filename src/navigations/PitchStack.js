import {Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Map from '../screens/Map';
import PitchDetail from '../screens/PitchDetail';
const Stack = createNativeStackNavigator();
const PitchStack = () => {
  return (

      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Maps"
          component={Map}
        />
        <Stack.Screen
          name="PitchDetail"
          component={PitchDetail}
        />
      </Stack.Navigator>

  );
};

export default PitchStack;
