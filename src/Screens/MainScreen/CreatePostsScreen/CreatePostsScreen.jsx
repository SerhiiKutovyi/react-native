import { View, Text, TouchableOpacity, Image } from 'react-native';

import { SvgXml } from 'react-native-svg';
import * as React from 'react';
import { Camera, CameraType } from 'expo-camera';
import * as Location from 'expo-location';
import { useState, useEffect } from 'react';
import * as MediaLibrary from 'expo-media-library';

import { Feather } from '@expo/vector-icons';

import { styles } from './CreatePostsScreenStyles';
import Container from '../../../components/common/Container/Container';

const arrowSvgIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 12H4" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 18L4 12L10 6" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const initialState = {
  name: '',
  location: '',
  photo: null,
  coordinate: null,
};

// const initialFocus = {
//   name: false,
//   location: false,
// };

const CreatePostsScreen = ({ navigation }) => {
  // const [hasPermission, setHasPermission] = useState(null);
  const [state, setState] = useState(initialState);
  const [click, setClick] = useState('');
  const [camera, setCamera] = useState(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setState(prevState => ({
        ...prevState,
        photo: null,
      }));
    });
    return unsubscribe;
  }, [navigation]);

  const takePhotoClick = async () => {
    const photo = await camera.takePictureAsync();

    console.log('photo', photo.uri);

    // const location = await Location.getCurrentPositionAsync({});
    // const coords = {
    //   latitude: location.coords.latitude,
    //   longitude: location.coords.longitude,
    // };
    setState(prevState => ({
      ...prevState,
      photo: photo.uri,
      // coordinate: coords,
    }));
    // await MediaLibrary.createAssetAsync(photo.uri); //фото збережеться в пам'ять телефону.
  };

  // console.log('state', state);

  const sendPhotoClick = () => {
    console.log('navigation', navigation);
    navigation.navigate('Posts', { state });
    setState(initialState);
  };

  // const openCamera = async () => {
  //   setState(prevState => ({ ...prevState, photo: null }));
  //   setClick(setClick);
  //   // setIsKeyboardShown(false);
  // };

  return (
    <Container stylesContainer={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Створити публікацію</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Posts')}>
          <SvgXml
            style={styles.svgLogOut}
            xml={arrowSvgIcon}
            width={24}
            height={24}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.cameraInfo}>
        <Camera style={styles.camera} ref={setCamera}>
          {state.photo ? (
            <View
              style={{
                height: 210,
                width: 210,
                borderWidth: 1,
              }}
            >
              <Image
                source={{ uri: state.photo }}
                style={{ height: 20, width: 20 }}
              />
            </View>
          ) : (
            <TouchableOpacity onPress={takePhotoClick}>
              <Text style={styles.cameraClick}>Click</Text>
            </TouchableOpacity>
          )}
        </Camera>

        <Text style={styles.cameraInform}>Завантажте фото</Text>
        <Text style={styles.cameraName}>Назва...</Text>
        <Text style={styles.cameraLocality}>Місцевість...</Text>

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
      </View>
    </Container>
  );
};
export default CreatePostsScreen;
