import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const myIcon = <Icon name="github" size={25} color="#900" />;

const RegistrationScreen = () => {
  const handlePress = () => {
    // обработчик события нажатия на иконку
    console.log('Иконка нажата');
  };
  return (
    <View>
      <View style={styles.form}>
        <View style={styles.photo}></View>
        <TouchableOpacity onPress={handlePress} style={styles.btnPlus}>
          {myIcon}
        </TouchableOpacity>

        <Text style={styles.title}>Реєстрація</Text>
        <View>
          <TextInput
            style={styles.login}
            textAlign={'left'}
            backgroundColor={'#F6F6F6'}
            placeholder={'Логін'}
            selectionColor={'#212121'}
          />
        </View>
        <View>
          <TextInput
            style={styles.email}
            textAlign={'left'}
            backgroundColor={'#F6F6F6'}
            placeholder={'Адреса електронної пошти'}
            selectionColor={'#212121'}
          />
        </View>
        <View>
          <TextInput
            style={styles.password}
            textAlign={'left'}
            backgroundColor={'#F6F6F6'}
            placeholder={'Пароль'}
            secureTextEntry={true}
            selectionColor={'#212121'}
          />
        </View>
        <TouchableOpacity style={styles.button} activeOpacity={0.5}>
          <Text>Зареєструватись</Text>
        </TouchableOpacity>
        <Pressable>
          <Text style={styles.signIn}>Вже є обліковий запис? Увійти</Text>
        </Pressable>
        <Pressable style={styles.homeIndication}>
          <View style={styles.indication}></View>
        </Pressable>
      </View>
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  btnPlus: {
    zIndex: 9999,
    borderRadius: '50%',
    position: 'absolute',
    width: 25,
    height: 25,

    left: 235,
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
