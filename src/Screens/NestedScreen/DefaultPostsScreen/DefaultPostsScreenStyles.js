import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',

    paddingBottom: 11,
    paddingTop: 55,

    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },

  title: {
    textAlign: 'center',
    flex: 1,
    left: Dimensions.get('window').width / 2 - 167.5 - 32 / 2,

    fontFamily: 'Roboto-500',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: '#212121',
  },

  svgLogOut: {},

  // USER INFO

  userInfo: {
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

  publications: {
    height: 299,
  },

  publicationsImg: {
    height: '100%',
    width: '100%',
  },
});
