import React from "react";
import { View, StyleSheet, Image } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import InstructionText from "../components/ui/InstructionText";
import Card from "../components/ui/Card";
import Colors from "../constants/Colors";

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <Title>The Game is Over!</Title>
      <View style={styles.gameOverImgContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.gameOverImage}
          resizeMode="cover"
        />
      </View>
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
  gameOverImgContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    marginVertical: 20,
  },
  gameOverImage: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
