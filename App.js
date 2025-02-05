// Purpose: Main entry point for the application. This is where the app starts and renders the StartGameScreen component.
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Import the LinearGradient component from the expo-linear-gradient library
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
