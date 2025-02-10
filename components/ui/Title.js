import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    padding: 8,
    borderColor: "white",
    borderWidth: 2,
    textAlign: "center",
  },
});
