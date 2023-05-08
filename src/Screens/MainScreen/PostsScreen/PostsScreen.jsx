import { View, Text, Image } from 'react-native';
import { styles } from './PostsScreen.styles';
import Container from '../../../components/common/Container/Container';

const PostsScreen = () => {
  return (
    <Container stylesContainer={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Публікації</Text>
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
