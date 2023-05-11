import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

//icon import
import { SimpleLineIcons, Feather } from '@expo/vector-icons';

import RegistrationScreen from 'src/Screens/AuthScreen/RegistrationScreen/RegistrationScreen';
import LoginScreen from 'src/Screens/AuthScreen/LoginScreen/LoginScreen';
import PostsScreen from '../Screens/MainScreen/PostsScreen/PostsScreen';
import CreatePostsScreen from 'src/Screens/MainScreen/CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from 'src/Screens/MainScreen/ProfileScreen/ProfileScreen';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

//TODO задать нижней навигации высоту

export default useRout = isAuth => {
  if (!isAuth) {
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
    <MainTab.Navigator
      initialRouteName="PostsScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Profile') {
            return <Feather name="user" size={size} color={color} />;
          } else if (route.name === 'Create') {
            return (
              <Feather
                name="plus"
                size={size}
                color="#fff"
                style={styles.addPost}
              />
            );
          } else if (route.name === 'PostsScreen') {
            return <SimpleLineIcons name="grid" size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: '#FF6C00',
        tabBarShowLabel: false,
      })}
    >
      <MainTab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainTab.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          headerShown: false,
          tabBarStyle: { display: 'none' },
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      {() => <ProfileScreen navigation={navigation} />}
    </MainTab.Navigator>
  );
};

const styles = StyleSheet.create({
  addPost: {
    textAlign: 'center',
    backgroundColor: '#FF6C00',
    width: 70,
    height: 40,
    borderRadius: 20,
    paddingTop: 9,
  },
});
