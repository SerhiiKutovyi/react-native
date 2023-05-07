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

import { styles } from './RegistrationScreenStyles';
import Icon from 'react-native-vector-icons/EvilIcons';
import Container from '../../components/common/Container';
import Background from '../../components/common/Background/Background';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegistrationScreen = () => {
  // const myIcon = <Icon name="plus" fill="black" stroke="red" size={25} />;

  const [showKeyboard, setShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const handleKeyboard = () => {
    setShowKeyboard(true);
    Keyboard.dismiss();
  };

  const keyboardHide = () => {
    setShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handle = () => {
    console.log('object');
  };

  return (
    <TouchableWithoutFeedback onPress={handleKeyboard}>
      <Container>
        <Background>
          <View style={styles.form}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={{
                ...Platform.select({
                  ios: {
                    marginBottom: !showKeyboard ? 46 : 130,
                  },
                  android: {
                    marginBottom: 0,
                  },
                }),
              }}
            >
              <View>
                <View style={styles.photo}>
                  <Image
                    style={styles.avatarImg}
                    source={require('../../assets/images/Rectangle.png')}
                  />
                  <TouchableOpacity style={styles.btnPress} onPress={handle}>
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
                      setShowKeyboard(true);
                    }}
                    value={state.login}
                    onChangeText={value =>
                      setState(prevState => ({ ...prevState, login: value }))
                    }
                  />
                </View>
                {/* <View>
                  <TextInput
                    style={styles.email}
                    textAlign={'left'}
                    backgroundColor={'#F6F6F6'}
                    placeholder={'Адреса електронної пошти'}
                    selectionColor={'#212121'}
                    onFocus={() => {
                      setShowKeyboard(true);
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
                      setShowKeyboard(true);
                    }}
                  />
                  <TouchableOpacity
                    style={{ position: 'absolute' }}
                    // onPress={handlePress}
                  >
                    <Text style={styles.ShowPassword}>Показати</Text>
                  </TouchableOpacity>
                </View> */}
              </View>
            </KeyboardAvoidingView>

            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.5}
              onPress={keyboardHide}
            >
              <Text style={{ color: '#FFFFFF' }}>Зареєструватись</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity>
            <Text style={styles.signIn}>Вже є обліковий запис? Увійти</Text>
          </TouchableOpacity> */}

            {/* <Pressable style={styles.homeIndication}>
            <View style={styles.indication}></View>
          </Pressable> */}
          </View>
        </Background>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
