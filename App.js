import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import useLoadFonts from 'src/hooks/useLoadFonts';
import useRout from './src/hooks/useRout';

const App = () => {
  const appIsReady = useLoadFonts();
  const routing = useRout();

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <NavigationContainer>{routing}</NavigationContainer>
      {/* <CommentsScreen /> */}
      {/* <Home /> */}
      {/* <MapScreen /> */}
      <StatusBar style="auto" />
    </>
  );
};

export default App;
