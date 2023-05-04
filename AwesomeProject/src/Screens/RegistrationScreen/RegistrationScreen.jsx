import { StyleSheet, Text, View, TextInput } from 'react-native';

const RegistrationScreen = () => {
  return (
    <View>
      <View style={styles.form}>
        <Text style={styles.title}>Реєстрація</Text>
        <View>
          <TextInput
            style={styles.input}
            textAlign={'left'}
            backgroundColor={'#F6F6F6'}
          />
        </View>
      </View>
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  title: {
    color: '#212121',
    textAlign: 'center',
    fontSize: 30,
  },
  form: {
    height: 549,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  input: {
    height: 50,

    paddingLeft: 16,

    fontSize: 20,
    borderWidth: 3,
    borderColor: '#fff',

    borderRadius: 8,
    marginHorizontal: 16,

    color: '#BDBDBD',
  },
});
