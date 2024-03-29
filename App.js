import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import Welcome from './src/screens/Welcome';
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import ForgotPW from "./src/screens/ForgotPW";
import Home from "./src/screens/Home";
import AuthStack from "./src/navigations/Auth";
import Map from "./src/screens/Map"
import PitchStack from "./src/navigations/PitchStack";

const App = () => {
  return <AuthStack />;
};

export default App;

const styles = StyleSheet.create({});
