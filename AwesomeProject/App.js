import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import RegistrationScreen from './src/components/Screens/RegistrationScreen/RegistrationScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../AwesomeProject/src/assets/images/ImageBackground.png')}
      >
        <RegistrationScreen />
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    // alignItems: 'center',
  },
});
