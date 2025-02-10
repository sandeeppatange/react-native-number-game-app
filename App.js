// Purpose: Main entry point for the application. This is where the app starts and renders the StartGameScreen component.
import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Import the LinearGradient component from the expo-linear-gradient library
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />; // Return the AppLoading component if the fonts are not loaded
  }

  function startGameHandler(selectedNumber) {
    setUserNumber(selectedNumber);
    setIsGameOver(false);
  }

  let screen = <StartGameScreen onStartGame={startGameHandler} />;

  function gameOverHandler() {
    setIsGameOver(true);
  }
  function restartGameHandler() {
    setUserNumber(null);
    setIsGameOver(true);
  }
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (isGameOver && userNumber) {
    screen = (
      <GameOverScreen userNumber={userNumber} onRestart={restartGameHandler} />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary800, Colors.accent500, Colors.primary800]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.imagebackground}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
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
