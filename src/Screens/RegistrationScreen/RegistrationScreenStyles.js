import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  btnPress: {
    position: 'absolute',
    zIndex: 2,
    left: Dimensions.get('window').width / 2 - 90,
    top: 70,

    borderRadius: 50,
  },

  photo: {
    width: 120,
    height: 120,
    position: 'absolute',
    top: -60,
    left: Dimensions.get('window').width / 2 - 90,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },

  avatarImg: {
    height: '100%',
    width: '100%',
    borderRadius: 16,
    resizeMode: 'contain',
  },

  title: {
    marginBottom: 32,
    paddingTop: 96,
    color: '#212121',
    textAlign: 'center',
    fontSize: 30,
  },

  form: {
    position: 'relative',

    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
  },

  login: {
    height: 50,
    width: 343,
    marginBottom: 16,
    paddingLeft: 16,

    // fontFamily: 'Roboto',
    // fontWeight: 400,
    fontSize: 16,
    // lineHeight: 19,
    // borderWidth: 3,
    // borderColor: '#fff',
    borderRadius: 8,
    color: '#BDBDBD',
  },

  email: {
    height: 50,
    width: 343,

    marginBottom: 16,
    paddingLeft: 16,

    fontSize: 16,

    borderRadius: 8,
    color: '#BDBDBD',
  },

  password: {
    height: 50,
    width: 343,

    paddingLeft: 16,
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
  // signIn: {
  //   marginBottom: 'auto',
  // },
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
