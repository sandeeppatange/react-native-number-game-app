import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import NumberGuessContainer from "../components/game/NumberGuessContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber }) {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(direction) {
    // direction -> lower or higher
    if (
      (direction == "lower" && currentGuess < userNumber) ||
      (direction == "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont Lie!", "You are giving a wrong information.", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction == "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    console.log(
      "userInput:currentGuess:newRndNumber->" +
        userNumber +
        ":" +
        currentGuess +
        ":" +
        newRndNumber
    );
    console.log("minBoundary:maxBoundary ->" + minBoundary + ":" + maxBoundary);
    if (newRndNumber == userNumber) {
      Alert.alert("Game Over!", "Selected Number Matched!", [
        { text: "Game Over, Bye Bye.", style: "default" },
      ]);
      return;
    }
  }
  return (
    <View style={styles.gameScreenContainer}>
      <Title>Opponent's Guess</Title>
      <NumberGuessContainer>{currentGuess}</NumberGuessContainer>
      <View>
        <Text>Your input number is?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            Lower(-)
          </PrimaryButton>
          <PrimaryButton on onPress={nextGuessHandler.bind(this, "higher")}>
            Higher(+)
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  gameScreenContainer: {
    flex: 1,
    padding: 24,
    marginTop: 30,
  },
});
