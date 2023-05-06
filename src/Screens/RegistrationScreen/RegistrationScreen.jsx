import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Container from '../../components/common/Container';
import Background from '../../components/common/Background/Background';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegistrationScreen = () => {
  const myIcon = <Icon name="plus" fill="black" stroke="red" size={25} />;

  const [keyboardInput, setKeyboardInput] = useState(false);
  const [state, setState] = useState(initialState);

  const handleKeyboard = () => {
    setKeyboardInput(true);
    Keyboard.dismiss();
  };

  const keyboardHide = () => {
    Keyboard.dismiss();
    setKeyboardInput(false);
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <Container>
        <Background>
          <View style={styles.form}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={{
                ...Platform.select({
                  ios: {
                    marginBottom: !keyboardInput ? 46 : 130,
                  },
                  android: {
                    marginBottom: 16,
                  },
                }),
              }}
            >
              <View style={styles.photo}>
                <Image
                  style={styles.avatarImg}
                  source={require('../../assets/images/Rectangle.png')}
                />
                <TouchableOpacity style={styles.btnPress}>
                  <Icon
                    name="plus"
                    fill="black"
                    backgroundColor="yellow"
                    size={25}
                  />
                </TouchableOpacity>
              </View>

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
            </KeyboardAvoidingView>

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
        </Background>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  btnPress: {
    position: 'absolute',
    zIndex: 2,
    left: Dimensions.get('window').width / 2 - 90,
    top: 70,
    backgroundColor: 'red',
    borderRadius: 50,
  },

  photo: {
    width: 120,
    height: 120,
    position: 'absolute',
    top: -60,
    left: Dimensions.get('window').width / 2 - 90,
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
