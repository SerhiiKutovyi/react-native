import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import RegistrationScreen from './src/Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';

const App = () => {
  return (
    <>
      {/* <ImageBackground
        style={styles.image}
        source={require('../AwesomeProject/src/assets/images/ImageBackground.png')}
      > */}
      <RegistrationScreen />
      {/* <LoginScreen /> */}
      {/* </ImageBackground> */}
      <StatusBar style="auto" />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
