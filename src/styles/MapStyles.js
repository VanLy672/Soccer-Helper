import {StyleSheet} from 'react-native';

export default MapStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
  },
  pitchListContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    margin: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: '#ccc',
  },
  touchableOpacityContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
});
