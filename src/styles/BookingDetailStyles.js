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
});
