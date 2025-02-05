import { StyleSheet, Text, View } from "react-native";

function GameScreen() {
  return (
    <View style={styles.container}>
      <Text>Game Screen...</Text>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
