import { StyleSheet, View } from 'react-native';

const Container = ({ stylesContainer, children }) => {
  return (
    <View style={{ ...styles.container, ...stylesContainer }}>{children}</View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
