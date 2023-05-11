import { View, Text, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import { Camera } from 'expo-camera';
import { useState } from 'react';

import { Feather } from '@expo/vector-icons';

import { styles } from './CreatePostsScreenStyles';
import Container from '../../../components/common/Container/Container';

const arrowSvgIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 12H4" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 18L4 12L10 6" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const CreatePostsScreen = ({ navigation }) => {
  const [click, setClick] = useState(null);

  const takePictureClick = async () => {
    const photo = await click.takePictureAsync();
    console.log(photo.uri);
  };

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
        <Camera style={styles.camera} ref={setClick}>
          <TouchableOpacity onPress={takePictureClick}>
            <Text style={styles.cameraClick}>Click</Text>
          </TouchableOpacity>
        </Camera>
        <Text style={styles.cameraInform}>Завантажте фото</Text>
        <Text style={styles.cameraName}>Назва...</Text>
        <Text style={styles.cameraLocality}>Місцевість...</Text>
        <TouchableOpacity
          style={styles.cameraButton}
          activeOpacity={0.5}
          // onPress={onButtonSubmit}
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
