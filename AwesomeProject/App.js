
import { StyleSheet, Text, View } from "react-native";
import RegistrationScreen from "./src/components/RegistrationScreen/RegistrationScreen";

export default function App() {
  return <View style={styles.container}>{RegistrationScreen}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
