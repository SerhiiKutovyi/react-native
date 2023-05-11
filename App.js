import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import useLoadFonts from 'src/hooks/useLoadFonts';

const App = () => {
  const appIsReady = useLoadFonts();

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <HomeScreen />
    </>
  );
};

export default App;
