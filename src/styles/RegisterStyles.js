import {StyleSheet} from 'react-native';

export default RegisterStyles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  image: {
  },
  registerTitle: {
    fontFamily: 'segoepr',
    fontWeight: '600',
    color: '#82CD47',
    fontSize: 40,
  },
  formInput: {
    marginTop: 10,
    width: 265,
    height: 42,
    flexDirection: 'row',
    borderBottomWidth: 0.8,
    borderBottomColor: '#82CD47',
  },
  icon: {
    marginTop: 10,
  },
  textInput: {
    width: '100%',
    fontFamily: 'segoepr',
    fontSize: 12,
  },
  registerWithSocial: {
    flexDirection: 'row',
    marginBottom: 65
  },
  text: {
    fontFamily: 'segoepr',
    fontSize: 10,
    marginBottom: 30,
  },
  registerText: {
    fontFamily: 'segoepr',
    fontSize: 10,
    color: '#82CD47',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  btnLogin: {
    margin: 15,
    width: 120,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#82CD47',
    fontFamily: 'segoepr',
    fontWeight: '600',
    fontSize: 12,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
