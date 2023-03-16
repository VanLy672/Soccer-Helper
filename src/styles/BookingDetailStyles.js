import {StyleSheet} from 'react-native';

export default BookingDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2f4f4f',
  },
  fieldContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  fieldLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#808080',
  },
  fieldValue: {
    fontSize: 16,
    color: '#000',
  },
  buttonBack: {
    backgroundColor: '#82CD47',
    width: '15%',
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 7,
    right: 20,
    bottom: 20,
  },
  btnContainer: {
    alignItems: 'center',
  },
  btnMap: {
    backgroundColor: '#82CD47',
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    height: 50,
  },
  btnText: {
    fontSize: 17,
    color: 'white',
  },
});
