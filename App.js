// Purpose: Main entry point for the application. This is where the app starts and renders the StartGameScreen component.
import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Import the LinearGradient component from the expo-linear-gradient library
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function startGameHandler(selectedNumber) {
    setUserNumber(selectedNumber);
  }

  let screen = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.imagebackground}
      >
        {screen}
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
