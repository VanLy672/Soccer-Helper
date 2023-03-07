import {StyleSheet} from 'react-native';

export default BookingStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#82CD47',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  picker: {
    width: 200,
    height: 50,
    paddingRight: 100,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    marginLeft: -150,
  },
  buttonBack: {
    backgroundColor: '#82CD47',
    width: '15%',
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 7,
    right: 164,
    bottom: 115,
  },
});
