import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

function NumberGuessContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberGuessContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 10,
    margin: 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 50,
    fontWeight: "bold",
  },
});
