import { NavigationContainer } from '@react-navigation/native';

import useRout from '../../hooks/useRout';
import { StatusBar } from 'expo-status-bar';

import { View, Text } from 'react-native';
const routing = useRout();
const HomeScreen = () => {
  return (
    <>
      <NavigationContainer>{routing}</NavigationContainer>
      {/* <StatusBar style="auto" />; */}
    </>
  );
};
export default HomeScreen;
