import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//icon import
import { SimpleLineIcons } from '@expo/vector-icons';

import RegistrationScreen from 'src/Screens/AuthScreen/RegistrationScreen/RegistrationScreen';
import LoginScreen from 'src/Screens/AuthScreen/LoginScreen/LoginScreen';
import CommentsScreen from 'src/Screens/CommentsScreen/CommentsScreen';
import PostsScreen from 'src/Screens/MainScreen/PostsScreen/PostsScreen';
import CreatePostsScreen from 'src/Screens/MainScreen/CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from 'src/Screens/MainScreen/ProfileScreen/ProfileScreen';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export default useRout = isAuth => {
  if (isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator>
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => (
            <SimpleLineIcons name="grid" size={24} color="black" />
          ),
        }}
      />
      <MainTab.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{ headerShown: false }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </MainTab.Navigator>
  );
};
