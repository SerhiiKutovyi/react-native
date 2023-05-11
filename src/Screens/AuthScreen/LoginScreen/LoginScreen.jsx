import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';

import Container from 'src/components/common/Container/Container';
import Background from 'src/components/common/Background/Background';
import { styles } from './LoginScreenStyles';

const initialState = {
  email: '',
  password: '',
};

const LoginScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const onButtonSubmit = () => {
    console.log('Login', state);
    setState(initialState);
  };

  const keyboardHide = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
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
                    marginBottom: !isShowKeyboard ? 46 : 130,
                  },
                  android: {
                    marginBottom: isShowKeyboard ? -243 : 0,
                  },
                }),
              }}
            >
              <Text style={styles.title}>Увійти</Text>

              <View>
                <TextInput
                  style={styles.email}
                  textAlign={'left'}
                  backgroundColor={'#F6F6F6'}
                  placeholder={'Адреса електронної пошти'}
                  selectionColor={'#212121'}
                  onSubmitEditing={() => {
                    setIsShowKeyboard(false);
                  }}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  value={state.email}
                  onChangeText={value =>
                    setState(prevState => ({ ...prevState, email: value }))
                  }
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
                  onSubmitEditing={() => {
                    setIsShowKeyboard(false);
                  }}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  value={state.password}
                  onChangeText={value =>
                    setState(prevState => ({ ...prevState, password: value }))
                  }
                />
                <TouchableOpacity
                  style={{ position: 'absolute' }}
                  // onPress={onSubmitForm}
                >
                  <Text style={styles.ShowPassword}>Показати</Text>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity
                  style={styles.buttonSubmit}
                  activeOpacity={0.5}
                  // onPress={onButtonSubmit}
                  onPress={() => navigation.navigate('PostsScreen')}
                >
                  <Text style={{ color: '#FFFFFF' }}>Увійти</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('Register')}
                >
                  <Text style={styles.buttonSignIn}>Зареєструватись.</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.homeIndication}>
                  <View style={styles.indication}></View>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
        </Background>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
