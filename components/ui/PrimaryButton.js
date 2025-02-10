import { Pressable, Text, View, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: Colors.primary700 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    overflow: "hidden",
    borderRadius: 28,
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    fontFamily: "open-sans-bold",
    color: "white",
    textAlign: "center",
  },
});
