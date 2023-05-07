import React, { useState } from 'react';
import {
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
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Container from 'src/components/common/Container/Container';
import Background from 'src/components/common/Background/Background';
import { styles } from './RegistrationScreenStyles';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegistrationScreen = () => {
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
                    marginBottom: isShowKeyboard ? -121 : 0,
                    // marginBottom: 0,
                  },
                }),
              }}
            >
              <View style={styles.avatarWrap}>
                <Image
                  style={styles.avatarImg}
                  source={require('../../assets/images/Rectangle.png')}
                />
                <TouchableOpacity
                  style={{
                    ...styles.avatarBtn,
                  }}
                  onPress={() => {
                    handleImagePicker();
                  }}
                >
                  <View
                    style={{
                      ...styles.avatarBtnIconWrap,
                      transform: onClickImgPicker
                        ? [{ rotate: '-45deg' }]
                        : [{ rotate: '0deg' }],
                    }}
                  >
                    <Icon
                      iconStyle={styles.avatarBtnIcon}
                      name="add-circle-outline"
                      size={30}
                      color={onClickImgPicker ? '#000000' : '#FF6C00'}
                    />
                  </View>
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
                  onSubmitEditing={() => {
                    setIsShowKeyboard(false);
                  }}
                  onFocus={() => {
                    setIsShowKeyboard(true);
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
                  style={styles.button}
                  activeOpacity={0.5}
                  onPress={handleImageSubmit}
                >
                  <Text style={{ color: '#FFFFFF' }}>Зареєструватись</Text>
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

export default RegistrationScreen;
