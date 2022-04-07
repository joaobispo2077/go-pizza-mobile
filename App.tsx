import { DMSans_400Regular, useFonts } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { ExampleComponent } from '@components/example';
import { theme } from '@src/styles/themes';

export default function App() {
  const [isFontsLoaded] = useFonts([
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  ]);

  if (!isFontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text>Go pizza app!</Text>
        <ExampleComponent />
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}
