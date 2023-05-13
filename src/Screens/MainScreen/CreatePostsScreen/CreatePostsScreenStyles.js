import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',

    paddingBottom: 11,
    paddingTop: 55,
    paddingHorizontal: 16,

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

  cameraInfo: {
    height: 240,

    paddingHorizontal: 16,
    paddingTop: 32,
  },

  camera: {
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 240,
    backgroundColor: '#E8E8E8',
  },

  cameraClick: {
    marginLeft: 8,

    fontFamily: 'Roboto-700',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
    alignItems: 'center',
    color: '#ffffff',
  },

  cameraInform: {
    marginBottom: 48,

    fontFamily: 'Roboto-400',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,

    color: '#BDBDBD',
  },

  cameraName: {
    paddingBottom: 15,
    marginBottom: 32,

    fontFamily: 'Roboto-400',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,

    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',

    color: '#BDBDBD',
  },

  cameraLocality: {
    paddingBottom: 15,
    marginBottom: 32,

    fontFamily: 'Roboto-400',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,

    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',

    color: '#BDBDBD',
  },

  cameraButton: {
    display: 'flex',
    alignItems: 'center',

    marginBottom: 120,

    backgroundColor: '#F6F6F6',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
  },

  cameraTextButton: {
    fontFamily: 'Roboto-400',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    backgroundColor: '#F6F6F6',

    color: '#BDBDBD',
  },

  cameraClear: {
    marginLeft: 'auto',
    marginRight: 'auto',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#F6F6F6',
    width: 70,
    height: 40,
    borderRadius: 20,
  },
});
