import {StyleSheet} from 'react-native';
import {Height, Width} from '../../constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Width * 0.86,
    paddingVertical: Height * 0.01,
    marginBottom: Height * 0.01,
    borderRadius: Height * 0.05,
    backgroundColor: '#13333720',
  },
  text: {
    fontSize: 20,
    fontFamily: 'BalooChettan2-Regular',
  },
});

export default styles;
