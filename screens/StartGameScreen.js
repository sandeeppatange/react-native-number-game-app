import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/Colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import ButtonsContainer from "../components/ui/ButtonsContainer.js";
import ButtonContainer from "../components/ui/ButtonContainer.js";

function StartGameScreen({ onStartGame }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(inputText) {
    setEnteredNumber(inputText);
  }

  function confirmInputHandler() {
    const cn = parseInt(enteredNumber); // Convert string to number

    if (isNaN(cn) || cn <= 0 || cn > 99) {
      return Alert.alert(
        "Invalid number!", // title
        "Number has to be between 1 and 99.", // message
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }] // button
      );
    }
    console.log("Valid number! : ", cn);
    onStartGame(cn); // Pass the entered number to the parent component using the onStartGame prop
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number!</Title>
      <Card>
        <InstructionText>Enter a Number </InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          title="Enter a number"
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <ButtonsContainer>
          <ButtonContainer>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </ButtonContainer>
          <ButtonContainer>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </ButtonContainer>
        </ButtonsContainer>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 60,
    width: 50,
    fontSize: 32,
    fontFamily: "open-sans-bold",
    //fontWeight: "bold",
    textAlign: "center",
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
  },
});
