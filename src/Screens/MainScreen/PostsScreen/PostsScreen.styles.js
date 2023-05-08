import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },

  titleBox: {
    paddingBottom: 11,
    paddingTop: 55,
    borderColor: 'red',

    Width: '100%',
    Height: 88,
  },

  title: {
    // fontFamily: 'Roboto',
    // fontStyle: normal,
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 22,

    textAlign: 'center',
    letterSpacing: -0.408,

    color: '#212121',
  },

  // USER INFO

  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  userAvatar: {
    width: 60,
    height: 60,

    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },

  userName: {
    marginLeft: 8,

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
    alignItems: 'center',
    color: '#212121',
  },

  userEmail: {
    marginLeft: 8,
  },
});
