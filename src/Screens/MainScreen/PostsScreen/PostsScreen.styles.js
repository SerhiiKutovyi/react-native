import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    paddingBottom: 11,
    paddingTop: 55,

    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',

    backgroundColor: '#FFFFFF',
    // boxShadow: '0px 0.5px 0px rgba(0, 0, 0, 0.3)',
    // backdropFilter: 'blur(13.5914)',
    //
  },

  title: {
    fontFamily: 'Roboto-500',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 22,

    textAlign: 'center',
    letterSpacing: -0.408,

    color: '#212121',
  },

  // USER INFO

  userInfo: {
    paddingHorizontal: 16,
    paddingVertical: 32,

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

    fontFamily: 'Roboto-700',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
    alignItems: 'center',
    color: '#212121',
  },

  userEmail: {
    marginLeft: 8,
    fontFamily: 'Roboto-400',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 13,

    color: 'rgba(33, 33, 33, 0.8)',
  },
});
