import {StyleSheet} from 'react-native';

export default LoadingStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 16,
    fontSize: 18,
    fontFamily: 'segoepr',
  },
  imageContainer: {
    padding: 20,
    borderWidth: 0.5,
    borderColor: '#82CD47',
    borderRadius: 20,
  },
  image: {
    borderWidth: 0.5,
    borderColor: '#82CD47',
    borderRadius: 17,
  },
  loadingEffect: {
    top: 250,
  },
  dots: {
    color: '#82CD47',
  },
});
