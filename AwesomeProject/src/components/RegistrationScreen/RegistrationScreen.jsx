import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello RegistrationScreen!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
