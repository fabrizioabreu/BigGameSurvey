import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Play_400Regular,
  Play_700Bold,
} from "@expo-google-fonts/play";

import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Play_400Regular,
    Play_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <Routes />
        <StatusBar style="light" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
