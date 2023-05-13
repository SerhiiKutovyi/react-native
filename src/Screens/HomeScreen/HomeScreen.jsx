import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';

import useRout from '../../hooks/useRout';

const HomeScreen = () => {
  const [iasReady, setIasReady] = useState();
  const routing = useRout('qwe');
  return <NavigationContainer>{routing}</NavigationContainer>;
};
export default HomeScreen;
