import { StyleSheet, Text, View, TextInput } from 'react-native';

const RegistrationScreen = () => {
  return (
    <View>
      <TextInput style={styles.input} />
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,

    fontSize: 20,
    borderWidth: 3,
    borderColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 20,
    color: '#212121',
  },
});
