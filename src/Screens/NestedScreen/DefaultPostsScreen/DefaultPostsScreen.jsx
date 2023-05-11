import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { SvgXml } from 'react-native-svg';

import { styles } from './DefaultPostsScreenStyles';
import Container from '../../../components/common/Container/Container';

//TODO Правильно импортировать svg!

const svgIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 16L21 12L17 8" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 12H9" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const handleLogOut = e => {
  console.log(e);
};

const DefaultPostsScreen = () => {
  // const svgIcon = require('../../../assets/images/log-out.svg');
  return (
    <Container stylesContainer={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Публікації</Text>
        <TouchableOpacity onPress={handleLogOut}>
          <SvgXml
            style={styles.svgLogOut}
            xml={svgIcon}
            width={24}
            height={24}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.userInfo}>
        <Image
          style={styles.userAvatar}
          source={require('../../../../src/assets/images/Rectangle.png')}
        />
        <View>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
    </Container>
  );
};
export default DefaultPostsScreen;
