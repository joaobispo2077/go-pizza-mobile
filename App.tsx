import { DMSans_400Regular, useFonts } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

import { ExampleComponent } from '@components/example';

export default function App() {
  const [isFontsLoaded] = useFonts([
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  ]);

  if (!isFontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <Text>Go pizza app!</Text>
      <ExampleComponent />
      <StatusBar style="auto" />
    </View>
  );
}
