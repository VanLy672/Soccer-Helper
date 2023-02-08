import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Welcome from './src/screens/Welcome';
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import ForgotPW from "./src/screens/ForgotPW";

const App = () => {
  return (
    <View>
      <ForgotPW />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
