import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <View>
      <Text>
        App
        <Icon name="rocket" size={30} color="#900" />;
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
