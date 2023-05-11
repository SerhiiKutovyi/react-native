import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DefaultPostsScreen from '../../NestedScreen/DefaultPostsScreen/DefaultPostsScreen';
import MapScreen from '../../NestedScreen/MapScreen/MapScreen';
import CommentsScreen from '../../NestedScreen/CommentsScreen/CommentsScreen';

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator initialRouteName="Posts">
      <NestedScreen.Screen
        name="Posts"
        component={DefaultPostsScreen}
        options={{
          headerShown: false,
        }}
      />
      <NestedScreen.Screen name="Map" component={MapScreen} />
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
    </NestedScreen.Navigator>
  );
};
export default PostsScreen;
