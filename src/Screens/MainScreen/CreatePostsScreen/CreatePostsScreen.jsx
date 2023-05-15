import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  keyboardVerticalOffset,
} from 'react-native';

import * as React from 'react';
import * as Location from 'expo-location';
import { useState, useEffect } from 'react';
import * as MediaLibrary from 'expo-media-library';

import { Feather, AntDesign } from '@expo/vector-icons';

import { styles } from './CreatePostsScreenStyles';
import Container from '../../../components/common/Container/Container';
import { CameraComponent } from '../../../components/common/Camera/Camera';

const initialState = {
  name: '',
  location: '',
  photo: null,
  coordinate: null,
};

const initialFocus = {
  name: false,
  location: false,
};

const CreatePostsScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isFocused, setIsFocused] = useState(initialFocus);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  const [camera, setCamera] = useState(null);

  const takePhotoClick = async () => {
    const photo = await camera.takePictureAsync();

    console.log('photo', photo.uri);

    const location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setState(prevState => ({
      ...prevState,
      photo: photo.uri,
      coordinate: coords,
    }));
    await MediaLibrary.createAssetAsync(photo.uri); //фото збережеться в пам'ять телефону.
  };

  // console.log('state', state);

  const sendPhotoClick = () => {
    console.log('navigation', navigation);
    navigation.navigate('Posts', { state });
    setState(initialState);
  };

  const openCamera = () => {
    navigation.navigate('Posts', { state });
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setIsKeyboardShown(false);
      }}
    >
      <Container stylesContainer={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Створити публікацію</Text>
          <TouchableOpacity onPress={openCamera}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.cameraInfo}>
          {state.photo ? (
            <View>
              <Image
                source={{ uri: state.photo }}
                style={{ height: 210, width: '100%' }}
              />
            </View>
          ) : (
            <View style={styles.photoContainer}>
              <CameraComponent
                makePhoto={takePhotoClick}
                location={state.location}
                photo={state.photo}
                setCameraRef={setCamera}
              />
            </View>
          )}

          <Text style={styles.cameraInform}>Завантажте фото</Text>

          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={80}
            style={{
              ...Platform.select({
                ios: {
                  marginBottom: !isShowKeyboard ? 46 : 130,
                },
                android: {
                  marginBottom: 50,
                },
              }),
            }}
          >
            <TextInput
              style={styles.inputName}
              textAlign={'left'}
              placeholder={'Назва...'}
              placeholderTextColor={'#BDBDBD'}
              selectionColor={'#212121'}
              onSubmitEditing={() => {
                setIsShowKeyboard(false);
              }}
              onFocus={() => {
                setIsShowKeyboard(true);
              }}
              value={state.name}
              onChangeText={value =>
                setState(prevState => ({ ...prevState, name: value }))
              }
            />

            <View style={{ position: 'relative' }}>
              <View style={{ position: 'absolute', top: 25 / 2 }}>
                <Feather name="map-pin" size={24} color="#BDBDBD" />
              </View>

              <TextInput
                style={styles.inputLocality}
                textAlign={'left'}
                placeholder={'Місцевість...'}
                placeholderTextColor={'#BDBDBD'}
                selectionColor={'#212121'}
                onSubmitEditing={() => {
                  setIsShowKeyboard(false);
                }}
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                value={state.location}
                onChangeText={value =>
                  setState(prevState => ({ ...prevState, location: value }))
                }
              />
            </View>

            <TouchableOpacity
              style={styles.cameraButton}
              activeOpacity={0.5}
              onPress={sendPhotoClick}
            >
              <Text style={styles.cameraTextButton}>Опублікувати</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cameraClear}>
              <Feather name="trash-2" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </Container>
    </TouchableWithoutFeedback>
  );
};
export default CreatePostsScreen;
