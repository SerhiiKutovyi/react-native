import { StatusBar } from 'expo-status-bar';
import RegistrationScreen from 'src/Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';
import CommentsScreen from './src/Screens/CommentsScreen/CommentsScreen';
import PostsScreen from './src/Screens/PostsScreen/PostsScreen';

const App = () => {
  return (
    <>
      {/* <RegistrationScreen /> */}
      {/* <CommentsScreen /> */}
      {/* <CreatePostsScreen /> */}
      {/* <Home /> */}
      <LoginScreen />
      {/* <MapScreen /> */}
      {/* <PostsScreen /> */}
      {/* <ProfileScreen /> */}
      {/* </ImageBackground> */}
      <StatusBar style="auto" />
    </>
  );
};

export default App;
