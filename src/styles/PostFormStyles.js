import {StyleSheet} from 'react-native';

export default PostFormStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 80,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#82CD47',
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
    marginRight: 50,
    marginLeft: 50,
  },
  title: {
    fontSize: 18,
    color: 'white',
  },
  image: {
    marginLeft: '21%',
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  selectImage: {
    marginBottom: 20,
  },
  post: {
    position: 'absolute',
    top: -10,
  },
  buttonBack: {
    backgroundColor: '#82CD47',
    width: '15%',
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 7,
    right: 21.3,
    bottom: 21,
  },
});