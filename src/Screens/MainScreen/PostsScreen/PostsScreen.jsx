import { View, Text, Image } from 'react-native';

import { styles } from './PostsScreen.styles';
import Container from '../../../components/common/Container/Container';

// import * as React from 'react';
// import Svg, { Circle, Path } from 'react-native-svg';

// const SvgComponent = props => (
//   <Svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={25}
//     height={25}
//     fill="none"
//     {...props}
//   >
//     <Circle cx={12.5} cy={12.5} r={12} fill="#fff" stroke="#FF6C00" />
//     <Path
//       fill="#FF6C00"
//       fillRule="evenodd"
//       d="M13 6h-1v6H6v1h6v6h1v-6h6v-1h-6V6Z"
//       clipRule="evenodd"
//     />
//   </Svg>
// );
// // export default SvgComponent;

const PostsScreen = () => {
  return (
    <Container stylesContainer={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Публікації</Text>

        {/* <SvgComponent /> */}
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
export default PostsScreen;
