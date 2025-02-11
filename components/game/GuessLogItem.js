import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function GuessLogItem({ guess, roundNumber }) {
  return (
    <View style={styles.logItem}>
      <Text style={styles.logText}>#{roundNumber}</Text>
      <Text style={styles.logText}>Opponents Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  logItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    marginVertical: 2,
    borderWidth: 1,
    borderColor: Colors.primary800,
    backgroundColor: Colors.accent500,
    borderRadius: 20,
  },
  logText: {
    fontFamily: "open-sans",
    fontSize: 18,
  },
});
