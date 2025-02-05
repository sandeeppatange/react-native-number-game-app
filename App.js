// Purpose: Main entry point for the application. This is where the app starts and renders the StartGameScreen component.
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Import the LinearGradient component from the expo-linear-gradient library
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.imagebackground}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imagebackground: {
    opacity: 0.2,
  },
});
