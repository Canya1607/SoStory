import { StyleSheet } from 'react-native';
import { Width, Height } from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: Width * 0.72,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Height * 0.014,
  },
  text: {
    fontSize: 16,
  }
});

export default styles;
