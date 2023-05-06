import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

const myIcon = (
  <Icon
    name="plus"
    color="#FF6C00"
    backgroundColor="#ffffff"
    borderRadius="50%"
    size={25}
  />
);

const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegistrationScreen = () => {
  const [keyboardInput, setKeyboardInput] = useState(false);
  const [state, setState] = useState(initialState);
  console.log(keyboardInput);
  console.log(state);

  const handleKeyboard = () => {
    setKeyboardInput(true);
    Keyboard.dismiss();
  };

  return (
    console.log(222, keyboardInput),
    (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ ...styles.container, marginBottom: !state ? -156 : 0 }}
      >
        <View style={styles.form}>
          <View style={styles.photo}>
            <Image
              style={styles.avatarImg}
              source={require('../../assets/images/Rectangle.png')}
            />
          </View>

          <TouchableOpacity style={styles.btnPress}>{myIcon}</TouchableOpacity>
          <Text style={styles.title}>Реєстрація</Text>

          <View>
            <TextInput
              style={styles.login}
              textAlign={'left'}
              backgroundColor={'#F6F6F6'}
              placeholder={'Логін'}
              selectionColor={'#212121'}
              onFocus={() => {
                setKeyboardInput(true);
              }}
              value={state.login}
              onChangeText={value =>
                setState(prevState => ({ ...prevState, login: value }))
              }
            />
          </View>
          <View>
            <TextInput
              style={styles.email}
              textAlign={'left'}
              backgroundColor={'#F6F6F6'}
              placeholder={'Адреса електронної пошти'}
              selectionColor={'#212121'}
              onFocus={() => {
                setKeyboardInput(true);
              }}
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
              onFocus={() => {
                setKeyboardInput(true);
              }}
            />
            <TouchableOpacity
              style={{ position: 'absolute' }}
              // onPress={handlePress}
            >
              <Text style={styles.ShowPassword}>Показати</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={handleKeyboard}
          >
            <Text style={{ color: '#FFFFFF' }}>Зареєструватись</Text>
          </TouchableOpacity>
          <Pressable>
            <Text style={styles.signIn}>Вже є обліковий запис? Увійти</Text>
          </Pressable>
          <Pressable style={styles.homeIndication}>
            <View style={styles.indication}></View>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    )
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  btnPress: {
    zIndex: 2,
    position: 'absolute',

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

  avatarImg: {
    height: '100%',
    width: '100%',
    borderRadius: 16,
    resizeMode: 'contain',
  },

  title: {
    marginBottom: 32,
    paddingTop: 96,
    color: '#212121',
    textAlign: 'center',
    fontSize: 30,
  },

  form: {
    position: 'relative',
    height: 549,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
  },

  login: {
    height: 50,
    width: 343,
    marginBottom: 16,
    paddingLeft: 16,

    // fontFamily: 'Roboto',
    // fontWeight: 400,
    fontSize: 16,
    // lineHeight: 19,
    // borderWidth: 3,
    // borderColor: '#fff',
    borderRadius: 8,
    color: '#BDBDBD',
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
    paddingHorizontal: 93.5,
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
