import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput title="Enter a number" />
      <PrimaryButton>Confirm</PrimaryButton>
      <PrimaryButton>Reset</PrimaryButton>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 20,
    backgroundColor: "#72063c",
    borderRadius: 8,
    elevation: 50,
  },
});
