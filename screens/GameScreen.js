import { useState, useEffect } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import Title from "../components/ui/Title";
import NumberGuessContainer from "../components/game/NumberGuessContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import ButtonsContainer from "../components/ui/ButtonsContainer.js";
import ButtonContainer from "../components/ui/ButtonContainer.js";

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

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess == userNumber) {
      minBoundary = 1;
      maxBoundary = 100;
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

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
    setGuessRounds((prevGuessRounds) => [...prevGuessRounds, newRndNumber]);
    console.log(
      "userInput:currentGuess:newRndNumber->" +
        userNumber +
        ":" +
        currentGuess +
        ":" +
        newRndNumber
    );
    console.log("minBoundary:maxBoundary ->" + minBoundary + ":" + maxBoundary);
    /*if (newRndNumber == userNumber) {
      Alert.alert("Game Over!", "Selected Number Matched!", [
        { text: "Game Over, Bye Bye.", style: "default" },
      ]);
      return;
    }*/
  }
  return (
    <View style={styles.gameScreenContainer}>
      <Title>Opponent's Guess</Title>
      <NumberGuessContainer>{currentGuess}</NumberGuessContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Your input number is?
        </InstructionText>
        <ButtonsContainer>
          <ButtonContainer>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              Lower {"\n"}
              <Ionicons name="remove" size={30} color="white" />
            </PrimaryButton>
          </ButtonContainer>
          <ButtonContainer>
            <PrimaryButton on onPress={nextGuessHandler.bind(this, "higher")}>
              Higher {"\n"}
              <Ionicons name="add" size={30} color="white" />
            </PrimaryButton>
          </ButtonContainer>
        </ButtonsContainer>
      </Card>
      <View>
        {guessRounds.map((guess, index) => (
          <Text key={index}>
            Round {index + 1}: {guess}
          </Text>
        ))}
      </View>
      <View>
        <PrimaryButton
          onPress={() => {
            onGameOver();
          }}
        >
          <AntDesign name="reload1" size={24} color="white" />
        </PrimaryButton>
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
  instructionText: {
    marginBottom: 10,
  },
});
