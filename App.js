// Purpose: Main entry point for the application. This is where the app starts and renders the StartGameScreen component.
import { StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <View>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({});
