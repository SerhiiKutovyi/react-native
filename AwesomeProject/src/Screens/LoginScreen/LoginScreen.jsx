import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = () => {
  const handlePress = () => {
    // обработчик события нажатия на иконку
    console.log('Иконка нажата');
  };

  return (
    <View>
      <View style={styles.form}>
        <Text style={styles.title}>Увійти</Text>

        <View>
          <TextInput
            style={styles.email}
            textAlign={'left'}
            backgroundColor={'#F6F6F6'}
            placeholder={'Адреса електронної пошти'}
            selectionColor={'#212121'}
          />
        </View>
        <View
          style={{
            position: 'relative',
            alignItems: 'flex-end',
          }}
        >
          <TextInput
            style={styles.password}
            textAlign={'left'}
            backgroundColor={'#F6F6F6'}
            placeholder={'Пароль'}
            secureTextEntry={true}
            selectionColor={'#212121'}

            // onFocus={() => {}}
          />
          <TouchableOpacity
            style={{ position: 'absolute' }}
            onPress={handlePress}
          >
            <Text style={styles.ShowPassword}>Показати</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} activeOpacity={0.5}>
          <Text style={{ color: '#FFFFFF' }}>Увійти</Text>
        </TouchableOpacity>
        <Pressable>
          <Text style={styles.signIn}>
            Немає облікового запису? Зареєструватись
          </Text>
        </Pressable>
        <Pressable style={styles.homeIndication}>
          <View style={styles.indication}></View>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  btnPress: {
    zIndex: 2,
    position: 'absolute',
    width: 25,
    height: 25,

    left: 243,
    top: 21,
  },
  photo: {
    width: 120,
    height: 120,
    position: 'absolute',

    top: -60,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },
  title: {
    marginVertical: 32,
    color: '#212121',
    textAlign: 'center',
    fontSize: 30,
  },
  form: {
    position: 'relative',
    height: 489,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
  },

  email: {
    height: 50,
    width: 343,

    marginBottom: 16,
    paddingLeft: 16,

    fontSize: 16,

    borderRadius: 8,
    color: '#BDBDBD',
  },
  password: {
    height: 50,
    width: 343,

    paddingLeft: 16,
    marginBottom: 43,

    fontSize: 16,

    borderRadius: 8,
    color: '#BDBDBD',
  },

  ShowPassword: {
    top: 10,
    left: -16,
    color: '#1B4371',
    fontSize: 16,
  },

  button: {
    marginBottom: 16,
    backgroundColor: '#FF6C00',
    paddingVertical: 16,
    width: 343,
    alignItems: 'center',

    borderRadius: 100,
  },
  // signIn: {
  //   marginBottom: 'auto',
  // },
  homeIndication: {
    marginTop: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-end',

    height: 34,
    width: '100%',
  },
  indication: {
    marginBottom: 8,
    width: 134,
    height: 5,
    borderRadius: 100,
    backgroundColor: '#212121',
  },
});
