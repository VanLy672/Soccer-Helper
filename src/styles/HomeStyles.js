import {StyleSheet} from 'react-native';

export default LoginStyles = StyleSheet.create({
  container: {
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
});
