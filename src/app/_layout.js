import { Stack } from "expo-router";
import { StatusBar, useColorScheme,View } from "react-native";
import { useTheme, PaperProvider } from "react-native-paper";
import { getMaterial3Theme } from '@pchmn/expo-material3-theme';
// import { StatusBar } from 'expo-status-bar';
export default function RootLayout() {
  const colorScheme=useColorScheme();
  const themeFromModule=getMaterial3Theme()[colorScheme]
  const theme = {
    colors: {
     ...themeFromModule
    }, // Copy it from the color codes  colors: yourGeneratedLightOrDarkScheme.colorsscheme and then use it here
  };
  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor={theme.colors.surfaceVariant} />
      <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: "Seasons",
            }}
          />
        </Stack>
      </View>
    </PaperProvider>
  );
}
