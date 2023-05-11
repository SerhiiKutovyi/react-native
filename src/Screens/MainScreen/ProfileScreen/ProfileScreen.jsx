import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Container from '../../../components/common/Container/Container';
import Background from '../../../components/common/Background/Background';
import { styles } from './ProfileScreenStyles';

const ProfileScreen = () => {
  const [state, setState] = useState('');
  const [onClickImgPicker, setOnclickImgPicker] = useState(false);

  const handleImagePicker = () => {
    setOnclickImgPicker(!onClickImgPicker);
  };

  return (
    <Container>
      <Background>
        <View style={styles.form}>
          <View style={styles.avatarWrap}>
            <Image
              style={styles.avatarImg}
              source={require('../../../assets/images/Rectangle.png')}
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
          <Text style={styles.title}>Natali Romanova</Text>
        </View>
      </Background>
    </Container>
  );
};

export default ProfileScreen;
