import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  form: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
  },

  title: {
    marginVertical: 32,

    color: '#212121',
    textAlign: 'center',
    fontSize: 30,
  },

  email: {
    padding: 16,
    width: '100%',
    marginBottom: 16,
    fontSize: 16,
    borderRadius: 8,
    color: '#BDBDBD',
  },

  password: {
    padding: 16,
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

  buttonSubmit: {
    display: 'flex',
    alignItems: 'center',

    marginBottom: 16,

    backgroundColor: '#FF6C00',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
  },

  buttonSignIn: {
    marginBottom: 111,
    textAlign: 'center',
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
