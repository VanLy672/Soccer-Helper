import {StyleSheet} from 'react-native';

export default LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
  },
  header: {
    backgroundColor: '#82CD47',
    width: 392,
    height: 290,
    borderBottomLeftRadius: 70,
  },
  imageHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
    marginTop: 95,
  },
  swiper: {
    height: 180,
  },
  Banner: {
    marginTop: 40,
    marginLeft: '6.5%',
  },
  BannerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  BannerText: {
    marginTop: 15,
    marginRight: 15,
    marginBottom: 15,
    fontFamily: 'segoepr',
    fontSize: 14,
    fontWeight: '600',
  },
  BannerBtn: {
    marginTop: 15,
    marginRight: 25,
    marginBottom: 15,
    fontFamily: 'segoepr',
    color: '#82CD47',
    fontSize: 12,
    fontWeight: '600',
  },
  bottom: {
    padding: 30
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  overlay: {
    position: 'absolute',
    top: 20,
    left: 20,
    justifyContent: 'center',
  },
  text: {
    marginTop: 20,
    marginLeft: 30,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
});
