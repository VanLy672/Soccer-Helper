import { StyleSheet } from "react-native";

export default WelcomeStyles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  image: {
    paddingTop: 100,
  },
  welcomeText: {
    fontFamily: 'segoepr',
    fontWeight: '600',
    fontSize: 25,
  },
  slogan: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sloganText: {
    fontFamily: 'segoepr',
    fontWeight: '600',
    fontSize: 15,
    color: '#82CD47',
    marginTop: 30,
  },
  sloganTexts: {
    fontFamily: 'segoepr',
    fontWeight: '600',
    fontSize: 15,
    color: '#82CD47',
  },
  btnStarted: {
    marginTop: 100,
    width: 256,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#82CD47',
    fontFamily: 'segoepr',
    fontWeight: '600',

    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});