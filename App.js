import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StatusBar } from 'expo-status-bar';
import RegistrationScreen from 'src/Screens/AuthScreen/RegistrationScreen/RegistrationScreen';
import LoginScreen from 'src/Screens/AuthScreen/LoginScreen/LoginScreen';
import CommentsScreen from 'src/Screens/CommentsScreen/CommentsScreen';
import PostsScreen from 'src/Screens/MainScreen/PostsScreen/PostsScreen';
import CreatePostsScreen from 'src/Screens/MainScreen/CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from './src/Screens/MainScreen/ProfileScreen';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <MainTab.Navigator>
          <MainTab.Screen name="Posts" component={PostsScreen} />
          <MainTab.Screen name="Create" component={CreatePostsScreen} />
          <MainTab.Screen name="Profile" component={ProfileScreen} />
        </MainTab.Navigator>
      </NavigationContainer>
      {/* <CommentsScreen /> */}
      {/* <Home /> */}
      {/* <MapScreen /> */}
      {/* </ImageBackground> */}

      <StatusBar style="auto" />
    </>
  );
};

export default App;

//Auth-----------------------

//         <AuthStack.Navigator>
//           <AuthStack.Screen
//             name="Login"
//             component={LoginScreen}
//             options={{ headerShown: false }}
//           />
//           <AuthStack.Screen
//             name="Register"
//             component={RegistrationScreen}
//             options={{ headerShown: false }}
//           />
//  </AuthStack.Navigator>
