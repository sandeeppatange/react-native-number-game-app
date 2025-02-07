import { StyleSheet, View } from "react-native";

function ButtonsContainer({ children }) {
  return <View style={styles.buttonsContainer}>{children}</View>;
}

export default ButtonsContainer;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
  },
});
