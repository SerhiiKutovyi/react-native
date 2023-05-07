import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import RegistrationScreen from './src/Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';
import CommentsScreen from './src/Screens/CommentsScreen/CommentsScreen';
import PostsScreen from './src/Screens/PostsScreen/PostsScreen';

const App = () => {
  return (
    <>
      {/* <View style={{ flex: 1 }}>
        <ImageBackground
          style={styles.image}
          source={require('./src/assets/images/ImageBackground.png')}
        > */}
      {/* <RegistrationScreen /> */}
      {/* <CommentsScreen /> */}
      {/* <CreatePostsScreen /> */}
      {/* <Home /> */}
      {/* <LoginScreen /> */}
      {/* <MapScreen /> */}
      <PostsScreen />
      {/* <ProfileScreen /> */}
      {/* </ImageBackground> */}
      <StatusBar style="auto" />
      {/* </View> */}
    </>
  );
};

export default App;

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
