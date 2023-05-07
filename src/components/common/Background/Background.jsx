import { StyleSheet, ImageBackground } from 'react-native';
import { Dimensions } from 'react-native';

const Background = ({ stylesBackground, children }) => {
  console.log(
    'width',
    Dimensions.get('window').width,
    'height',
    Dimensions.get('window').height
  );
  return (
    <>
      <ImageBackground
        style={{ ...styles.image, ...stylesBackground }}
        source={require('../../../assets/images/ImageBackground.png')}
        // resizeMode="cover"
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
    justifyContent: 'flex-end',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'stretch',
    textAlign: 'center',
  },
});
