import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>; // style prop is an array of styles which overrides the default style
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontFamily: "open-sans",
    fontSize: 20,
  },
});
