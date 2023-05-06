import { StyleSheet, ImageBackground } from 'react-native';

const Background = ({ stylesBackground, children }) => {
  return (
    <>
      <ImageBackground
        style={{ ...styles.image, ...stylesBackground }}
        source={require('../../../assets/images/ImageBackground.png')}
      >
        {children}
      </ImageBackground>
    </>
  );
};

export default Background;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    textAlign: 'center',
    // alignItems: 'center',
  },
});
