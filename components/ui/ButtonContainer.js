import { StyleSheet, View } from "react-native";

function ButtonContainer({ children }) {
  return <View style={styles.buttonContainer}>{children}</View>;
}

export default ButtonContainer;

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
  },
});
