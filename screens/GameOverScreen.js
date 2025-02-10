import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import InstructionText from "../components/ui/InstructionText";
import Card from "../components/ui/Card";

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <Title>The Game is Over!</Title>
      <Card>
        <InstructionText>Number was: {userNumber}</InstructionText>
        <InstructionText>No. of rounds: {roundsNumber}</InstructionText>
        <PrimaryButton onPress={onRestart}>START NEW GAME</PrimaryButton>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
