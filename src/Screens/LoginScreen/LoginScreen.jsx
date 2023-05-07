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
  name: '',
  email: '',
  password: '',
};

const LoginScreen = () => {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [onClickImgPicker, setOnclickImgPicker] = useState(false);

  const handleImageSubmit = () => {
    // console.log('submit');
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  };

  const keyboardHide = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
  };

  const handleImagePicker = () => {
    setOnclickImgPicker(!onClickImgPicker);
    console.log(onClickImgPicker);
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
                    // marginBottom: 0,
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
                  onPress={handleImageSubmit}
                >
                  <Text style={{ color: '#FFFFFF' }}>Увійти</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={styles.signIn}>
                    Вже є обліковий запис? Увійти
                  </Text>
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
