import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  form: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
  },

  avatarWrap: {
    position: 'absolute',
    top: -60,
    left: Dimensions.get('window').width / 2 - 60 - 32 / 2,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },

  avatarImg: {
    position: 'relative',
    width: 120,
    height: 120,
    resizeMode: 'contain',
    borderRadius: 16,
  },

  avatarBtn: {
    position: 'absolute',
    top: 70,
    right: -15,
    width: 30,
    height: 30,
  },

  avatarBtnIconWrap: {},
  avatarBtnIcon: {},

  title: {
    marginTop: 96,
    marginBottom: 32,
    color: '#212121',
    textAlign: 'center',
    fontSize: 30,
  },

  login: {
    height: 50,
    width: '100%',
    marginBottom: 16,
    // // fontFamily: 'Roboto',
    // // fontWeight: 400,
    fontSize: 16,
    // // lineHeight: 19,
    // // borderWidth: 3,
    // // borderColor: '#fff',
    borderRadius: 8,
    color: '#BDBDBD',
  },

  email: {
    height: 50,
    width: '100%',
    marginBottom: 16,
    fontSize: 16,
    borderRadius: 8,
    color: '#BDBDBD',
  },

  password: {
    height: 50,
    width: '100%',
    marginBottom: 43,
    fontSize: 16,
    borderRadius: 8,
    color: '#BDBDBD',
  },

  ShowPassword: {
    top: 10,
    left: -16,
    color: '#1B4371',
    fontSize: 16,
  },

  button: {
    marginBottom: 16,
    backgroundColor: '#FF6C00',
    paddingVertical: 16,
    paddingHorizontal: 93.5,
    borderRadius: 100,
  },

  signIn: {
    marginBottom: 'auto',
  },

  homeIndication: {
    marginTop: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 34,
    width: '100%',
  },

  indication: {
    marginBottom: 8,
    width: 134,
    height: 5,
    borderRadius: 100,
    backgroundColor: '#212121',
  },
});
