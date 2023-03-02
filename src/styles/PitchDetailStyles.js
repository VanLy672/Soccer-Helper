import {StyleSheet} from 'react-native';

export default PitchDetailStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewImage: {
    width: '100%',
    paddingBottom: 5,
  },
  detail: {
    paddingHorizontal: 15,
  },
  iconDetail: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '2%',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 15,
  },
  textBold: {
    color: 'black',
    fontSize: 21,
    fontWeight: '500',
  },
  infoPitch: {
    maxWidth: '90%',
    flexDirection: 'row',
    margin: 3,
  },
  iconInfo: {
    paddingRight: 15,
  },
  warning: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dashed: {
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 1,
    borderColor: '#ccc',
  },
  buttonBack: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '13%',
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 7
  },
});
