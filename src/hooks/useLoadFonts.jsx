import { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

function loadAppFonts() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          'Roboto-400': require('assets/fonts/Roboto-Regular.ttf'),
          'Roboto-700': require('assets/fonts/Roboto-Bold.ttf'),
          'Roboto-300': require('assets/fonts/Roboto-Light.ttf'),
          'Roboto-500': require('assets/fonts/Roboto-Medium.ttf'),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);
  return appIsReady;
}

export default loadAppFonts;
